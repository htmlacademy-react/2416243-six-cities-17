import {createAsyncThunk} from '@reduxjs/toolkit';
import {setError} from './action.ts';
import {TIMEOUT_SHOW_ERROR} from '../const.ts';
import {store} from './index.ts';

export const clearErrorAction = createAsyncThunk(
  'data/clearErrorAction',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR
    );
  }
);

