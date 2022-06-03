import React from 'react';
import styled from "styled-components";
import TitleH2 from "../../../../../../ui/TitleH2/TitleH2";
import {IWeather} from "../../../../../../types/weatherType";
import Paragraph from "../../../../../../ui/Paragraph/Paragaph";
import theme from "../../../../../../styles/theme";
import GeneralWeatherList from "./GeneralWeatherList/GeneralWeatherList";

const StyledGeneralWeatherMain = styled.main`
  div {
    padding-left: 30px;
    margin-bottom: 30px;
  }
`


interface IProps {
    weather: IWeather
}

const GeneralWeatherMain = ({weather}: IProps) => {
    return (
        <StyledGeneralWeatherMain>
            <div>
                <TitleH2 fontSize={theme.fontSize.larger}>{weather.list[0].main.feels_like.toFixed(0)}°</TitleH2>
                <Paragraph>Feels Like</Paragraph>
            </div>
            <GeneralWeatherList weather={weather}/>
        </StyledGeneralWeatherMain>
    );
};

export default GeneralWeatherMain;