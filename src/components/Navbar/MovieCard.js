import { Link } from "react-router-dom";

  
const MovieCard = ({ movie }) => {
  return (
    


    <Link to={`/movies/${movie.id}`}>
    
    <div className="cards">
      
      
       <div className ="photo">
    
       <img src={movie.posterurl} alt="" />
      
       <div className="info">

      
        <i className="fa-solid fa-circle-play"></i>
         <i className="fa-solid fa-thumbs-up"></i>
         <i className="fa-solid fa-thumbs-down"></i>

          <button ><p>Learn More </p></button>

          </div>
      
       </div> 
    
      </div>
      </Link>
  );
};

export default MovieCard;
