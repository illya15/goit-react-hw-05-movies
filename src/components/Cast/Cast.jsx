import getCast from 'components/Api/getCast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId)
      .then(response => setCast(response.cast.slice(0, 10)))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(person => (
          <li key={person.id}>
            <img
              src={
                person.profile_path &&
                `https://image.tmdb.org/t/p/w500${person.profile_path}`
              }
              alt="Actor"
              width="110"
              height="150"
            />
            <p>{person.name}</p>
            <p>{person.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
