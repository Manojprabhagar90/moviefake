import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = ({typeselectedValue,settypeselectedValue}) => {

    const navigate = useNavigate();

    const setType = (event) => {
      settypeselectedValue(event.target.value);
     // navigate(`/type/${e.target.value}`)
    };

  return (
    <div>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to='/'> <h1 className="text-2xl font-bold">
          <span className="text-red-400">Movies</span>List
        </h1>
  
        </Link>
        <Link to='/'>Home</Link>
        <div className='flex'>
      
      <select className='w-48 pr-10 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'value={typeselectedValue} onChange={setType}>
          <option value='Movie'>
            Movie
          </option>
          <option value='series'>
            Series
          </option>
          <option value='episode'>
            Episode
          </option>
        </select>
   </div>
        
        
          </header>
    </div>
  )
}

export default Navbar
