import getMoviesByName from 'components/Api/getMoviesByName';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [queryName, setQueryName] = useState(query);
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (queryName) {
      getMoviesByName(queryName)
        .then(response => {
          setMovies(response.results);
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
        {movies &&
          movies.map(film => (
            <Link
              key={film.id}
              to={`${film.id}`}
              state={{ from: location }}
              style={{ display: 'block' }}
            >
              {film.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Movies;
