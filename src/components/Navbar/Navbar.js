import Add from "./Add";
import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ addmovie, setsearch }) => {
  const [showinp, setshowinp] = useState(false);
  return (
    <div className="navbar">
      <div className="left">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158.png"
          alt=""
        />
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

        <img
          src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
