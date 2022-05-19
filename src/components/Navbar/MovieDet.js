import React from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
import "../../App.css";

const MovieDet = ({ movies }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const params = useParams();
  const movie = movies.filter((el) => el.id == params.id)[0];
  console.log(movie);
  return (
    <div className="mesdetails">
      <div className="moviedetails">
        <div>
          <img src={movie.posterurl} alt="" />
          <div className="btn">
            <button> Download</button>
            <button> Wath Now</button>
          </div>
        </div>
        <div className="details">
          <h1>{movie.name}</h1>
          <p>{movie.description}</p>
<span>
          <ReactStars
            value={movie.rating}
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          </span>
        </div>
      </div>
      <div className="detailsmovie">
        <iframe
          width="400"
          height="205"
          src={movie.trailer}
          alt=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="205"
          src={movie.trailer}
          alt=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="400"
          height="205"
          src={movie.trailer}
          alt=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieDet;
