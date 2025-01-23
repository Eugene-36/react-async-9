import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../redux/hooks';
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
  const dispatch = useAppDispatch();
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
          <div className='wrapper'>
            <AddContactForm />
          </div>
        </section>

        <section>
          <div className='wrapper'>
            <SearchBox />
          </div>
        </section>
        <section>
          <div className='wrapper'>
            <ContactList />
          </div>
        </section>
      </motion.div>
    </>
  );
}
