import { useAppDispatch } from './redux/hooks';
import { deleteContact } from './redux/contacts/operations';

type Props = {
  name: string;
  number: string;
  contactId: number;
};
const Contact = ({ name, number, contactId }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className='singleCard'>
      <h3>Card</h3>
      <div className='buttonBlock'>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={() => dispatch(deleteContact(contactId))}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
