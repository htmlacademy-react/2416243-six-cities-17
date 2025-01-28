import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {OffersSlice} from '../../types/state.ts';
import {
  fetchCurrentOfferAction,
  fetchFavoriteOffersAction,
  fetchNearestOffersAction,
  fetchOffersAction, updateOfferFavoriteStatusAction
} from '../data-api-actions.ts';
import {NameSpace, Sorts} from '../../const.ts';
import {placeSorting} from '../../utlis/place-sorting.ts';

const initialState: OffersSlice = {
  offers: [],
  favoriteOffers: [],
  currentOffer: null,
  nearestOffers: [],
  isOffersDataLoading: false,
  sort: Sorts.POPULAR
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<string>) => {
      state.offers = placeSorting[action.payload]([...state.offers]);
      state.sort = action.payload;
    },
    resetSort: (state) => {
      state.sort = Sorts.POPULAR;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchCurrentOfferAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchNearestOffersAction.fulfilled, (state, action) => {
        state.nearestOffers = action.payload;
      })
      .addCase(updateOfferFavoriteStatusAction.fulfilled, (state, action) => {
        const id = action.payload.id;
        state.offers = state.offers.map((offer) =>
          offer.id === id
            ? {...offer, isFavorite: !offer.isFavorite}
            : offer);
      });
  }
});

export const {changeSort, resetSort} = offersSlice.actions;
