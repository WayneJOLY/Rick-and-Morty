import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import LocationCard from './assets/Components/LocationCard'
import ResidentCard from './assets/Components/ResidentCard'


function App() {
  
    const [search, setSearch] = useState(Math.floor(Math.random()*126 +1))
    const [location, getLocation] = useFetch()


   useEffect(() => {
    const url=`https://rickandmortyapi.com/api/location/${search}`
      getLocation(url)
   }, [search])

   const textInput=useRef()
   const handleSubmit=(e)=>{
    e.preventDefault()
    setSearch(textInput.current.value.trim())
   }
  
  return (
    <section>
        <div className="header">
              <h1 className='title'>Rick and Morty</h1>
              <form onSubmit={handleSubmit}>
                  <input type="number" ref={textInput} placeholder='Enter a number betwen (1-126)' />
                  <button>Search</button>
                </form>
              <LocationCard
              location={location}/>
        </div>

        <div className="cards-container">
          {
              
            location?.residents.map(resident =>(

            <ResidentCard 
            key={resident}
            url={resident}
            />
            )
            )
            
          }
        </div>
    </section>
  )
}

export default App
