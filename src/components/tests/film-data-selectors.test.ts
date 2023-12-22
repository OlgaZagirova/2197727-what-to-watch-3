import { NameSpace } from '../../const';
import { makeFakeFilm, makeFakePreviewFilms, makeFakePromoFilm } from '../../utils/mocks';
import {
  getCurrentFilm,
  getCurrentFilmLoading,
  getCurrentSimilarFilms,
  getCurrentSimilarFilmsLoading,
  getFilms,
  getFilmsLoading,
  getPromoFilm,
  getPromoFilmLoading
} from '../film-data-selectors';

describe('my list process selectors', () => {
  const state = {
    [NameSpace.Film]: {
      films: makeFakePreviewFilms(),
      isFilmsLoading: true,
      currentFilm: makeFakeFilm(),
      isCurrentFilmLoading: false,
      promoFilm: makeFakePromoFilm(),
      isPromoFilmLoading: true,
      currentSimilarFilms: makeFakePreviewFilms(),
      isCurrentSimilarFilmsLoading: false,
    }
  };

  describe('films', () => {
    it('return "films" from state', () => {
      const { films } = state[NameSpace.Film];
      const result = getFilms(state);

      expect(result).toBe(films);
    });

    it('return "isFilmsLoading" from state', () => {
      const { isFilmsLoading } = state[NameSpace.Film];
      const result = getFilmsLoading(state);

      expect(result).toBe(isFilmsLoading);
    });
  });

  describe('current film', () => {
    it('return "currentFilm" from state', () => {
      const { currentFilm } = state[NameSpace.Film];
      const result = getCurrentFilm(state);

      expect(result).toBe(currentFilm);
    });

    it('return "isCurrentFilmLoading" from state', () => {
      const { isCurrentFilmLoading } = state[NameSpace.Film];
      const result = getCurrentFilmLoading(state);

      expect(result).toBe(isCurrentFilmLoading);
    });
  });

  describe('promo film', () => {
    it('return "promoFilm" from state', () => {
      const { promoFilm } = state[NameSpace.Film];
      const result = getPromoFilm(state);

      expect(result).toBe(promoFilm);
    });

    it('return "isPromoFilmLoading" from state', () => {
      const { isPromoFilmLoading } = state[NameSpace.Film];
      const result = getPromoFilmLoading(state);

      expect(result).toBe(isPromoFilmLoading);
    });
  });

  describe('currentSimilarFilms', () => {
    it('return "currentSimilarFilms" from state', () => {
      const { currentSimilarFilms } = state[NameSpace.Film];
      const result = getCurrentSimilarFilms(state);

      expect(result).toBe(currentSimilarFilms);
    });

    it('return "isCurrentSimilarFilmsLoading" from state', () => {
      const { isCurrentSimilarFilmsLoading } = state[NameSpace.Film];
      const result = getCurrentSimilarFilmsLoading(state);

      expect(result).toBe(isCurrentSimilarFilmsLoading);
    });
  });
});
