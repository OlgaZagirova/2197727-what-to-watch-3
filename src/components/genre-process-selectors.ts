import { NameSpace } from '../const';
import { State } from '../state';

export const getActiveGenre = (state: State): string => state[NameSpace.Genre].genre;
