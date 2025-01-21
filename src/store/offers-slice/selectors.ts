import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getOffers = (state: State) => state[NameSpace.Offers].offers;

export const getCurrentOffer = (state: State) => state[NameSpace.Offers].currentOffer;

export const getNearestOffers = (state: State) => state[NameSpace.Offers].nearestOffers;

export const getFavoriteOffers = (state: State) => state[NameSpace.Offers].favoriteOffers;

export const getOffersDataLoadingStatus = (state: State) => state[NameSpace.Offers].isOffersDataLoading;

export const getCurrentSort = (state: State) => state[NameSpace.Offers].sort;
