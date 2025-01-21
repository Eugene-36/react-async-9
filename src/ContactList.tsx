import { useSelector } from 'react-redux';
import { selectFilteredContacts } from './redux/filters/selectors';

import Contact from './Contact.js';
type ContactList = {
  id: number;
  name: string;
  contacts: string;
};
export const ContactList = () => {
  const searchValue = useSelector(selectFilteredContacts);
  return (
    <div className='list-container'>
      {searchValue.map(({ id, name, contacts }: ContactList) => (
        <Contact key={id} name={name} contacts={contacts} contactId={id} />
      ))}
    </div>
  );
};

export default ContactList;
