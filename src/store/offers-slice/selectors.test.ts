import {State} from '../../types/state.ts';
import {NameSpace, Sorts} from '../../const.ts';
import {makeFakeOffers} from '../../utlis/mocks.ts';
import {
  getCurrentOffer,
  getCurrentSort,
  getFavoriteOffers,
  getNearestOffers,
  getOffers,
  getOffersDataLoadingStatus
} from './selectors.ts';

describe('Offer Slice Selectors', () => {
  const state: Pick<State, NameSpace.Offers> = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      favoriteOffers: makeFakeOffers(),
      currentOffer: null,
      nearestOffers: makeFakeOffers(),
      sort: Sorts.POPULAR,
      isOffersDataLoading: false
    }
  };

  it('Should return offers from state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = getOffers(state);

    expect(result).toBe(offers);
  });

  it('Should return favoriteOffers from state', () => {
    const { favoriteOffers } = state[NameSpace.Offers];
    const result = getFavoriteOffers(state);

    expect(result).toBe(favoriteOffers);
  });

  it('Should return currentOffer from state', () => {
    const { currentOffer } = state[NameSpace.Offers];
    const result = getCurrentOffer(state);

    expect(result).toBe(currentOffer);
  });

  it('Should return nearestOffers from state', () => {
    const { nearestOffers } = state[NameSpace.Offers];
    const result = getNearestOffers(state);

    expect(result).toBe(nearestOffers);
  });

  it('Should return sort from state', () => {
    const { sort } = state[NameSpace.Offers];
    const result = getCurrentSort(state);

    expect(result).toBe(sort);
  });

  it('Should return isOffersDataLoading from state', () => {
    const { isOffersDataLoading } = state[NameSpace.Offers];
    const result = getOffersDataLoadingStatus(state);

    expect(result).toBe(isOffersDataLoading);
  });
});
