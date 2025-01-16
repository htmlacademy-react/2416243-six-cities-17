import {RatingType} from './types/rating.ts';
import {MapIconsType} from './types/map.ts';

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

export const MapIcon: MapIconsType = {
  Default: {
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  },
  Active: {
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39]
  },
};

export const Cities = {
  PARIS: {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 14
    }
  },
  COLOGNE: {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 14
    }
  },
  BRUSSELS: {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 14
    }
  },
  AMSTERDAM: {
    name: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
      zoom: 14
    }
  },
  HAMBURG: {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 14
    }
  },
  DUSSELDORF: {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 14
    }
  },
};

export const DateFormat = {
  DATE: 'YYYY-MM-DD',
  MONTH_YEAR: 'MMMM YYYY'
};

export const Sorts = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first'
};

export enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';

export const BACKEND_REQUEST_TIMEOUT = 5000;

export const MAX_IMAGES_PER_OFFER = 6;

export const MAX_NEAREST_OFFERS = 3;

export const MAX_REVIEW_SHOWN = 10;
