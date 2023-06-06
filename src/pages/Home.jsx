import getTrendMovies from 'components/Api/getTrendMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => { getTrendMovies().then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => (
          
              <Link key={movie.id} to={`movies/${movie.id}`} style={{display:'block'}}>{movie.title}</Link>
         
          ))}
      </ul>
    </>
  );
};

export default Home;
