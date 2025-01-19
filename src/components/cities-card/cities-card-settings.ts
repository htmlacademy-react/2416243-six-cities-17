import {PlaceCardType} from '../../const.ts';

export function citiesCardSettings(cardType: PlaceCardType) {
  switch (cardType) {
    case PlaceCardType.Main:
      return {
        articleClass: 'cities__card',
        infoDivClass: '',
        imageWrapper: 'cities__image-wrapper',
        cardImageWidth: 260,
        cardImageHeight: 260
      };
    case PlaceCardType.Favorites:
      return {
        articleClass: 'favorites__card',
        infoDivClass: 'favorites__card-info',
        imageWrapper: 'favorites__image-wrapper',
        cardImageWidth: 150,
        cardImageHeight: 110
      };
    case PlaceCardType.Near:
      return {
        articleClass: 'near-places__card',
        infoDivClass: '',
        imageWrapper: 'near-places__image-wrapper',
        cardImageWidth: 260,
        cardImageHeight: 260
      };
  }
}
