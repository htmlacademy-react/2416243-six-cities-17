import {setError} from '../store/action.ts';
import {store} from '../store';
import {clearErrorAction} from '../store/api-actions.ts';
import {AxiosError} from 'axios';

type ApiErrorResponse = {
  status: number;
  data: {
    message: string;
  };
}

export const processErrorHandle = (error: unknown) => {
  if (error instanceof AxiosError && error.response) {
    const errorResponse = error.response as ApiErrorResponse;

    store.dispatch(setError(`${errorResponse.status} ${errorResponse.data.message}`));
  } else {
    store.dispatch(setError('An unexpected error occurred'));
  }

  store.dispatch(clearErrorAction());
};
