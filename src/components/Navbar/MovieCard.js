import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
  
const MovieCard = ({ movie }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    


    <Link to={`/movies/${movie.id}`}>
    
    <div className="cards">
    
      
       <div className ="photo">
    
       <img src={movie.posterurl} alt="" />
       <div className="info">
       <span>
       <ReactStars
        value={movie.rating}
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
        </span>
       <button >View Details </button>
 
     

          

       
      
    </div> 
       </div> 
      
      </div>
      </Link>
  );
};

export default MovieCard;
