import React from 'react';
import styled from "styled-components";
import {ICities} from "../../../../../types/ICity";
import {IWeather} from "../../../../../types/weatherType";
import GeneralWeatherHeader from "./GeneralWeatherHeader/GeneralWeatheHeader";
import GeneralWeatherMain from "./GeneralWeatherMain/GeneralWeatherMain";

const StyledGeneralWeather = styled.div`
  background-color: white;
  grid-area: general;
  padding: 15px;
  border-radius: 5px;
`

interface IProps {
    city: ICities;
    weather: IWeather;
}

const GeneralWeather = ({city, weather}: IProps) => {
    return (
        <StyledGeneralWeather>
            <GeneralWeatherHeader city={city}/>
            <GeneralWeatherMain weather={weather}/>
        </StyledGeneralWeather>
    );
};

export default GeneralWeather;