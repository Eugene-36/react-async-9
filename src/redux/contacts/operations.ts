import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiContact = axios.create({
  baseURL: 'https://677fbd9f0476123f76a7e001.mockapi.io/',
});
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    console.log('sad', apiContact.defaults.baseURL);
    try {
      const response = await apiContact.get('/Contact');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactDetails, thunkAPI) => {
    try {
      const response = await apiContact.post('/Contact', contactDetails);
      console.log('contact creation', response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await apiContact.delete(`/Contact/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
