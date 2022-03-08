import { useEffect, useState } from 'react';
import './assets/css/App.css';
import jsonp from 'jsonp';
import Tile from './components/Tile'

function App() {

  const [tiles, setTiles] = useState();

  useEffect(()=>{
    jsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', {param: 'jsonp'}, (err, data) => {
      if(err){console.log(err)}
      else { setTiles(data) }
    })
    }, [])

    console.log(tiles)

  return (
    <div className="App">
      <header>
        <img src="Logo.svg" alt="" />
      </header>

      <main>
        <h1>Airlines</h1>

        <div className='filters'>
          <h2>Filter by Alliances</h2>

          <input type="checkbox" id='oneworld' />
          <label htmlFor="oneworld">Oneworld</label>

          <input type="checkbox" id='skyTeam' />
          <label htmlFor="skyTeam">Sky Team</label>

          <input type="checkbox" id='startAlliance' />
          <label htmlFor="startAlliance">Start Alliance</label>    
        </div>

        
        <ul className='tiles'>
          {tiles && tiles.map((value, index) => {
            return <Tile key={index} value={value}/>
          })}
        </ul>
        

      </main>
    </div>
  );
}

export default App;
