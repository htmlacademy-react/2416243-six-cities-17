import ReactDOM from 'react-dom/client';
import {App} from './components/app/app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFavoriteOffersAction, fetchOffersAction} from './store/data-api-actions.ts';
import {ErrorMessage} from './components/error-message/error-message.tsx';
import {Loader} from './components/loader/loader';
import {checkAuthorizationAction} from './store/user-api-actions.ts';

store.dispatch(checkAuthorizationAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoriteOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ErrorMessage/>
    <Loader/>
    <App/>
  </Provider>
);
