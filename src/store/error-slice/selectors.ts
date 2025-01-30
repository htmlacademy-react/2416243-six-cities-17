import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getErrorMessage = (state: Pick<State, NameSpace.Error>) => state[NameSpace.Error].error;
