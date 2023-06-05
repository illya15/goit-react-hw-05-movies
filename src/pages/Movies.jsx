import getMoviesByName from 'components/Api/getMoviesByName';

// import getMoviesByName  from 'components/API/getMoviesByName';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { ListItem } from './HomePage.styled';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [queryName, setQueryName] = useState(query);
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (queryName) {
      getMoviesByName(queryName)
        .then(response => {
          setFilms(response.results);
        })
        .catch(err => console.error(err));
    }
  }, [queryName]);

  useEffect(() => {
    !query && setSearchParams({});
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.input.value.trim();
    if (inputValue) {
      setQueryName(inputValue);
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="input" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {films &&
          films.map(film => (
            // <ListItem key={film.id}>
              <Link key={film.id} to={`${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            // </ListItem>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
