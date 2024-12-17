import {createAction} from '@reduxjs/toolkit';
import {CityType, OfferType} from '../types/offer.ts';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: CityType) => ({
  payload: selectedCity
}));
export const fillOffers = createAction(Action.FILL_OFFERS, (currentOffers: OfferType[]) => ({
  payload: currentOffers
}));
