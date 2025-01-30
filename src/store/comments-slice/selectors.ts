import {State} from '../../types/state.ts';
import {CommentType} from '../../types/comment.ts';
import {NameSpace} from '../../const.ts';

export const getComments = (state: Pick<State, NameSpace.Comments>): CommentType[] => state[NameSpace.Comments].comments;
