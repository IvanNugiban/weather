import React from 'react';
import styled from "styled-components";
import {IWeather} from "../../../../../types/weatherType";
import TitleH1 from "../../../../../ui/TitleH1/TitleH1";
import TitleH5 from "../../../../../ui/TitleH5/TitleH5";
import theme from "../../../../../styles/theme";
import Paragraph from "../../../../../ui/Paragraph/Paragaph";
import Image from "../../../../../ui/Image/Image"
import cloudRain from "../../../../../img/cloudRain.png"

const StyledWeatherCardMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  h1 {
    margin-bottom: 10px;
  }
  @media ${({theme}) => theme.media.tablet} {
    h1 {
      font-size: 60px;
    }
  }
  @media ${({theme}) => theme.media.phone} {
    h1 {
      font-size: 50px;
    }
  }
`

interface IProps {
    weather: IWeather;
}


const WeatherCardMain = ({weather}: IProps) => {
    return (
        <StyledWeatherCardMain>
            <div>
                <TitleH1 color={theme.colors.secondary}>{weather.list[0].main.temp}°</TitleH1>
                <TitleH5 fontWeight={theme.fontWeight.bold} fontSize="25px"
                         color={theme.colors.secondary}>{weather.list[0].weather[0].main}</TitleH5>
            </div>
            <Image width="60px" height="60px" src={cloudRain}/>
        </StyledWeatherCardMain>
    );
};

export default WeatherCardMain;