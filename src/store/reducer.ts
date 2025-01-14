import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus, Cities, Sorts} from '../const.ts';
import {
  changeCity,
  changeSorting,
  closeSorting, loadComments, loadCurrentOffer, loadNearestOffers,
  loadOffers, loadUserData,
  openSorting, requireAuthorization,
  resetSorting, setError,
  setDataLoadingStatus, loadFavoriteOffers, loadComment
} from './action.ts';
import {placeSorting} from '../utlis/place-sorting.ts';
import {CityType, CurrentOfferType, OfferType} from '../types/offer.ts';
import {CommentType} from '../types/comment.ts';
import {UserData} from '../types/user-data.ts';

type InitialState = {
  city: CityType;
  offers: OfferType[];
  currentOffer: CurrentOfferType | null;
  nearestOffers: OfferType[];
  favoriteOffers: OfferType[];
  sort: string;
  isSortingOpen: boolean;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData | null;
  comments: CommentType[];
}

const initialState: InitialState = {
  city: Cities.PARIS,
  offers: [],
  currentOffer: null,
  nearestOffers: [],
  favoriteOffers: [],
  sort: Sorts.POPULAR,
  isSortingOpen: false,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: null,
  comments: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearestOffers, (state, action) => {
      state.nearestOffers = action.payload;
    })
    .addCase(loadFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadComment, (state, action) => {
      state.comments.push(action.payload);
    });
});
