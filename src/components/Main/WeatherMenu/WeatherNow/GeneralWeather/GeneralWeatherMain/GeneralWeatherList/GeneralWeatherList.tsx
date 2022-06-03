import React from 'react';
import styled from "styled-components";
import GeneralWeatherItem from "../GeneralWeatherItem/GeneralWeatherItem";
import {generalWeatherIcons} from "../../../../../../../utils/weatherIcons";
import {IWeather} from "../../../../../../../types/weatherType";

const StyledGeneralWeatherList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  span:first-child {
    margin-right: 20px;
  }
  @media ${({theme}) => theme.media.intermediate} {
  grid-template-columns: 1fr;
  span:first-child {
    margin-right: 0;
  }
}
`



interface IProps {
    weather: IWeather;
}

const GeneralWeatherList = ({weather}: IProps) => {

    return (
        <StyledGeneralWeatherList>
            <span>
                <GeneralWeatherItem type="High / Low"
                                    src={generalWeatherIcons.temperature}>{weather.list[0].main.temp_max.toFixed(0)}°/{weather.list[0].main.temp_min.toFixed(0)}°</GeneralWeatherItem>
                <GeneralWeatherItem type="Weather description"
                                    src={generalWeatherIcons.weather}>{weather.list[0].weather[0].description}</GeneralWeatherItem>
                <GeneralWeatherItem type="Humidity"
                                    src={generalWeatherIcons.humidity}>{weather.list[0].main.humidity}%</GeneralWeatherItem>
                <GeneralWeatherItem type="Pressure"
                                    src={generalWeatherIcons.pressure}>{weather.list[0].main.grnd_level} hPa</GeneralWeatherItem>
            </span>
            <span>
                <GeneralWeatherItem type="Visibility"
                                    src={generalWeatherIcons.visibility}>{weather.list[0].visibility} m</GeneralWeatherItem>
                <GeneralWeatherItem type="Wind"
                                    src={generalWeatherIcons.wind}>{weather.list[0].wind.speed} m/s</GeneralWeatherItem>
                <GeneralWeatherItem type="Wind direction"
                                    src={generalWeatherIcons.wind_direction}>{weather.list[0].wind.deg} degrees</GeneralWeatherItem>
                <GeneralWeatherItem type="Sea level"
                                    src={generalWeatherIcons.sea_level}>{weather.list[0].main.sea_level}</GeneralWeatherItem>
            </span>
        </StyledGeneralWeatherList>
    );
};

export default GeneralWeatherList;