import React, {useCallback} from 'react';
import TitleH2 from "../../../../../ui/TitleH2/TitleH2";
import styled from "styled-components";
import {IWeather} from "../../../../../types/weatherType";
import Moment from "react-moment";
import FutureWeatherItem from "../FutureWeatherItem/FutureWeatherItem";

interface IProps {
    weather: IWeather;
}

const StyledFutureWeatherMain = styled.div`
  h2 {
    padding: 15px 0;
    border-top: 1px solid #DEDEDE;
    font-size: 25px;
    font-weight: ${({theme}) => theme.fontWeight.bold}
  }
`


const FutureWeatherMain = ({weather}: IProps) => {
    const drawList = useCallback(() => {
        return weather.list.map((weatherItem, index) => {
            if (weatherItem.dt_txt.split(" ")[1] === "00:00:00" && index !== 0) {
                return (
                    <React.Fragment key={weatherItem.dt} >
                        <TitleH2 ><Moment  format="dddd, MMMM D">{weatherItem.dt_txt}</Moment></TitleH2>
                        <FutureWeatherItem item={weatherItem}/>
                    </React.Fragment>
                )
            }
            return <FutureWeatherItem key={weatherItem.dt_txt} item={weatherItem}/>
        })
    }, [weather])
    return (
        <StyledFutureWeatherMain>
            <TitleH2><Moment format="dddd, MMMM D">{weather.list[0].dt_txt}</Moment></TitleH2>
            {drawList()}
        </StyledFutureWeatherMain>
    );
};

export default FutureWeatherMain;