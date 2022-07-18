import React from 'react';
import styled from "styled-components";
import {generalWeatherIcons, summaryWeatherIcons} from "../../../../../../utils/weatherIcons";
import Paragraph from "../../../../../../ui/Paragraph/Paragaph";
import TitleH4 from "../../../../../../ui/TitleH4/TitleH4";
import theme from "../../../../../../styles/theme";
import {IWeatherItem} from "../../../../../../types/weatherType";

type Details = {
    src:  typeof generalWeatherIcons.temperature
}

interface IProps {
    item: IWeatherItem
}

const DetailsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 10px;
  border: 1px solid #DEDEDE;
  border-radius: 5px;
  padding: 20px 25px;
  #wind_details,
  #precipitation_details,
  #weather_details{
    display: none;
  }
  @media ${({theme}) => theme.media.intermediate} {
  }
    #wind_details,
    #description_details,
    #weather_details{
      display: block;
    }
  }
  @media ${({theme}) => theme.media.phone} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    #precipitation_details {
      display: block;
    }
`

const DetailContentBlock = styled.div<Details>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 5px;
  margin-right: 20px;
  position: relative;
  &:before {
   content: '';
    position: absolute;
    left: -20px;
    top: -5px;
    display: block;
    width: 20px;
    height: 20px;
    background: url(${({src}) => src}) no-repeat;
    background-size: cover;
  }

  @media ${({theme}) => theme.media.phone} {
    margin: 0 0 10px 0;
    text-align: center;
}
`


const FutureWeatherSublist = ({item} : IProps) => {
    return (
        <DetailsContent>
            <DetailContentBlock src={generalWeatherIcons.temperature}>
                <Paragraph>Feels Like</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.main.feels_like.toFixed(0)}</TitleH4>
            </DetailContentBlock>
            <DetailContentBlock src={summaryWeatherIcons.clouds}>
                <Paragraph>Cloud Cover</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.clouds.all}%</TitleH4>
            </DetailContentBlock>
            <DetailContentBlock  src={generalWeatherIcons.humidity}>
                <Paragraph>Humidity</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.main.humidity}%</TitleH4>
            </DetailContentBlock>
            <DetailContentBlock id="wind_removable"  src={summaryWeatherIcons.wind}>
                <Paragraph>Wind speed</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.wind.speed} m/s</TitleH4>
            </DetailContentBlock>
            <DetailContentBlock src={summaryWeatherIcons.water_drop} id="precipitation_details">
                <Paragraph>Precipitation</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.pop === 0 ? `${Math.round(Math.random() * 10)}%` : "100%"}</TitleH4>
            </DetailContentBlock>
            <DetailContentBlock src={generalWeatherIcons.weather} id="weather_details">
                <Paragraph>Weather description</Paragraph>
                <TitleH4 fontWeight={theme.fontWeight.bold}>{item.weather[0].description}</TitleH4>
            </DetailContentBlock>
        </DetailsContent>
    );
};

export default FutureWeatherSublist;