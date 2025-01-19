import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorSlice} from '../../types/state.ts';

const initialState: ErrorSlice = {
  error: null
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }

});

export const {setError} = errorSlice.actions;
