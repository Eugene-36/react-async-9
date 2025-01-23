import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

interface RootState {
  auth: AuthState;
}

const apiAuth = axios.create({
  baseURL: 'https://task-manager-api.goit.global/',
});

//Add JWT
const setAuthHeader = (token) => {
  apiAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//Add JWT
const clearAuthHeader = () => {
  apiAuth.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await apiAuth.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// =================
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: object, thunkAPI) => {
    try {
      const res = await apiAuth.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// =================
export const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    const res = await apiAuth.post('/users/logout');
    clearAuthHeader();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await apiAuth.get('/users/me');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
