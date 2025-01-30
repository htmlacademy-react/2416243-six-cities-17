import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {UserSlice} from '../../types/state.ts';
import {getAuthorizationStatus, getUserData} from './selectors.ts';

describe('User Slice Selectors', () => {
  it('Should return authorization status from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state: UserSlice = {
      authorizationStatus,
      user: null
    };

    const result = getAuthorizationStatus({[NameSpace.User]: state});

    expect(result).toBe(authorizationStatus);
  });

  it('Should return user from state', () => {
    const authorizationStatus = AuthorizationStatus.Auth;
    const state = {
      [NameSpace.User]: {
        authorizationStatus,
        user: null
      }
    };

    const { user } = state[NameSpace.User];
    const result = getUserData(state);

    expect(result).toBe(user);
  });
});
