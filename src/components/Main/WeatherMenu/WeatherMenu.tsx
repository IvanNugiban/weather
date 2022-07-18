import React, {useEffect} from 'react';
import {useGetWeatherQuery} from "../../../services/weatherService";
import Loader from "../../../ui/Loader/Loader";
import {useTypedSelector} from "../../../redux/typedReduxHooks";
import {ICities} from "../../../types/ICity";
import useActions from "../../../hooks/useActions";
import styled from "styled-components";
import WeatherRoutes from "../../../routes/WeatherRoutes";

interface IProps {
    city: ICities
}

const Error = styled.h1`
  position: absolute;
  left: 35%;
  top: 35%;
  font-size: ${({theme}) => theme.fontSize.larger};
  font-family: Roboto, sans-serif;
  color: red;
`

const WeatherMenu = ({city}: IProps) => {
    const numberOfRequests = useTypedSelector(state => state.weather.numberOfRequests);
    const weatherType = useTypedSelector(state => state.weather.type);
    const {setTheme} = useActions();
    const {data: weather, isFetching, error} = useGetWeatherQuery({
        lon: city.lon,
        lat: city.lat,
        cnt: numberOfRequests
    });
    useEffect(() => {
        if (weather) setTheme(weather.list[0].weather[0].main)
    }, [weather])
    if (isFetching) return <Loader/>
    if (error) return <Error>Server error</Error>
    return (
       <WeatherRoutes city={city} weather={weather!} weatherType={weatherType as "Hourly" | "Daily"}/>
    );
};

export default WeatherMenu;