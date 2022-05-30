import React from 'react';
import styled from "styled-components";
import {ICities} from "../../../../../types/ICity";
import TitleH3 from "../../../../../ui/TitleH3/TitleH3";
import theme from "../../../../../styles/theme";

const StyledWeatherCardHeader = styled.header`
  background-color: rgb(56, 48, 73, 0.7);
  padding: 15px 10px;
  border-radius: 5px;
`

interface IProps {
    city: ICities;
}

const WeatherCardHeader = ({city}: IProps) => {
    return <StyledWeatherCardHeader>
        <TitleH3 color={theme.colors.secondary}
                 fontWeight={theme.fontWeight.black}>{city.name}{city.state && `, ${city.state}`} , {city.country} </TitleH3>
    </StyledWeatherCardHeader>
};

export default WeatherCardHeader;