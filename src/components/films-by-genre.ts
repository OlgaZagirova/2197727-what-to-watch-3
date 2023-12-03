import { useAppSelector } from '..';
import { getFilmsByGenre } from './get-films-by-genre';

export const useFilmsByGenre = (genre: string) => useAppSelector((state) => getFilmsByGenre(state.films, genre));
