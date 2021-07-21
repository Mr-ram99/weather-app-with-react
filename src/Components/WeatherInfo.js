import React from 'react'
import styled from 'styled-components'
import { WeatherIcons } from '../App';
const WeatherCondition = styled.div`
display:flex;
flex-direction:row;
width:100%;
align-items:center;
justify-content:center;
`;

const Condition =styled.span`
margin:10px 25px;
font-size:16px;
& span{
    font-size:25px;
}
`;
const WeatherLogo = styled.img`
width:80px;
height:80px;
margin:10px auto;
`;
const Location = styled.div`
margin:10px auto;
font-size:22px;
font-weight:bold;
`;
const WeatherInfoLabel = styled.span`
font-size:16px;
margin:10px;
text-align:start;
width:90%;
font-weight:bold;
`;
const WeatherInfoContainer=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
`;
const InfoContainer = styled.span`
display:flex;
padding:10px;
margin:5px;
width:120px;
box-shadow:3px 3px 10px #1b1b1b;
`;
const InfoIcon = styled.img`
width:40px;
height:40px;
padding:5px;
`;
const InfoLabel = styled.label`
display:flex;
flex-direction:column;
padding:5px;
`;
const InfoIcons = {
    sunrise:"/weather-app-with-react/icons/sun.png",
    sunset:"/weather-app-with-react/icons/sun.png",
    wind:"/weather-app-with-react/icons/wind.png",
    pressure:"/weather-app-with-react/icons/pressure.png",
    humidity:"/weather-app-with-react/icons/humidity.png"
}
const BackButton = styled.button`
width:90%;
padding:10px;
margin:10px auto;
background:#B4D6D3;
border:none;
box-shadow:2px 2px 5px #1a1a1a;
cursor:pointer;
`;
const InfoComponent = (props) =>{
    const {name,value,icon}= props;
    return (
        <InfoContainer>
            <InfoIcon src={icon}/>
            <InfoLabel>
                {value}
                <span>
                    {name}
                </span>
            </InfoLabel>
        </InfoContainer>
    )
}
const WeatherInfo = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <WeatherCondition>
                <Condition>
                <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </Condition>
                <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}></WeatherLogo>
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <InfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} icon={InfoIcons.sunrise}/>
                <InfoComponent name={"Humidity"} value={`${weather?.main?.humidity}%`} icon={InfoIcons.humidity}/>
                <InfoComponent name={"Wind"} value={`${weather?.wind?.speed}m/s`} icon={InfoIcons.wind}/>
                <InfoComponent name={"Pressure"} value={`${weather?.main?.pressure}hPa`} icon={InfoIcons.pressure}/>
            </WeatherInfoContainer>
            <BackButton type="button" onClick={()=>{window.location.reload()}}>&larr;&nbsp;Go back</BackButton>
        </>
    )
}

export default WeatherInfo
