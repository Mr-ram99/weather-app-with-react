import axios from 'axios'
import React , {useState} from 'react'
import styled from 'styled-components'
import './App.css'
import CityComponent from './Components/CityComponent'
import WeatherInfo from './Components/WeatherInfo'

const apiid='b13ad1f5f5265ec7387e910f9c9b5544'
const Container = styled.div`
background: url("/icons/background1.jpg") no-repeat center center;
display :flex;
flex-direction:column;
width:340px;
align-items:center;
margin:10vh auto;
box-shadow:2px 2px 5px #1b1b1b;
border-radius:5px;
padding:10px;
@media only screen and (max-width:380px){
  width:300px;
}
`;
const AppCaption = styled.div`
margin:20px auto;
font-size:20px;
font-weight:bold;
font-family: 'Varela', sans-serif;
@media only screen and (max-width:380px){
  margin:10px auto;
}
`;
export const WeatherIcons = {
  "01d": "/weather-app-with-react/icons/sunny.svg",
  "01n": "/weather-app-with-react/icons/night.svg",
  "02d": "/weather-app-with-react/icons/day.svg",
  "02n": "/weather-app-with-react/icons/cloudy-night.svg",
  "03d": "/weather-app-with-react/icons/cloudy.svg",
  "03n": "/weather-app-with-react/icons/cloudy.svg",
  "04d": "/weather-app-with-react/icons/perfect-day.svg",
  "04n": "/weather-app-with-react/icons/cloudy-night.svg",
  "09d": "/weather-app-with-react/icons/rain.svg",
  "09n": "/weather-app-with-react/icons/rain-night.svg",
  "10d": "/weather-app-with-react/icons/rain.svg",
  "10n": "/weather-app-with-react/icons/rain-night.svg",
  "11d": "/weather-app-with-react/icons/storm.svg",
  "11n": "/weather-app-with-react/icons/storm.svg",
  "50n": "/weather-app-with-react/icons/haze.png",
  "50d": "/weather-app-with-react/icons/haze.png"
};
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather= async (e)=> {
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiid}`);
    updateWeather(response.data);

  }
  return (
    <Container>
      <AppCaption>The Weather App</AppCaption>
      {
        (city && weather )?
        <WeatherInfo weather={weather} city={city}/> :
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
         
      }
    </Container>
  );
}

export default App;
