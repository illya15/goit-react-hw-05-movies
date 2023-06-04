

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
   
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTM0YWFmMDliMmMxMzlhOTI4MzFhZWM5OTQxM2Y0YSIsInN1YiI6IjY0NzNhNDc3YmUyZDQ5MDBkY2RiMWQ3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6oHt0rSWgxH0Za5baWAzf5cDXGvymLs1Q8yEB663gWs',
  },
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


  const getTrendMovies = () =>
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    ).then(response => response.json());

  export default getTrendMovies;
