import React from 'react'
import styled from 'styled-components'
const WeatherLogo = styled.img`
width:120px;
height:120px;
margin:20px auto;
`;
const CitySelectLabel=styled.label`
font-size:16px;
font-family: 'Varela', sans-serif;
padding:10px;
font-weight:bold;
`;

const SearchBox = styled.form`
display:flex;
flex-direction:row;
margin:40px auto;
font-size:16px;
font-family: 'Varela', sans-serif;
& input{
    background:transparent;
    margin:0 5px;
    padding:10px;
    border:none;
    border-bottom:1px solid black;
    border-radius:2px;
    font-weight:bold;
    
}
& button {
    padding:5px 15px;
    background:#8380b6;
    border:none;
    color:white;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
}
`;

const CityComponent = (props) => {
    const {updateCity, fetchWeather} =props ;
    return (
        <>
            <WeatherLogo src="/icons/cloudy.png"></WeatherLogo>
            <CitySelectLabel>Find Weather Of Your City</CitySelectLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input type="text"  placeholder="Enter City" onChange={e=>updateCity(e.target.value)} autoFocus/>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent
