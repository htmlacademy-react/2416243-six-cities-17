import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getSortOpenStatus = (state: Pick<State, NameSpace.Sort>) => state[NameSpace.Sort].isSortOptionsOpen;
