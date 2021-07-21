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
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
  "50n": "/icons/haze.png",
  "50d": "/icons/haze.png"
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
