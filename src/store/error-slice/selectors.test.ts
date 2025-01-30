import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {getErrorMessage} from './selectors.ts';

describe('Errors Slice Selectors', () => {
  const state: Pick<State, NameSpace.Error> = {
    [NameSpace.Error]: {
      error: 'error'
    }
  };

  it('Should return error from state', () => {
    const {error} = state[NameSpace.Error];
    const result = getErrorMessage(state);

    expect(result).toBe(error);
  });
});
