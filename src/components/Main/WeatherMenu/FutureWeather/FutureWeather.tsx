import React from 'react';
import {ICities} from "../../../../types/ICity";
import {IWeather} from "../../../../types/weatherType";
import styled from "styled-components";
import theme from "../../../../styles/theme";
import FutureWeatherHeader from "./FutureWeatherHeader/FutureWeatherHeader";
import FutureWeatherMain from "./FutureWeatherMain/FutureWeatherMain";

const StyledFutureWeather = styled.div`
  background-color: ${theme.colors.secondary};
  padding: 20px 25px;
  margin: 0 50px;
  border-radius: 5px;
  @media ${({theme}) => theme.media.tablet} {
    margin: 0 10px;
    padding: 10px
  }
  @media ${({theme}) => theme.media.phone} {
    margin: 0;
  }
`

interface IProps {
    city: ICities;
    weather: IWeather;
    weatherType: "Hourly" | "Daily";
}

const FutureWeather = ({city, weather, weatherType}: IProps) => {


    return (
        <StyledFutureWeather>
            <FutureWeatherHeader city={city} weatherType={weatherType}/>
            <FutureWeatherMain weather={weather}/>
        </StyledFutureWeather>
    );
};

export default FutureWeather;