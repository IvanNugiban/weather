import React from 'react';
import {ICities} from "../../../../../types/ICity";
import TitleH1 from "../../../../../ui/TitleH1/TitleH1";
import theme from "../../../../../styles/theme";
import Paragraph from "../../../../../ui/Paragraph/Paragaph";
import styled from "styled-components";
import Moment from "react-moment";

const StyledFutureWeatherHeader = styled.header`
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 10px;
  }

  h1 {
    margin-right: 5px;
  }

  margin-bottom: 50px;
  @media ${({theme}) => theme.media.tablet} {
    margin-bottom: 20px;
  }
  @media ${({theme}) => theme.media.phone} {
    margin-bottom: 15px;
  } 
`

interface IProps {
    city: ICities;
    weatherType: "Hourly" | "Daily";
}

const FutureWeatherHeader = ({city, weatherType}: IProps) => {
    return (
        <StyledFutureWeatherHeader>
            <div>
                <TitleH1 fontWeight={theme.fontWeight.bold} fontSize={theme.fontSize.large}>{weatherType} Weather -</TitleH1>
                <Paragraph> {city.name}{city.state && `, ${city.state}`}, {city.country}</Paragraph>
            </div>
            <Paragraph>As of <Moment format="hh:mm Z">{Date.now()}</Moment> GMT</Paragraph>
        </StyledFutureWeatherHeader>
    );
};

export default FutureWeatherHeader;