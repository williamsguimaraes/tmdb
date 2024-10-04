import React, { useEffect, useState } from "react";
import MovieCard from "../components/card/MovieCard";
import Header from "../components/header/index";
import Footer from "../components/footer/index";
import Styles from "./Home.module.css";

// URLs da API e chave
const movieURL = process.env.REACT_APP_PRIVATE_API;
const apiKey = process.env.REACT_APP_PRIVATE_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  console.log(movieURL, apiKey);

  useEffect(() => {
    const fetchMovies = async () => {
      console.log(movieURL, apiKey);
      try {
        const response = await fetch(`${movieURL}/popular?api_key=${apiKey}`);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={Styles.container}>
      <Header />
      <h2 className={Styles.title}>Filmes Populares</h2>
      <div className={Styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
