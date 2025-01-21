import {createSlice} from '@reduxjs/toolkit';
import {SortSlice} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

const initialState: SortSlice = {
  isSortOptionsOpen: false
};

export const sortSlice = createSlice({
  name: NameSpace.Sort,
  initialState,
  reducers: {
    openSort: (state) => {
      state.isSortOptionsOpen = true;
    },
    closeSort: (state) => {
      state.isSortOptionsOpen = false;
    }
  }
});

export const {openSort, closeSort} = sortSlice.actions;
