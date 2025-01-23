import { useAppDispatch } from './redux/hooks';
import { deleteContact } from './redux/contacts/operations';
import { useToast } from './components/ToastProvider';
import { ModalComponent } from './components/EditModal/EditModal';

type Props = {
  name: string;
  contacts: string;
  contactId: number;
};
const Contact = ({ name, contacts, contactId }: Props) => {
  const dispatch = useAppDispatch();
  const showToast = useToast();
  return (
    <div className='singleCard'>
      <h3>Card</h3>
      <div className='buttonBlock'>
        <span>{name}</span>
        <span>{contacts}</span>
        <div className='btn-container'>
          <button
            onClick={() => {
              let isDeleteContact = confirm(
                'Are you sure you want to delete contact?'
              );
              if (!isDeleteContact) return;
              dispatch(deleteContact(contactId));
              showToast('Your contact has been deleted', 'success');
            }}
          >
            Delete
          </button>
          <ModalComponent currentId={contactId} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
