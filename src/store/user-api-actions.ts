import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from '../types/auth-data.ts';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {UserData} from '../types/user-data.ts';
import {APIRoute} from '../const.ts';
import {dropToken, saveToken} from '../services/token.ts';

export const checkAuthorizationAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/checkAuthorizationAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loginAction',
  async ({email, password}, {extra: api}) => {
    const {data: {token}, data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    return data;
  }
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/logoutAction',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);
