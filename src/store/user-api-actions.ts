import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData} from '../types/auth-data.ts';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {UserData} from '../types/user-data.ts';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {loadUserData, requireAuthorization} from './action.ts';
import {dropToken, saveToken} from '../services/token.ts';

export const checkAuthorizationAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/checkAuthorizationAction',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(loadUserData(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);
export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loginAction',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}, data} = await api.post<UserData>(APIRoute.Login, {email, password});
    dispatch(loadUserData(data));
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/logoutAction',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
