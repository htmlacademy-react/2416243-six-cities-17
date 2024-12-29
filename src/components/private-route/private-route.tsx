import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Navigate} from 'react-router';
import {ReactElement} from 'react';

interface PrivateRouteProps {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
  requiredAuthorizationStatus: AuthorizationStatus;
  divertToElement: AppRoute;
}

export function PrivateRoute({
  authorizationStatus,
  children,
  requiredAuthorizationStatus,
  divertToElement
}: Readonly<PrivateRouteProps>) {
  return (
    authorizationStatus === requiredAuthorizationStatus
      ? children
      : <Navigate to={divertToElement}/>
  );
}
