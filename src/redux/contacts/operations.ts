import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiContact = axios.create({
  baseURL: 'https://677fbd9f0476123f76a7e001.mockapi.io/',
});
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
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
  async (contactDetails: object, thunkAPI) => {
    try {
      const response = await apiContact.post('/Contact', contactDetails);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: number, thunkAPI) => {
    try {
      const response = await apiContact.delete(`/Contact/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// UPDATE CONTACT
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (
    { id, updatedData }: { id: string; updatedData: object },
    thunkAPI
  ) => {
    try {
      const response = await apiContact.put(`/Contact/${id}`, updatedData);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
