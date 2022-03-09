import { useEffect, useState } from 'react';
import './assets/css/App.css';
import jsonp from 'jsonp';
import Tile from './components/Tile'

function App() {

  const [tiles, setTiles] = useState();
  const [filterTiles, setFilterTiles] = useState([])
  const [oneWorld, setOneWorld] = useState(false)
  const [skyTeam, setSkyTeam] = useState(false)
  const [startAlliance, setStartAlliance] = useState(false)

  useEffect(()=>{
    jsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', {param: 'jsonp'}, (err, data) => {
      if(err){console.log(err)}
      else { setTiles(data); setFilterTiles(data) }
    })
    }, [])

  useEffect(() => {
    
    if (!oneWorld && !skyTeam && !startAlliance){
      setFilterTiles(tiles)
    } else {
      let myTile = []

      if(oneWorld) {myTile.push(...tiles.filter(item => item.alliance === 'OW'))}
      if(skyTeam) {myTile.push(...tiles.filter(item => item.alliance === 'ST'))}
      if(startAlliance) {myTile.push(...tiles.filter(item => item.alliance === 'SA'))}

      setFilterTiles(myTile)
    } 
  }, [oneWorld, skyTeam, startAlliance])


  console.log(filterTiles)

  return (
    <div className="App">
      <header>
        <img src="Logo.svg" alt="" />
      </header>

      <main>
        <h1>Airlines</h1>

        <div className='filters'>
          <h2>Filter by Alliances</h2>

          <input type="checkbox" id='oneworld' onChange={() => setOneWorld(!oneWorld)} />
          <label htmlFor="oneworld">Oneworld</label>

          <input type="checkbox" id='skyTeam' onChange={() => setSkyTeam(!skyTeam)} />
          <label htmlFor="skyTeam">Sky Team</label>

          <input type="checkbox" id='startAlliance' onChange={() => setStartAlliance(!startAlliance)} />
          <label htmlFor="startAlliance">Start Alliance</label>    
        </div>
    
        <ul className='tiles'>
          {filterTiles && filterTiles.map((value, index) => {
            return <Tile key={index} value={value}/>
          })}
        </ul>
      
      </main>
    </div>
  );
}

export default App;