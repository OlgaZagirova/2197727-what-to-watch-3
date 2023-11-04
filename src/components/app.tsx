import MainScreen from '../pages/main-screen';

type AppProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
}

function App({promoFilmTitle, promoFilmGenre, promoFilmYear}: AppProps): JSX.Element {
  return (
    <MainScreen
      promoFilmTitle={promoFilmTitle}
      promoFilmGenre={promoFilmGenre}
      promoFilmYear={promoFilmYear}
    />
  );
}

export default App;
