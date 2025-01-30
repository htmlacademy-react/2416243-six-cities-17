import {Cities} from '../../const.ts';
import {changeCity, citySlice} from './city-slice.ts';

describe('City Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: Cities.AMSTERDAM};

    const result = citySlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {city: Cities.PARIS};

    const result = citySlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should change city with "changeCity" action', () => {
    const initialState = {city: Cities.COLOGNE};
    const expectedState = {city: Cities.DUSSELDORF};

    const result = citySlice.reducer(initialState, changeCity(expectedState.city));

    expect(result).toEqual(expectedState);
  });
});
