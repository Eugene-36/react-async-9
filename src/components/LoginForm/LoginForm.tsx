import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import s from './LoginForm.module.css';
import * as Yup from 'yup';
// FUNCTIONS
import { login } from '../../redux/auth/operations';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values));
      resetForm();
      console.log('login data', values);
    },
  });

  return (
    <>
      <div className={s.formContainer}>
        <h1 className='headline'>Login Form </h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='error-message'>{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className='error-message'>{formik.errors.password}</div>
            ) : null}
          </div>

          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
