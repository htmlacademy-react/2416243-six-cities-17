import {State} from '../../types/state.ts';
import {CityType} from '../../types/offer.ts';
import {NameSpace} from '../../const.ts';

export const getCurrentCity = (state: State): CityType => state[NameSpace.City].city;
