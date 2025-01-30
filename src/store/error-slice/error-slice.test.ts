import {errorSlice, setError} from './error-slice.ts';

describe('Error Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {error: 'error'};

    const result = errorSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {error: null};

    const result = errorSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should set error with "setError" action', () => {
    const initialState = {error: null};
    const expectedState = {error: 'error2'};

    const result = errorSlice.reducer(initialState, setError(expectedState.error));

    expect(result).toEqual(expectedState);
  });
});
