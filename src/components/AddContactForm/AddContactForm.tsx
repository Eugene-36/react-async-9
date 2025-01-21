import { addContact } from '../../redux/contacts/operations';
import { useAppDispatch } from '../../redux/hooks';
import { useToast } from '../../components/ToastProvider';
import s from './AddContactForm.module.css';
//AddContactForm
export const AddContactForm = () => {
  const dispatch = useAppDispatch();
  const showToast = useToast();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addContact({
        name: event.target.elements.text.value,
        number: event.target.elements.number.value,
      })
    );
    showToast('Success! New contact added', 'success');
    form.reset();
  };
  return (
    <div className={s.container}>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-wrapper'>
          <input
            required
            type='text'
            name='text'
            placeholder='Write your name'
          />
          <input
            required
            type='text'
            name='number'
            placeholder='Write your number'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default AddContactForm;
