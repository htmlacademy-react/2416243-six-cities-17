import {createSlice} from '@reduxjs/toolkit';
import {UserSlice} from '../../types/state.ts';
import {AuthorizationStatus} from '../../const.ts';
import {checkAuthorizationAction, loginAction, logoutAction} from '../user-api-actions.ts';

const initialState: UserSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationAction.pending, (state) => {
        state.user = null;
      })
      .addCase(checkAuthorizationAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthorizationAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});
