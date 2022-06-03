import React from 'react';
import WeatherCardHeader from "./WeatherCardHeader/WeatherCardHeader";
import styled from "styled-components";
import {IWeather} from "../../../../../types/weatherType";
import {ICities} from "../../../../../types/ICity";
import WeatherCardMain from "./WeatherCardMain/WeatherCardMain";

const StyledWeatherCard = styled.div`
 grid-area: weather;
 background-image: url(${({theme}) => theme.cardBackground});
  background-repeat: no-repeat;
  background-size: 100%/100%;
  border-radius: 5px;
`

interface IProps {
    city: ICities;
    weather: IWeather;
}


const WeatherCard = ({city, weather}: IProps) => {
    return (
        <StyledWeatherCard><div>
            <WeatherCardHeader city={city}/>
            <WeatherCardMain weather={weather}/>
        </div>
        </StyledWeatherCard>
    );
};

export default WeatherCard;