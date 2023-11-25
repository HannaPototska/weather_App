import './App.css';
import { useState } from 'react';

function App() {
  const [weather, setweather] = useState()

    function getCity(e) {
      e.preventDefault()
    }


  return (
    <div className="App">
     <form onSubmit={getCity}>
      <input type="search" name="city" id="" />
     </form>
    </div>
  );
}

export default App;
