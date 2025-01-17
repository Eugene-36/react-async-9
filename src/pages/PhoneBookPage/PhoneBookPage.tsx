import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
// CONTACT CREATION COMPONENTS
import { AddContactForm } from '../../components/AddContactForm/AddContactForm';
import { ContactList } from '../../ContactList';

export default function ContactBookPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your PhoneBook</DocumentTitle>

      <section>
        <AddContactForm />
      </section>
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <section>{/* <SearchBox /> */}</section>
      <section>
        <ContactList />
      </section>
      <section>{/* <RegisterForm /> */}</section>
    </>
  );
}
