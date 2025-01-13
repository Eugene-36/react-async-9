import { addContact } from './redux/contacts/operations';
import { useAppDispatch } from './redux/hooks';

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addContact({
        name: event.target.elements.text.value,
        number: event.target.elements.number.value,
      })
    );
    form.reset();
  };
  return (
    <div>
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

export default ContactForm;
