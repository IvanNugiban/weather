import React from 'react';
import styled from "styled-components";
import {IWeather} from "../../../../../../types/weatherType";
import TitleH1 from "../../../../../../ui/TitleH1/TitleH1";
import TitleH5 from "../../../../../../ui/TitleH5/TitleH5";
import theme from "../../../../../../styles/theme";
import Image from "../../../../../../ui/Image/Image"
import {useTypedSelector} from "../../../../../../redux/typedReduxHooks";

const StyledWeatherCardMain = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
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
    const weatherTheme = useTypedSelector(state => state.weather.theme);
    return (
        <StyledWeatherCardMain>
            <div>
                <TitleH1 color={theme.colors.secondary}>{weather.list[0].main.temp.toFixed(0)}°</TitleH1>
                <TitleH5 fontWeight={theme.fontWeight.bold} fontSize="25px"
                         color={theme.colors.secondary}>{weather.list[0].weather[0].main}</TitleH5>
            </div>
            <Image width="80px" height="80px" src={weatherTheme.cardIcon}/>
        </StyledWeatherCardMain>
    );
};

export default WeatherCardMain;