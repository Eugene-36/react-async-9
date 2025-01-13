import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import './RegisterForm.module.css';

// FUNCTIONS
import { register } from '../redux/auth/operations';

const validationSchema = Yup.object({
  name: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required'),
});
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
      console.log(values);
    },
  });

  return (
    <>
      <h1 className='headline'>Registration Form </h1>
      <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor='fullName'>Full Name</label>
            <input
              type='text'
              id='fullName'
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error-message'>{formik.errors.name}</div>
            ) : null}
          </div>

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
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
