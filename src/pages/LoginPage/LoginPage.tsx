import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import { motion } from 'framer-motion';
import { animations } from '../../animation.tsx';
export default function LoginPage() {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        className='home component'
      >
        <LoginForm />
      </motion.div>
    </div>
  );
}
