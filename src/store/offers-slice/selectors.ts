import {State} from '../../types/state.ts';
import {NameSpace} from '../../const.ts';

export const getOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].offers;

export const getCurrentOffer = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].currentOffer;

export const getNearestOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].nearestOffers;

export const getFavoriteOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].favoriteOffers;

export const getOffersDataLoadingStatus = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].isOffersDataLoading;

export const getCurrentSort = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].sort;
