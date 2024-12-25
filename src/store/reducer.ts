import {createReducer} from '@reduxjs/toolkit';
import {Cities, Sorts} from '../const.ts';
import {
  changeCity,
  changeSorting,
  closeSorting,
  loadOffers,
  openSorting,
  resetSorting,
  setOffersLoadingStatus
} from './action.ts';
import {placeSorting} from '../utlis/place-sorting.ts';
import {CityType, OfferType} from '../types/offer.ts';

type InitialState = {
  city: CityType;
  offers: OfferType[];
  sort: string;
  isSortingOpen: boolean;
  isOffersLoading: boolean;
}

const initialState: InitialState = {
  city: Cities.PARIS,
  offers: [],
  sort: Sorts.POPULAR,
  isSortingOpen: false,
  isOffersLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sort = action.payload;
      state.offers = placeSorting[action.payload]([...state.offers]);
    })
    .addCase(openSorting, (state) => {
      state.isSortingOpen = true;
    })
    .addCase(closeSorting, (state) => {
      state.isSortingOpen = false;
    })
    .addCase(resetSorting, (state) => {
      state.sort = Sorts.POPULAR;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    });
});
