import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../state';
import { AxiosInstance } from 'axios';
import {
  loadFilm,
  loadFilmReviews,
  loadFilms,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  setFilmDataLoadingStatus,
  setFilmsDataLoadingStatus,
  setSimilarFilmsDataLoadingStatus } from '../action';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { PreviewFilm } from './preview-film';
import { dropToken, saveToken } from './token';
import { Film } from '../film';

export type ReviewData = {
  filmId: string;
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type ReviewAddingData = {
  id: string;
  comment: string;
  rating: number;
}

export const fetchFilmAction = createAsyncThunk<void, {filmId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async ({filmId}, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmDataLoadingStatus(true));
      const {data} = await api.get<Film>(`${APIRoute.Films}/${filmId}`);
      dispatch(setFilmDataLoadingStatus(false));
      dispatch(loadFilm(data));
    } catch {
      dispatch(redirectToRoute('*'));
    }
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, {filmId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({filmId}, {dispatch, extra: api}) => {
    dispatch(setSimilarFilmsDataLoadingStatus(true));
    const {data} = await api.get<PreviewFilm[]>(`${APIRoute.Films}/${filmId}/similar`);
    dispatch(setSimilarFilmsDataLoadingStatus(false));
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<void, {filmId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({filmId}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewData[]>(`${APIRoute.Comments}/${filmId}`);
    dispatch(loadFilmReviews(data));
  },
);

export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<PreviewFilm[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const postReview = createAsyncThunk<
  void,
  ReviewAddingData,
  { dispatch: AppDispatch; extra: AxiosInstance }
>('review/post', async ({ id: filmId, comment, rating }, { extra: api }) => {
  await api.post<ReviewAddingData>(`${APIRoute.Comments}/${filmId}`, { comment, rating });
});
