import { motion } from 'framer-motion';
import DocumentTitle from '../../components/DocumentTitle';

import { animations } from '../../animation';

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
        <div
          style={{
            minHeight: 'calc(100vh - 50px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ fontWeight: 500, fontSize: 48, textAlign: 'center' }}>
            Phonebook manager welcome page
            <span role='img' aria-label='Greeting icon'>
              💁‍♀️
            </span>
          </h1>
        </div>
      </motion.div>
    </>
  );
}
