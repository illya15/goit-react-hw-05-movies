import getTrendMovies from 'components/Api/getTrendMovies';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { ListItem } from './HomePage.styled';
const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => { getTrendMovies().then(response => setFilms(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {films &&
          films.map(film => (
            // <ListItem key={film.id}>
              <Link key={film.id} to={`movies/${film.id}`} style={{display:'block'}}>{film.title}</Link>
            // </ListItem>
          ))}
      </ul>
    </>
  );
};

export default HomePage;
