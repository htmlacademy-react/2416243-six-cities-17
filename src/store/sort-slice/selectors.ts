import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getSortOpenStatus = (state: State) => state[NameSpace.Sort].isSortOptionsOpen;
