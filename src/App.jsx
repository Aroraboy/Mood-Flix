import React from 'react'
import Search from './components/Search.jsx'
import { useState, useEffect } from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3';  
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  },
}

const App = () => {
const [searchTerm, setSearchTerm] = useState('');

const [errorMessage, setErrorMessage] = useState('');

const fetchMovies = async () => {
  try {

  } catch(error) {
    console.error('Error fetching movies:', error);
  }
}

useEffect(() => {
  
}, []);

  return(
    <main>

      <div className='pattern'/>

      <div className="Wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Image" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      </header>  
      
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  )
}

export default App