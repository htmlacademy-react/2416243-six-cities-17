import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {userSlice} from './user-slice/user-slice.ts';
import {sortSlice} from './sort-slice/sort-slice.ts';
import {citySlice} from './city-slice/city-slice.ts';
import {commentsSlice} from './comments-slice/comments-slice.ts';
import {offersSlice} from './offers-slice/offers-slice.ts';
import {errorSlice} from './error-slice/error-slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Sort]: sortSlice.reducer,
  [NameSpace.City]: citySlice.reducer,
  [NameSpace.Comments]: commentsSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.Error]: errorSlice.reducer
});
