import React from 'react'
import { useState } from 'react';


const Add = ({addMovie}) => {
  const [show, setshow]= useState(false);

  const [movie, setmovie] = useState({
    
    name:"",
    description:"",
    rating:"",
    posterurl:"",





  })
  return (
    <div className="Add">
    <i className="fa-solid fa-plus" onClick={()=>setshow(!show)} ></i>
    {show? (
     <div className="fa">
     <i className="fa-solid fa-xmark" onClick={()=>setshow(!show)}></i>
<input  type="text" placeholder='Movie Name' onChange={(e)=>setmovie({...movie,name: e.target.value})}/>
<input  type="text" placeholder='Movie Description' onChange={(e)=>setmovie({...movie,description: e.target.value})}/>
<input  type="number" placeholder='Rate' onChange={(e)=>setmovie({...movie,rate: e.target.value})}/>
<input  type="text" placeholder='PosterUrl' onChange={(e)=>setmovie({...movie,posterurl: e.target.value})}/>

 <button onClick={()=>addMovie(movie)} > Add movie</button>
</div>
    ): null}
</div>   

    
  );
}

export default Add