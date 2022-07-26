import React, {useEffect} from 'react';
import {useGetWeatherQuery} from "../../../services/weatherService";
import Loader from "../../../ui/Loader/Loader";
import {ICities} from "../../../types/ICity";
import useActions from "../../../hooks/useActions";
import styled from "styled-components";
import WeatherRoutes from "../../../routes/WeatherRoutes";
import {useLocation} from "react-router-dom";

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
    const {pathname} = useLocation();
    const {setTheme} = useActions();
    const {data: weather, isFetching, error} = useGetWeatherQuery({
        lon: city.lon,
        lat: city.lat,
        cnt: (pathname === "/now") ? 1 : (pathname === "hourly") ? 9 : 40
    });
    useEffect(() => {
        if (weather) setTheme(weather.list[0].weather[0].main)
    }, [weather])
    if (isFetching) return <Loader/>
    if (error) return <Error>Server error</Error>
    return (
       <WeatherRoutes city={city} weather={weather!} weatherType={pathname === "/hourly" ? "Hourly" : "Daily" as "Hourly" | "Daily"}/>
    );
};

export default WeatherMenu;