import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {

  const [apiData,setApiData] = useState({});
  const [ratings,setRatings] = useState([]);
  const { id } = useParams();

  const fetchData =async()=>{
    const cdata = await axios.get("http://www.omdbapi.com/?apikey=11c33351&i="+id);
   // setApiData(cdata.data);
    const indv = cdata.data;
   
    setRatings(indv.Ratings);
    setApiData(indv);
}

useEffect(()=>{
    fetchData();
   
},[])

  return (
    <div className="container mx-auto p-4">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Movie Poster */}
      <div className="flex-none w-full lg:w-1/3 mb-4 lg:mb-0">
        <img src={apiData.Poster} alt={apiData.title} className="w-full h-auto object-cover scale-75" />
      </div>

      {/* Movie Info */}
      <div className="ml-0 lg:ml-8 w-full lg:w-2/3">
        <h1 className="text-4xl font-semibold mb-2">{apiData.Title}</h1>
        <p className="text-gray-500 text-lg mb-2">Released: {apiData.Year}</p>
        <p className="text-sm text-gray-700 mb-4">{apiData.Genre}</p>
        <p className="text-gray-700 mb-4">{apiData.plot}</p>
        
        {/* Ratings */}
        <div className="mb-4">
          <span className="font-semibold text-lg">Rating: </span>
          <ul className="list-disc pl-6">
          {ratings.map((rating, index) => (
              <li key={index} className="text-gray-700"> <span className="text-yellow-500">{rating.Source} {rating.Value}</span></li>
            ))}
            </ul>
        </div>

        {/* Cast */}
        <div>
          <span className="font-semibold text-lg">Cast: </span>
         
          <span className="text-yellow-500">{apiData.Actors}</span>
          
        </div>
      </div>
    </div>
  </div>

  )
}

export default MovieDetailPage
