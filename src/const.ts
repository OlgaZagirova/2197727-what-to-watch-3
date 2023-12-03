const HOUR_MINUTES_COUNT = 60;
export const RATING_STAR_COUNT = 10;
export const DEBOUNCE_TIME_FOR_PREVIEW_VIDEO = 1000;
export const FILM_SAME_GENRE_COUNT = 4;
export const SHOWN_FILM_COUNT = 8;
export const DEFAULT_GENRE = 'All genres';

export const getRunTime = (runTime: number) => {
  const hour = Math.floor(runTime / HOUR_MINUTES_COUNT);
  const minute = runTime - hour * HOUR_MINUTES_COUNT;
  return `${hour}h ${minute}m`;
};

export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  FilmData: '/films',
  Player: '/player',
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const FilmTab = {
  Overview: 'OVERVIEW',
  Details: 'DETAILS',
  Reviews: 'REVIEWS'
};

export const FilmTabNameInterface = {
  [FilmTab.Overview]: 'Overview',
  [FilmTab.Details]: 'Details',
  [FilmTab.Reviews]: 'Reviews',
};
