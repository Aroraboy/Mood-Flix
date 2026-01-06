import React from 'react'
import Search from './components/Search.jsx'
import { useState } from 'react'

const App = () => {
const [searchTerm, setSearchTerm] = useState('');

  return(
    <main>

      <div className='pattern'/>

      <div className="Wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Image" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App