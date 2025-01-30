import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';
import {getSortOpenStatus} from './selectors.ts';

describe('Sort Slice Selectors', () => {
  const state: Pick<State, NameSpace.Sort> = {
    [NameSpace.Sort]: {
      isSortOptionsOpen: true
    }
  };

  it('Should return sort status from state', () => {
    const {isSortOptionsOpen} = state[NameSpace.Sort];
    const result = getSortOpenStatus(state);

    expect(result).toBe(isSortOptionsOpen);
  });
});
