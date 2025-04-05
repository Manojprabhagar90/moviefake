import React from 'react';
import { useNavigate } from 'react-router-dom';

const Movie = ({movie}) => {

    const navigate = useNavigate();
    
    const handleSubmit = (selected_movie)=>{
        navigate(`/${selected_movie.imdbID}`);
    }
 

    return (
            <div className="w-64 h-80 rounded overflow-hidden shadow-lg bg-white" onClick={()=>handleSubmit(movie)}>
                <img className="w-full h-48 object-cover scale-75"  src={movie.Poster} alt="Product Image"/>
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">{movie.Title}</h2>
                    <p className="text-gray-600 text-lg mt-2">{movie.Year}</p>
                </div>
                
            </div>
    );
};

export default Movie;