import { useSelector } from 'react-redux';
import { selectFilteredContacts } from './redux/filters/selectors';

import Contact from './Contact.js';
type ContactList = {
  id: number;
  name: string;
  number: string;
};
export const ContactList = () => {
  const searchValue = useSelector(selectFilteredContacts);
  return (
    <div>
      {searchValue.map(({ id, name, number }: ContactList) => (
        <Contact key={id} name={name} number={number} contactId={id} />
      ))}
    </div>
  );
};

export default ContactList;
