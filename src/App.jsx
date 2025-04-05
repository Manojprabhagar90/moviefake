
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Movies from './pages/Movies'
import MovieDetailPage from './pages/MovieDetailPage'
import { useState } from 'react'


function App() {
  const [typeselectedValue,settypeselectedValue] = useState('movie')

    

  return (
    <>
      <BrowserRouter>
      <Navbar typeselectedValue={typeselectedValue} settypeselectedValue={settypeselectedValue}/>
          <Routes>
            <Route path = "/" element={<Movies typeselectedValue={typeselectedValue}/>}/>
            <Route path = "/type/:type" element={<Movies />}/>
            <Route path = "/:id" element={<MovieDetailPage />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
