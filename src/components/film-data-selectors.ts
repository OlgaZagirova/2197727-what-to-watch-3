import { NameSpace } from '../const';
import { Film } from '../film';
import { PreviewFilm } from './preview-film';
import { PromoFilm } from '../promo-film';
import { State } from '../state';

export const getFilms = (state: State): PreviewFilm[] => state[NameSpace.Film].films;
export const getFilmsDataLoading = (state: State): boolean => state[NameSpace.Film].isFilmsDataLoading;

export const getCurrentFilm = (state: State): Film | undefined => state[NameSpace.Film].currentFilm;
export const getFilmDataLoading = (state: State): boolean => state[NameSpace.Film].isFilmDataLoading;

export const getCurrentSimilarFilms = (state: State): PreviewFilm[] => state[NameSpace.Film].currentSimilarFilms;
export const getSimilarFilmsLoading = (state: State): boolean => state[NameSpace.Film].isSimilarFilmsLoading;

export const getPromoFilm = (state: State): PromoFilm | undefined => state[NameSpace.Film].promoFilm;
export const getPromoFilmLoading = (state: State): boolean => state[NameSpace.Film].isPromoFilmLoading;
