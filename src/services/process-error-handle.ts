import {store} from '../store';
import {clearErrorAction} from '../store/api-actions.ts';
import {AxiosError} from 'axios';
import {setError} from '../store/error-slice/error-slice.ts';

type ApiErrorResponse = {
  status: number;
  data: {
    message: string;
  };
}

export const processErrorHandle = (error: unknown) => {
  if (typeof error === 'string') {
    store.dispatch(setError(error));
  } else if (error instanceof AxiosError && error.response) {
    const errorResponse = error.response as ApiErrorResponse;

    store.dispatch(setError(`${errorResponse.status} ${errorResponse.data.message}`));
  } else {
    store.dispatch(setError('An unexpected error occurred'));
  }

  store.dispatch(clearErrorAction());
};
