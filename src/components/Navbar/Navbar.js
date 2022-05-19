import Add from "./Add";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ addmovie, setsearch }) => {
  const [showinp, setshowinp] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <h1>Popular</h1>
        <ul>
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="">
          <li>Series</li>
          </Link>
          <Link to="/movies">
          <li>Movies</li>
          </Link>
          <Link to=""> 
          <li>New and Popular</li> 
          </Link>
          <Link to=""> 
          <li>My List</li>
          </Link>
        </ul>
      </div>
      <div className="right">
        <Add addmovie={addmovie} />

        {showinp ? (
          <input
            type="text"
            className="search"
            onChange={(e) => setsearch(e.target.value)}
          />
        ) : null}
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => setshowinp(!showinp)}
        ></i>

       
      </div>
    </div>
  );
};

export default Navbar;
