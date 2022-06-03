import React, {useEffect} from 'react';
import {useGetWeatherQuery} from "../../../services/weatherService";
import Loader from "../../../ui/Loader/Loader";
import {useTypedSelector} from "../../../redux/typedReduxHooks";
import WeatherNow from "./WeatherNow/WeatherNow";
import {ICities} from "../../../types/ICity";
import FutureWeather from "./FutureWeather/FutureWeather";
import useActions from "../../../hooks/useActions";

interface IProps {
    city: ICities
}

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
        console.log("worked");
        if (weather) setTheme(weather.list[0].weather[0].main)
    }, [weather])
    if (isFetching) return <Loader/>

    return (
        <>
            {weatherType === "Now" ? <WeatherNow city={city} weather={weather!}/> :
                <FutureWeather weatherType={weatherType} city={city} weather={weather!}/>}
        </>
    );
};

export default WeatherMenu;