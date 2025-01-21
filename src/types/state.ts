import {store} from '../store';
import {AuthorizationStatus} from '../const.ts';
import {UserData} from './user-data.ts';
import {CommentType} from './comment.ts';
import {CityType, CurrentOfferType, OfferType} from './offer.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type CommentsSlice = {
  comments: CommentType[];
};

export type OffersSlice = {
  offers: OfferType[];
  favoriteOffers: OfferType[];
  currentOffer: CurrentOfferType | null;
  nearestOffers: OfferType[];
  isOffersDataLoading: boolean;
  sort: string;
};

export type SortSlice = {
  isSortOptionsOpen: boolean;
};

export type ErrorSlice = {
  error: string | null;
};

export type CitySlice = {
  city: CityType;
};
