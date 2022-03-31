import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";

const MovieDet = ({ movies }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

const params =useParams()


const movie = movies.filter((el)=> el.id == params.id)[0];
console.log(movie)
  return (
    <div>

    
      <iframe
        width="560"
        height="315"
        src={movie.trailer} alt=""
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="moviedetails">
        <img src={movie.posterurl} alt="" />
        <h1>{movie.name}</h1>
        <p>
       {movie.description}
        </p>
        <ReactStars
        value={movie.rating}
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
};

export default MovieDet;
