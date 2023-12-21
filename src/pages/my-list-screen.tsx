import Footer from '../components/footer';
import { Helmet } from 'react-helmet-async';
import FilmList from '../components/film-list';
import HeaderLogo from '../components/header-logo';
import UserBlock from '../components/user-block';
import { useAppDispatch, useAppSelector } from '../index';
import { getFavoriteFilmCount, getFavoriteFilms, getFavoriteFilmsLoading } from '../components/my-list-process-selectors';
import Spinner from '../components/spinner';
import { useEffect } from 'react';
import { fetchFavoriteFilmsAction } from '../components/api-action';

export default function MyListScreen() {
  const dispatch = useAppDispatch();
  const favoriteFilmCount = useAppSelector(getFavoriteFilmCount);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavoriteFilmsDataLoading = useAppSelector(getFavoriteFilmsLoading);

  useEffect(() => {
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  if(isFavoriteFilmsDataLoading) {
    return(
      <Spinner/>
    );
  }

  return (
    <div className="user-page">
      <Helmet>
        <title>WTW. My list</title>
      </Helmet>

      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilmCount}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
}
