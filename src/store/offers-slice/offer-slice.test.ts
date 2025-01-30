import {makeFakeCurrentOffer, makeFakeOffers} from '../../utlis/mocks.ts';
import {Sorts} from '../../const.ts';
import {changeSort, offersSlice, resetSort} from './offers-slice.ts';
import {
  fetchCurrentOfferAction,
  fetchFavoriteOffersAction,
  fetchNearestOffersAction,
  fetchOffersAction
} from '../data-api-actions.ts';

describe('Offers Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      offers: makeFakeOffers(),
      favoriteOffers: makeFakeOffers(),
      currentOffer: null,
      nearestOffers: makeFakeOffers(),
      sort: Sorts.PRICE_HIGH_TO_LOW,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should change sort with "changeSort" action', () => {
    const initialState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.TOP_RATED_FIRST,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(initialState, changeSort(expectedState.sort));

    expect(result).toEqual(expectedState);
  });

  it('Should reset sort with "resetSort" action', () => {
    const initialState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.TOP_RATED_FIRST,
      isOffersDataLoading: false
    };
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(initialState, resetSort());

    expect(result).toEqual(expectedState);
  });

  it('Should set "isOffersDataLoading" to "true" with "fetchOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = offersSlice.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('Should set "offers" to array with offers, "isOffersDataLoading" to "false" with "fetchOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [...mockOffers],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(undefined, fetchOffersAction.fulfilled(mockOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('Should set "isOffersDataLoading" to "true" with "fetchFavoriteOffersAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = offersSlice.reducer(undefined, fetchFavoriteOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('Should set "favoriteOffers" to array with favoriteOffers, "isOffersDataLoading" to "false" with "fetchFavoriteOffersAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [],
      favoriteOffers: [...mockOffers],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(undefined, fetchFavoriteOffersAction.fulfilled(mockOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('Should set "nearestOffers" to array with nearestOffers, "isOffersDataLoading" to "false" with "fetchNearestOfferAction.fulfilled"', () => {
    const mockOffers = makeFakeOffers();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [...mockOffers],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(undefined, fetchNearestOffersAction.fulfilled(mockOffers, '', ''));

    expect(result).toEqual(expectedState);
  });

  it('Should set "isOffersDataLoading" to "true" with "fetchCurrentOfferAction.pending"', () => {
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: null,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: true
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const result = offersSlice.reducer(undefined, fetchCurrentOfferAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('Should set "currentOffer" to array with currentOffer, "isOffersDataLoading" to "false" with "fetchCurrentOfferAction.fulfilled"', () => {
    const mockCurrentOffer = makeFakeCurrentOffer();
    const expectedState = {
      offers: [],
      favoriteOffers: [],
      currentOffer: mockCurrentOffer,
      nearestOffers: [],
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    };

    const result = offersSlice.reducer(undefined, fetchCurrentOfferAction.fulfilled(mockCurrentOffer, '', mockCurrentOffer.id));

    expect(result).toEqual(expectedState);
  });
});
