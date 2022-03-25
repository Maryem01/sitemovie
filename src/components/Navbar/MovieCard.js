import { Button } from "bootstrap";

  
const MovieCard = ({ movie }) => {
  return (
    <div className="cards">
      
        
       <div className ="photo"><img src={movie.posterurl} alt=""/></div>
         
       
          
    
        
        
       <div className="info">
        <i class="fa-solid fa-circle-play"></i>
         <i class="fa-solid fa-thumbs-up"></i>
         <i class="fa-solid fa-thumbs-down"></i>

          <button style={{ 
    backgroundColor: "Transparent",
    color: "white",
    fontSize: "12px",
    borderRadius: "8px",
    width:"100px",
    height:"40px",
    marginLeft:"55px"
    }}><p style={{ fontSize: "13.5px" }}>Learn More </p></button>
        
      </div>
      </div>
  );
};

export default MovieCard;
