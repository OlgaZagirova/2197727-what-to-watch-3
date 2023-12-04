import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { FilmData } from '../state';
import { fetchFilmAction, fetchFilmsAction, fetchPromoFilmAction, fetchSimilarFilmsAction } from '../components/api-action';

const initialState: FilmData = {
  films: [],
  isFilmsDataLoading: false,
  currentFilm: undefined,
  isFilmDataLoading: false,
  promoFilm: undefined,
  isPromoFilmLoading: false,
  currentSimilarFilms: [],
  isSimilarFilmsLoading: false,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isFilmsDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isFilmsDataLoading = false;
      })
      .addCase(fetchFilmAction.pending, (state) => {
        state.isFilmDataLoading = true;
      })
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        state.isFilmDataLoading = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.currentSimilarFilms = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isPromoFilmLoading = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isPromoFilmLoading = false;
      });
  }
});
