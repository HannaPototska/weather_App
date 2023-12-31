import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [weather, setweather] = useState()

    function getCity(e) {
      e.preventDefault()
      const v = e.target.input.value 

      let city = v
      
      axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c2d06e7dfd9f4f392905405664e3c88b`)
      .then(res => {setweather(i => res.data)})
      .catch(err => console.log("Something went wrong.. Try again later"))
      
    }


  return (
    <div className="App">
     <form onSubmit={getCity}>
      <input type="search" name="input" id="" />
     </form>

    {weather &&  <div>
      <h2>{weather.name}</h2>
      <div>
        <h4>{Math.floor(Number(weather.main.temp))}°C</h4>
      </div>
      <p>{weather.weather[0].description}</p>
  </div>}
     
    </div>
  );
}

export default App;
