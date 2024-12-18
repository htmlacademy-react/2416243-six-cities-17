import {createAction} from '@reduxjs/toolkit';
import {CityType, OfferType} from '../types/offer.ts';

export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFERS: 'FILL_OFFERS',
  CHANGE_SORTING: 'CHANGE_SORTING',
  OPEN_SORTING: 'OPEN_SORTING',
  CLOSE_SORTING: 'CLOSE_SORTING',
  RESET_SORTING: 'RESET_SORTING'
};

export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: CityType) => ({
  payload: selectedCity
}));
export const fillOffers = createAction(Action.FILL_OFFERS, (currentOffers: OfferType[]) => ({
  payload: currentOffers
}));
export const changeSorting = createAction(Action.CHANGE_SORTING, (currentSorting: string) => ({
  payload: currentSorting
}));
export const openSorting = createAction(Action.OPEN_SORTING);
export const closeSorting = createAction(Action.CLOSE_SORTING);
export const resetSorting = createAction(Action.RESET_SORTING);
