import {setError} from '../store/action.ts';
import {store} from '../store';
import {clearErrorAction} from '../store/api-actions.ts';

export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
