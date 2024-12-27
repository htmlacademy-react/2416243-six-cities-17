import {createAction} from '@reduxjs/toolkit';
import {CityType, OfferType} from '../types/offer.ts';
import {AuthorizationStatus} from '../const.ts';

export const Action = {
  LOAD_OFFERS: 'LOAD_OFFERS',
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORTING: 'CHANGE_SORTING',
  OPEN_SORTING: 'OPEN_SORTING',
  CLOSE_SORTING: 'CLOSE_SORTING',
  RESET_SORTING: 'RESET_SORTING',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  REQUIRE_AUTH: 'REQUIRE_AUTH',
  SET_ERROR: 'SET_ERROR'
};

export const loadOffers = createAction<OfferType[]>(Action.LOAD_OFFERS);
export const changeCity = createAction(Action.CHANGE_CITY, (selectedCity: CityType) => ({
  payload: selectedCity
}));
export const changeSorting = createAction(Action.CHANGE_SORTING, (currentSorting: string) => ({
  payload: currentSorting
}));
export const openSorting = createAction(Action.OPEN_SORTING);
export const closeSorting = createAction(Action.CLOSE_SORTING);
export const resetSorting = createAction(Action.RESET_SORTING);
export const setOffersLoadingStatus = createAction<boolean>(Action.SET_OFFERS_LOADING_STATUS);
export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTH);
export const setError = createAction<string | null>(Action.SET_ERROR);
