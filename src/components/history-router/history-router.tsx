import {BrowserHistory} from 'history';
import {ReactNode, useLayoutEffect, useState} from 'react';
import {Router} from 'react-router';

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
}

export function HistoryRouter({basename, children, history}: Readonly<HistoryRouterProps>) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => {
    history.listen(setState);
  }, [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
