import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
// CONTACT CREATION COMPONENTS
import { AddContactForm } from '../../components/AddContactForm/AddContactForm';
import { SearchBox } from '../../SearchBox.tsx';
import { ContactList } from '../../ContactList';
import { motion } from 'framer-motion';
import { animations } from '../../animation.tsx';
export default function ContactBookPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your PhoneBook</DocumentTitle>
      <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        className='home component'
      >
        <section>
          <AddContactForm />
        </section>

        <section>
          <SearchBox />
        </section>
        <section>
          <ContactList />
        </section>
      </motion.div>
    </>
  );
}
