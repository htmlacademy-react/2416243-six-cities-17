import {createAsyncThunk} from '@reduxjs/toolkit';
import {TIMEOUT_SHOW_ERROR} from '../const.ts';
import {store} from './index.ts';
import {setError} from './error-slice/error-slice.ts';

export const clearErrorAction = createAsyncThunk(
  'data/clearErrorAction',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

