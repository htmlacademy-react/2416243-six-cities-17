import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Navigate} from 'react-router';
import {ReactElement} from 'react';

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
}

export function PrivateRoute({authorizationStatus, children}: Readonly<PrivateRouteProps>) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}
