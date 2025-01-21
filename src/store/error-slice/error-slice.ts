import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorSlice} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

const initialState: ErrorSlice = {
  error: null
};

export const errorSlice = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }

});

export const {setError} = errorSlice.actions;
