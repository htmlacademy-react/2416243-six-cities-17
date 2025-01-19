import {createSlice} from '@reduxjs/toolkit';
import {CommentsSlice} from '../../types/state.ts';
import {fetchCommentsAction} from '../data-api-actions.ts';

const initialState: CommentsSlice = {
  comments: []
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  }
});
