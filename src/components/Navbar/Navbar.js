

import Add from "./Add";
import { useState } from "react";

const Navbar = ({addMovie, setsearch}) => {
  const [showinp, setshowinp] = useState(false)
  return (
    
    <div className="navbar">
      <div className="left">
        <img src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158.png" alt="" />
         <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Movies</li>
        <li>New and Popular</li>
        <li>My List</li>
      </ul>
</div>
      <div className="right">
      <Add addMovie={addMovie} />
       

        {showinp ? <input type="text" className="search" onChange={(e)=>setsearch(e.target.value)}/> :null}
        <i className="fa-solid fa-magnifying-glass" onClick={()=>setshowinp(!showinp)}></i>
       
        <img src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png" alt="" />
   














     </div>

      </div>
  );
};

export default Navbar;
