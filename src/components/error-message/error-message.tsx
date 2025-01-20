import {useAppSelector} from '../../hooks';
import './error-message.css';
import {getErrorMessage} from '../../store/error-slice/selectors.ts';

export function ErrorMessage() {
  const error = useAppSelector(getErrorMessage);

  return error
    ? <div className='error-message'>{error}</div>
    : null;
}
