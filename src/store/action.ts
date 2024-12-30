import {createAction} from '@reduxjs/toolkit';
import {CityType, CurrentOfferType, OfferType} from '../types/offer.ts';
import {AuthorizationStatus} from '../const.ts';
import {UserData} from '../types/user-data.ts';
import {CommentType} from '../types/comment.ts';

export const Action = {
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOAD_CURRENT_OFFER: 'LOAD_CURRENT_OFFER',
  CHANGE_CITY: 'CHANGE_CITY',
  CHANGE_SORTING: 'CHANGE_SORTING',
  OPEN_SORTING: 'OPEN_SORTING',
  CLOSE_SORTING: 'CLOSE_SORTING',
  RESET_SORTING: 'RESET_SORTING',
  SET_OFFERS_LOADING_STATUS: 'SET_OFFERS_LOADING_STATUS',
  REQUIRE_AUTH: 'REQUIRE_AUTH',
  SET_ERROR: 'SET_ERROR',
  LOAD_USER_DATA: 'LOAD_USER_DATA',
  LOAD_COMMENTS: 'LOAD_COMMENTS'
};

export const loadOffers = createAction<OfferType[]>(Action.LOAD_OFFERS);
export const loadCurrentOffer = createAction<CurrentOfferType>(Action.LOAD_CURRENT_OFFER);

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
export const loadUserData = createAction<UserData>(Action.LOAD_USER_DATA);
export const loadComments = createAction<CommentType[]>(Action.LOAD_COMMENTS);
