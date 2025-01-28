import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {AxiosInstance} from 'axios';
import {CurrentOfferType, OfferType} from '../types/offer';
import {APIRoute} from '../const';
import {CommentToSendType, CommentType} from '../types/comment';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchCurrentOfferAction = createAsyncThunk<CurrentOfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOfferAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<CurrentOfferType>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearestOffersAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearestOffersAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchFavoriteOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffersAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    return data;
  }
);

export const updateOfferFavoriteStatusAction = createAsyncThunk<OfferType, {id: string; isFavorite: boolean}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/updateOfferFavoriteStatusAction',
  async ({id, isFavorite}, {extra: api}) => {
    const status = isFavorite ? 0 : 1;
    const {data} = await api.post<OfferType>(`${APIRoute.Favorite}/${id}/${status}`);
    return data;
  }
);

export const fetchCommentsAction = createAsyncThunk<CommentType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<CommentType[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postReviewCommentAction = createAsyncThunk<CommentType, CommentToSendType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postReviewCommentAction',
  async ({offerId, rating, comment}, {extra: api}) => {
    const {data} = await api.post<CommentType>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    return data;
  }
);
