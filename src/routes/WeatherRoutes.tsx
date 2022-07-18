import React from 'react';
import {Route, Routes} from "react-router-dom";
import WeatherNow from "../components/Main/WeatherMenu/WeatherNow/WeatherNow";
import FutureWeather from "../components/Main/WeatherMenu/FutureWeather/FutureWeather";
import {ICities} from "../types/ICity";
import {IWeather} from "../types/weatherType";

interface IProps {
    city : ICities;
    weather : IWeather
    weatherType : "Hourly" | "Daily";
}

const WeatherRoutes = ({city, weather, weatherType} : IProps) => {
    return (
       <Routes>
           <Route path='/now' element={<WeatherNow city={city} weather={weather}/> }/>
           <Route path='/hourly' element={<FutureWeather city={city} weather={weather} weatherType={weatherType}/> }/>
           <Route path='/daily' element={<FutureWeather  city={city} weather={weather} weatherType={weatherType}/> }/>
       </Routes>
    );
};

export default WeatherRoutes;