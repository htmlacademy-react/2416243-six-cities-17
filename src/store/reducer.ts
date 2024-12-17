import {createReducer} from '@reduxjs/toolkit';
import {Cities} from '../const.ts';
import {offers} from '../mocks/offers.ts';
import {changeCity, fillOffers} from './action.ts';

const initialState = {
  city: Cities.PARIS,
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});
