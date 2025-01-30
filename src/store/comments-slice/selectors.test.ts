import {NameSpace} from '../../const.ts';
import {getComments} from './selectors.ts';
import {State} from '../../types/state.ts';

describe('Comments Slice Selectors', () => {
  const state: Pick<State, NameSpace.Comments> = {
    [NameSpace.Comments]: {
      comments: []
    }
  };

  it('Should return offer comments from state', () => {
    const {comments} = state[NameSpace.Comments];
    const result = getComments(state);

    expect(result).toBe(comments);
  });
});
