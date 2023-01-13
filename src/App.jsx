import bgWeather from './assets/bgweather.jpg';
import Descripcion from "./components/Descripcion";
import { useEffect, useState } from "react";
import getWeather  from "./weatherService";

function App() {

  const [city, setCity] = useState('Buenos Aires');
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeather(city, units);
      setWeather(data);
    }
    fetchWeatherData();
  }, [units, city])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    
    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? 'ºF' : 'ºC';
    setUnits(isCelsius ? 'imperial' : 'metric');
  }

  const enterKeyPressed = (e) => {
    if(e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className='app' style={{backgroundImage: `url(${bgWeather})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">

              <div className="section section__inputs">
                <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Introduzca la ciudad..." />
                <button onClick={(e) => handleUnitsClick(e)}>ºC</button>
              </div>

              <div className="section section__resultados">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weatherIcon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperatura">
                  <h1>{`${weather.temp.toFixed()} º${units === 'metric' ? 'C' : 'F'}`}</h1>
                </div>
              </div>

              <Descripcion weather={weather} units={units} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
