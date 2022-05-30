import React from 'react';
import WeatherCardHeader from "./WeatherCardHeader/WeatherCardHeader";
import styled from "styled-components";
import {IWeather} from "../../../../types/weatherType";
import {ICities} from "../../../../types/ICity";
import WeatherCardMain from "./WeatherCardMain/WeatherCardMain";
// enum imgs {
//     cloudy: https://s.w-x.co/WeatherImages_Web/WeatherImage_MostlyCloudy-day_4.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70
// }
const StyledWeatherCard = styled.div`
 
 background-image: url("https://s.w-x.co/WeatherImages_Web/WeatherImage_Rain-night_1.jpg?crop=16:9&width=800&format=pjpg&auto=webp&quality=70");
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