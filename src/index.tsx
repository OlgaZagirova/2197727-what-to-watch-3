import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AppProps } from './components/props';
import { films } from './mocks/films';
import { promoFilm } from './mocks/promo-film';
import { reviews } from './mocks/reviews';
import { PreviewFilm } from './components/preview-film';
import { Provider } from 'react-redux';
import { store } from './store-index';
import { fetchFilmsAction } from './components/api-action';

store.dispatch(fetchFilmsAction());

const appData: AppProps = {
  promoFilmCard: promoFilm,
  smallFilmCards: films.slice(1, films.length) as PreviewFilm[],
  films: films,
  reviews: reviews,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmCard={appData.promoFilmCard}
        smallFilmCards={appData.smallFilmCards}
        films={appData.films}
        reviews={appData.reviews}
      />
    </Provider>
  </React.StrictMode>
);
