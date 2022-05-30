import React from 'react';
import styled from "styled-components";
import WeatherCard from "./WeatherCard/WeatherCard";
import {ICities} from "../../../types/ICity";
import {useGetWeatherQuery} from "../../../services/weatherService";
import Loader from "../../../ui/Loader/Loader";
import CloudsCard from "./CloudsCard/CloudsCard";

const StyledWeatherMenu = styled.div`
  padding: 0 50px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-auto-flow: row;
  grid-gap: 15px;
  @media ${({theme}) => theme.media.tablet} {
    grid-template-columns: 55% 45%;
    grid-gap: 10px;
    padding: 0 15px;
  }
  @media ${({theme}) => theme.media.intermediate} {
    grid-template-columns: 100%;
    grid-gap: 10px;
    padding: 0 15px;
  }
  @media ${({theme}) => theme.media.phone} {
    padding: 0 5px;
  }
`

interface IProps {
    city: ICities
}

const WeatherMenu = ({city}: IProps) => {
    const {data: weather, isLoading, error} = useGetWeatherQuery({lon: city.lon, lat: city.lat, cnt: 1});
    if (isLoading) return <Loader/>


    return (
        <StyledWeatherMenu>
            <WeatherCard city={city} weather={weather!}/>
            <CloudsCard cloudsPercent={weather!.list[0].clouds.all}/>
        </StyledWeatherMenu>
    );
};

export default WeatherMenu;