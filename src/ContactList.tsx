import { useSelector } from 'react-redux';
import { selectFilteredContacts } from './redux/filters/selectors';
import { selectIsLoading } from './redux/contacts/selectors';
import { RotatingLines } from 'react-loader-spinner';

import Contact from './Contact.js';
type ContactList = {
  id: number;
  name: string;
  contacts: string;
};
export const ContactList = () => {
  const searchValue = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className='list-container'>
      {isLoading ? (
        <RotatingLines
          visible={true}
          height='96'
          width='96'
          color='grey'
          strokeWidth='5'
          animationDuration='0.75'
          ariaLabel='rotating-lines-loading'
          wrapperStyle={{}}
          wrapperClass=''
        />
      ) : (
        searchValue.map(({ id, name, contacts }: ContactList) => (
          <Contact key={id} name={name} contacts={contacts} contactId={id} />
        ))
      )}
    </div>
  );
};

export default ContactList;
