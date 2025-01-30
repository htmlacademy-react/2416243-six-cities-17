import {Cities, NameSpace} from '../../const.ts';
import {getCurrentCity} from './selectors.ts';
import {State} from '../../types/state.ts';

describe('City Slice Selectors', () => {
  const state: Pick<State, NameSpace.City> = {
    [NameSpace.City]: {
      city: Object.values(Cities)[Math.floor(Math.random() * Object.entries(Cities).length)]
    }
  };

  it('Should return city from state', () => {
    const {city} = state[NameSpace.City];
    const result = getCurrentCity(state);

    expect(result).toBe(city);
  });
});
