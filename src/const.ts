import {RatingType} from './types/rating.ts';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  OfferId = ':id',
  Favorites = '/favorites'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum PlaceCardType {
  Main = 'MAIN',
  Favorites = 'FAVORITES',
  Near = 'NEAR'
}

export const starLength = 20;

export const ReviewCommentLengthLimit = {
  Min: 50,
  Max: 300
};

export const Rating: RatingType = {
  'perfect': 5,
  'good': 4,
  'not bad': 3,
  'badly': 2,
  'terribly': 1
};
