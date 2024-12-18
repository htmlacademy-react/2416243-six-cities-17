import {createReducer} from '@reduxjs/toolkit';
import {Cities, Sorts} from '../const.ts';
import {offers} from '../mocks/offers.ts';
import {changeCity, changeSorting, closeSorting, fillOffers, openSorting, resetSorting} from './action.ts';
import {placeSorting} from '../utlis/place-sorting.ts';

const initialState = {
  city: Cities.PARIS,
  offers: offers,
  sort: Sorts.POPULAR,
  isSortingOpen: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sort = action.payload;
      state.offers = placeSorting[action.payload]([...offers]);
    })
    .addCase(openSorting, (state) => {
      state.isSortingOpen = true;
    })
    .addCase(closeSorting, (state) => {
      state.isSortingOpen = false;
    })
    .addCase(resetSorting, (state) => {
      state.sort = Sorts.POPULAR;
    });
});
