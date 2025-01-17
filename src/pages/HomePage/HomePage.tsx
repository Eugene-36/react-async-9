import { motion } from 'framer-motion';
import DocumentTitle from '../../components/DocumentTitle';

import { animations } from '../../animation.tsx';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        className='home component'
      >
        <div style={styles.container}>
          <h1 style={styles.title}>
            Phonebook manager welcome page{' '}
            <span role='img' aria-label='Greeting icon'>
              💁‍♀️
            </span>
          </h1>
        </div>
      </motion.div>
    </>
  );
}
