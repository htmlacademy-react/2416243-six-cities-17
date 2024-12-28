import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Cities, Sorts} from '../const.ts';
import {
  changeCity,
  changeSorting,
  closeSorting,
  loadOffers, loadUserData,
  openSorting, requireAuthorization,
  resetSorting, setError,
  setOffersLoadingStatus
} from './action.ts';
import {placeSorting} from '../utlis/place-sorting.ts';
import {CityType, OfferType} from '../types/offer.ts';
import {UserData} from '../types/user-data.ts';

type InitialState = {
  city: CityType;
  offers: OfferType[];
  sort: string;
  isSortingOpen: boolean;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData | null;
}

const initialState: InitialState = {
  city: Cities.PARIS,
  offers: [],
  sort: Sorts.POPULAR,
  isSortingOpen: false,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.user = action.payload;
    });
});
