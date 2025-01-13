import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contacts/operations';
// COMPONENTS
import ContactForm from './ContactForm.tsx';
import SearchBox from './SearchBox.tsx';
import ContactList from './ContactList.tsx';
import { selectIsLoading, selectError } from './redux/contacts/selectors.ts';
import RegisterForm from './RegisterForm/RegisterForm.jsx';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <section>
          <ContactForm />
        </section>
        {isLoading && !error && <b>Request in progress...</b>}
        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
        </section>
        <section>
          <RegisterForm />
        </section>
      </div>
    </>
  );
}

export default App;
