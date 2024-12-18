import {Sorts} from '../const.ts';
import {OfferType} from '../types/offer.ts';

const sortPriceLowToHigh = (offerA: OfferType, offerB: OfferType) => offerA.price - offerB.price;
const sortPriceHighToLow = (offerA: OfferType, offerB: OfferType) => offerB.price - offerA.price;
const sortTopRatedFirst = (offerA: OfferType, offerB: OfferType) => offerB.rating - offerA.rating;

export const placeSorting = {
  [Sorts.POPULAR]: (offers: OfferType[]) => offers,
  [Sorts.PRICE_LOW_TO_HIGH]: (offers: OfferType[])=> offers.toSorted(sortPriceLowToHigh),
  [Sorts.PRICE_HIGH_TO_LOW]: (offers: OfferType[])=> offers.toSorted(sortPriceHighToLow),
  [Sorts.TOP_RATED_FIRST]: (offers: OfferType[])=> offers.toSorted(sortTopRatedFirst)
};
