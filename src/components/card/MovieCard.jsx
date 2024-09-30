import PropTypes from 'prop-types';
import Styles from './styles.module.css';

const MovieCard = ({ movie }) => {
  const IMG_URL = import.meta.env.VITE_IMG;
  return (
    <div className={Styles.movieCard}>
      <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} className={Styles.moviePoster} />
      <div className={Styles.movieInfo}>
        <h3>{movie.title}</h3>
        <p>Nota: {movie.vote_average}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
