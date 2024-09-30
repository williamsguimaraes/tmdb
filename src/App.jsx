import { useEffect, useState } from 'react';
import { getPopularMovies } from './tmdb';
import Styles from './App.module.css';

import MovieCard from './components/card/MovieCard';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getPopularMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  return (
    <div className={Styles.app}>
      <Header />
      <h1>Filmes Populares</h1>
      <div className={Styles.cardContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;