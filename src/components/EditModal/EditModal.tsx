import React, { useState } from 'react';
import Modal from 'react-modal';

import { useFormik } from 'formik';
import { updateContact } from '../../redux/contacts/operations';
import { useAppDispatch } from '../../redux/store';
import * as Yup from 'yup';

import s from './EditModal.module.css';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type FormData = {
  id: string;
  updatedData: object;
};
// ========
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  contacts: Yup.string().required('Number is required'),
});
// ========
export function ModalComponent({ currentId }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      contacts: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const payload: FormData = {
        id: currentId,
        updatedData: values,
      };

      dispatch(updateContact(payload));
      resetForm();
    },
  });
  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Edit modal'
      >
        <form onSubmit={formik.handleSubmit} className={s.formElement}>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              name='name'
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className='error-message'>{formik.errors.name}</div>
            ) : null}
          </div>

          <div>
            <label htmlFor='number'>Number</label>
            <input
              type='text'
              id='contacts'
              name='contacts'
              onChange={formik.handleChange}
              value={formik.values.contacts}
            />
            {formik.touched.contacts && formik.errors.contacts ? (
              <div className='error-message'>{formik.errors.contacts}</div>
            ) : null}
          </div>

          <div>
            <button type='submit'>Submit</button>
            <button onClick={closeModal}>close</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
