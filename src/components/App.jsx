import Home from "pages/Home";
import Movies from "pages/Movies";
import { Route,Routes } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
// API key 9134aaf09b2c139a92831aec99413f4a

export const App = () => {
  return (
    // <div>
    //   <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/movies">Colection</NavLink>
    //   </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>MoviesDetal</div>}>
          <Route path="/movies/:movieId" element={<Cast />} />
          <Route path="/movies/:movieId" element={<Reviews/>} />
        </Route>
      </Routes>
    // </div>
  );
};

