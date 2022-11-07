
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UrlLocation from './Components/UrlLocation'

function App() {

  const [Location, setLocation] = useState({})

  const [Idlocation, setIdLocation] = useState(" ")

  useEffect(() => {
    const locationrandom = Math.floor(Math.random() * 127)

    axios.get(`https://rickandmortyapi.com/api/location/${locationrandom}`)
      .then(res => setLocation(res.data))

  }, [])

  const valueLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${Idlocation}`)
      .then(res => setLocation(res.data))
  }



  //console.log(Location);

  return (
    <div className="App">
      <div className='Header'>
      <img src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg" alt="" className='Img-Ricky'/>
      <br />
      <input type="text"  value={Idlocation} onChange={e => setIdLocation(e.target.value)} className='Input' />
      <button onClick={valueLocation}>Search Location</button>
      {Idlocation > 126 && alert("There are only 126 places, write a number from 1 to 126")}
      </div>
      <div className='Card-Location'>
      <h2><b>Name:</b> <br /><br />{Location.name}</h2>
      <h2><b>Type:</b><br /><br />{Location.type}</h2>
      <h2><b>Dimension:</b><br /><br />{Location.dimension}</h2>
      <h2><b>Population:</b><br /><br />{Location.residents?.length}</h2>
      </div>
      <h3>Residents</h3>
        {Location.residents?.length === 0 && <h3> There are no residents at this location</h3>}
      <div className='Card-General'>
    
          {Location.residents?.map((characther) => (
           <UrlLocation characther={characther} key={characther}/>
          ))}
      </div>
      
    </div>
  )

}

export default App
