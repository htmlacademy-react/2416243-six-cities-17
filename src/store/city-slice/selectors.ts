import {State} from '../../types/state.ts';
import {CityType} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';

export const getCurrentCity = (state: Pick<State, NameSpace.City>): CityType => state[NameSpace.City].city;
