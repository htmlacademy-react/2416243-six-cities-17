import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getErrorMessage = (state: State) => state[NameSpace.Error].error;
