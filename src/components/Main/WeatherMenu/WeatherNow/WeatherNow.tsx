import React from 'react';
import WeatherCard from "./WeatherCard/WeatherCard";
import CloudsCard from "./CloudsCard/CloudsCard";
import GeneralWeather from "./GeneralWeather/GeneralWeather";
import {ICities} from "../../../../types/ICity";
import {IWeather} from "../../../../types/weatherType";
import styled from "styled-components";

const StyledWeatherNow = styled.div`
  padding: 0 50px;
  display: grid;
  grid-template-areas: "weather clouds"
  "general general";
  grid-template-columns: 60% 40%;
  grid-auto-flow: row;
  grid-gap: 15px;
  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 55% 45%;
    grid-gap: 10px;
    padding: 0 40px 0 20px;
  }
  @media ${({theme}) => theme.media.intermediate} {
    grid-template-areas: "weather weather"
    "clouds clouds"
    "general general";
  }
  @media ${({theme}) => theme.media.phone} {
    padding: 0 15px 0 10px;
    grid-gap: 8px;

  }
`

interface IProps {
    city: ICities;
    weather: IWeather;
}

const WeatherNow = ({city, weather} : IProps) => {
    return (
        <StyledWeatherNow>
            <WeatherCard city={city} weather={weather!}/>
            <CloudsCard cloudsPercent={weather!.list[0].clouds.all}/>
            <GeneralWeather city={city} weather={weather!}/>
        </StyledWeatherNow>
    );
};

export default WeatherNow;