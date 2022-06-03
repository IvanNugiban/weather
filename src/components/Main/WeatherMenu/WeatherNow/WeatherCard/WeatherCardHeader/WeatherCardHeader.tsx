import React from 'react';
import styled from "styled-components";
import {ICities} from "../../../../../../types/ICity";
import theme from "../../../../../../styles/theme";
import TitleH2 from "../../../../../../ui/TitleH2/TitleH2";
import Paragraph from "../../../../../../ui/Paragraph/Paragaph";
import Moment from "react-moment";

const StyledWeatherCardHeader = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({theme}) => theme.cardHeaderBg};
  padding: 15px 10px;
  border-radius: 5px;
  h2 {
    margin-right: 5px;
  }
`

interface IProps {
    city: ICities;
}

const WeatherCardHeader = ({city}: IProps) => {
    return <StyledWeatherCardHeader>
        <TitleH2  color={theme.colors.secondary}
                 fontWeight={theme.fontWeight.black}>{city.name}{city.state && `, ${city.state}`}, {city.country} </TitleH2>
        <Paragraph fontSize={theme.fontSize.bigger} color={theme.colors.secondary}>As of <Moment format="hh:mm Z">{Date.now()}</Moment> GMT</Paragraph>
    </StyledWeatherCardHeader>
};

export default WeatherCardHeader;