import { useEffect } from 'react';
import './App.css';
import jsonp from 'jsonp';

function App() {

  useEffect(()=>{
   
    jsonp('https://www.kayak.com/h/mobileapis/directory/airlines/homework', {param: 'jsonp'}, (err, data) => {
      if(err){

      }else {
        console.log(data)
      }
    })
    
    }, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
