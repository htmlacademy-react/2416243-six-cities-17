import {closeSort, openSort, sortSlice} from './sort-slice.ts';

describe('Sort Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {isSortOptionsOpen: false};

    const result = sortSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {isSortOptionsOpen: false };

    const result = sortSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should open sorts with "openSort" action', () => {
    const initialState = {isSortOptionsOpen: false };
    const expectedState = {isSortOptionsOpen: true };

    const result = sortSlice.reducer(initialState, openSort());

    expect(result).toEqual(expectedState);
  });

  it('Should close sorts with "closeSort" action', () => {
    const initialState = {isSortOptionsOpen: true };
    const expectedState = {isSortOptionsOpen: false };

    const result = sortSlice.reducer(initialState, closeSort());

    expect(result).toEqual(expectedState);
  });
});
