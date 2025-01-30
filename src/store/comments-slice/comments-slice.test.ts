import {commentsSlice} from './comments-slice.ts';
import {makeFakeComments} from '../../utlis/mocks.ts';
import {fetchCommentsAction} from '../data-api-actions.ts';

describe('Comments Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: []
    };

    const result = commentsSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      comments: []
    };

    const result = commentsSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should set "comments" to array with comments with "fetchCommentsAction.fulfilled"', () => {
    const mockComments = makeFakeComments();
    const expectedState = {
      comments: [...mockComments.comments]
    };

    const result = commentsSlice.reducer(undefined, fetchCommentsAction.fulfilled(mockComments.comments, '', ''));

    expect(result).toEqual(expectedState);
  });
});
