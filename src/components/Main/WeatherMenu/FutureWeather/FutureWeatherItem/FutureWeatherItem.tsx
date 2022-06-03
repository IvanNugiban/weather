import React from 'react';
import styled from "styled-components";
import {IWeatherItem} from "../../../../../types/weatherType";
import Paragraph from "../../../../../ui/Paragraph/Paragaph";
import TitleH3 from "../../../../../ui/TitleH3/TitleH3";
import theme from "../../../../../styles/theme";
import TitleH5 from "../../../../../ui/TitleH5/TitleH5";
import Image from "../../../../../ui/Image/Image";
import {summaryWeatherIcons} from "../../../../../utils/weatherIcons";
import FutureWeatherSublist from "./FutureWeatherSublist/FutureWeatherSublist";


interface IProps {
    item: IWeatherItem;
}

const StyledFutureWeatherItem = styled.details`
  padding: 10px 0;
  margin: 0 auto;
  margin-bottom: .5rem;
  overflow: hidden;
  border-top: 1px solid #DEDEDE;
`

const StyledFutureWeatherSummary = styled.summary`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  padding: 8px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent transparent #446CE5;
    position: absolute;
    right: 1.3rem;
    top: 1rem;
    transform: rotate(-90deg);
    transform-origin: .2rem 50%;
    transition: .25s transform ease;
  }

  p,
  div,
  h3 {
    margin-right: 40px;
  }

  img {
    margin-right: 5px;
    width: 30px;
  }

  details[open] > &:before {
    transform: rotate(90deg);
  }

  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  @media ${({theme}) => theme.media.intermediate} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    #wind_removable,
    #description_removable {
      display: none;
    }
  }
  @media ${({theme}) => theme.media.phone} {
    grid-template-columns: 1fr 1fr 1fr;
    #precipitation_removable {
      display: none;
    }
`

const SummaryContainer = styled.div`
  display: flex;
  align-items: center;
`

const FutureWeatherItem = ({item}: IProps) => {
    return (
        <StyledFutureWeatherItem>
            <StyledFutureWeatherSummary>
                <Paragraph>
                    <time>{item.dt_txt.split(" ")[1]}</time>
                </Paragraph>
                <TitleH3 fontWeight={theme.fontWeight.bold}>{item.main.temp.toFixed(0)}°</TitleH3>
                <SummaryContainer>
                    <Image src={item.weather[0].main === "Clouds" ? summaryWeatherIcons.clouds :
                        item.weather[0].main === "Rain" ? summaryWeatherIcons.rain :
                            item.weather[0].main === "Snow" ? summaryWeatherIcons.snow : summaryWeatherIcons.clear
                    }/>
                    <TitleH5 id="description_removable">{item.weather[0].description}</TitleH5>
                </SummaryContainer>
                <SummaryContainer id="precipitation_removable">
                    <Image src={summaryWeatherIcons.water_drop}/>
                    <TitleH5>{item.pop === 0 ? `${Math.round(Math.random() * 10)}%` : "100%"}</TitleH5>
                </SummaryContainer>
                <SummaryContainer id="wind_removable">
                    <Image src={summaryWeatherIcons.wind}/>
                    <TitleH5>{item.wind.speed} m/s</TitleH5>
                </SummaryContainer>
            </StyledFutureWeatherSummary>
            <FutureWeatherSublist item={item}/>
        </StyledFutureWeatherItem>
    );
};

export default FutureWeatherItem;