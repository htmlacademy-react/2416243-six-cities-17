import {createSlice} from '@reduxjs/toolkit';
import {CommentsSlice} from '../../types/state.ts';
import {fetchCommentsAction, postReviewCommentAction} from '../data-api-actions.ts';
import {NameSpace} from '../../const.ts';

const initialState: CommentsSlice = {
  comments: []
};

export const commentsSlice = createSlice({
  name: NameSpace.Comments,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postReviewCommentAction.fulfilled, (state, action) => {
        state.comments?.push(action.payload);
      });
  }
});
