import {AuthorizationStatus} from '../../const.ts';
import {userSlice} from './user-slice.ts';
import {makeFakeUser} from '../../utlis/mocks.ts';
import {checkAuthorizationAction, loginAction, logoutAction} from '../user-api-actions.ts';

describe('User Slice', () => {
  it('Should return initial state with empty action', () => {
    const mockUser = makeFakeUser();
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser };

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should set "Auth" with "checkAuthorizationAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser };

    const result = userSlice.reducer(initialState, checkAuthorizationAction.fulfilled(mockUser, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('Should set "NoAuth" with "checkAuthorizationAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };

    const result = userSlice.reducer(initialState, checkAuthorizationAction.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('Should set "Auth" with "loginAction.fulfilled" action', () => {
    const mockUser = makeFakeUser();
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser
    };

    const result = userSlice.reducer(initialState, loginAction.fulfilled(mockUser, '', {email: 'test@mail.ru', password: 'agent007'}));

    expect(result).toEqual(expectedState);
  });

  it('Should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: null };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = userSlice.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('Should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Auth, user: null };
    const expectedState = { authorizationStatus: AuthorizationStatus.NoAuth, user: null };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = userSlice.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
