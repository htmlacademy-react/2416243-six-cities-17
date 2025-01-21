import {State} from '../../types/state.ts';
import {AuthorizationStatus, NameSpace} from '../../const.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUserData = (state: State) => state[NameSpace.User].user;
