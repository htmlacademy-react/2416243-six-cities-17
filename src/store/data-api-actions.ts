import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {
  loadComments,
  loadCurrentOffer,
  loadFavoriteOffers,
  loadNearestOffers,
  loadOffers,
  setDataLoadingStatus
} from './action';
import {CurrentOfferType, OfferType} from '../types/offer';
import {APIRoute} from '../const';
import {CommentType} from '../types/comment';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<CurrentOfferType>(`${APIRoute.Offers}/${id}`);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadCurrentOffer(data));
  }
);

export const fetchNearestOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearestOffersAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadNearestOffers(data));
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffersAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadFavoriteOffers(data));
  }
);

export const updateOfferFavoriteStatusAction = createAsyncThunk<void, OfferType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/updateOfferFavoriteStatusAction',
  async ({isFavorite, id}, {dispatch, extra: api}) => {
    const status = isFavorite ? 0 : 1;
    await api.post(`${APIRoute.Favorite}/${id}/${status}`);
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
  }
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  }
);
