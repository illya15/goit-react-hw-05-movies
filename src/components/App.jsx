import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import MovieDetalis from './MovieDetalis/MovieDetalis';
import Cast from '../components/Cast/Cast';
import Rewievs from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense>
              <Movies />
            </Suspense>
          }
        />
        <Route path="movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="rewievs" element={<Rewievs />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
