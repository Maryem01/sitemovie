
import MovieCard from "./MovieCard";
 
const MovieList = ({movies,search}) => {


 

  
  return (
    <div className="list">
      {movies.filter (el=>el.name.toLowerCase().includes(search.toLowerCase())).map((el,idx) =>  (
        <MovieCard key={idx} movie={el} />
      ))}
    </div>
  );
};

export default MovieList;


