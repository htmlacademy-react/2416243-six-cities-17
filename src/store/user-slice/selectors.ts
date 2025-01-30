import {State} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../const.ts';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].user;
