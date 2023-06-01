import Home from "pages/Home";
import { NavLink,Route,Routes } from "react-router-dom";
// API key 9134aaf09b2c139a92831aec99413f4a

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Colection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movies" element={<div>Movies</div>}></Route>
        <Route path="/movies/:movieId" element={<div>MoviesDetal</div>}></Route>
      </Routes>
    </div>
  );
};

