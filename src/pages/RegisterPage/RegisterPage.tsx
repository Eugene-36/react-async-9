import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../RegisterForm/RegisterForm';
import { motion } from 'framer-motion';
import { animations } from '../../animation.tsx';
export default function RegisterPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        className='home component'
      >
        <RegisterForm />
      </motion.div>
    </div>
  );
}
