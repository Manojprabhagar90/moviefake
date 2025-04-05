import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import { useParams } from 'react-router-dom';
import search_icon from '../assets/search_icon.png'
//import './Header.css'

const Movies = (typeselectedValue) => {
    const [apiData,setApiData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [search,setSearch] = useState('star')
    const totalPages=10;
    const {type} = useParams();
   
    const fetchData =async()=>{
       
       
       const cdata = await axios.get(`http://www.omdbapi.com/?apikey=11c33351&type=${typeselectedValue.typeselectedValue}&s=${search}&page=${currentPage}`);
        const indv = cdata.data.Search;
 
        setApiData(indv);
    }

    useEffect(()=>{
        fetchData();
    },[currentPage,search,typeselectedValue])

   

      const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
          setCurrentPage(page);
        }
      };
      const handleSearch = () => {
        console.log('Searching for:', searchTerm);
      };
    
    return (
        <>
        <div className="container mx-auto sm:mt-10 w-full">
        { (<div className='text-5xl mx-auto mb-4'>Enter movie name/key word to start...</div>)}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="w-full pr-10 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
      </div>
        <div className="bg-white p-12 rounded-lg shadow-lg flex flex-row flex-wrap justify-between gap-8">
            
        {apiData && apiData.map((movie) =>{
            return (
                <div key={movie.imdbID}>
                    <Movie movie={movie} />

                

                </div>
            );
        })}
            {apiData && <div className="flex justify-center mt-4 sm:ml-[540px]  space-x-2">
                    <button
                    onClick={() => handlePageChange(1)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                    First
                    </button>
                    <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    >
                    Prev
                    </button>
                    <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    >
                    Next
                    </button>
                    <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                    Last
                    </button>
                </div>}
                {!apiData && search && (<div className='text-5xl mx-auto'>No search results</div>)}

                
       </div>
       </>
    //<div>hi</div>
    );
};

export default Movies;