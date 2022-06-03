import React from 'react';
import styled from "styled-components";
import useActions from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../redux/typedReduxHooks";

type weatherType = "Now" | "Hourly" | "Daily";

const StyledTypesList = styled.ul`
  display: flex;
`

const StyledListItem = styled.li<{ chosen?: boolean }>`
  padding: 10px 15px 8px 15px;
  cursor: pointer;
  margin-right: 5vw;
  color: white;
  font-family: Roboto, sans-serif;
  border-bottom: ${({chosen}) => chosen ? "2px solid white" : "none"};
  font-size: ${({theme}) => theme.fontSize.medium};

  &:hover {
    border-bottom: 2px solid white;
  }
`

const TypesList = () => {
    const {setNowWeather, setDailyWeather, setHourlyWeather} = useActions();
    const chosenType = useTypedSelector(state => state.weather.type);

    function chooseTypeOfWeather(type: weatherType): void {
        if (type === "Now") setNowWeather();
        else if (type === "Hourly") setHourlyWeather();
        else setDailyWeather();
    }

    return (
        <StyledTypesList>
            <StyledListItem chosen={chosenType === "Now"}
                            onClick={() => chooseTypeOfWeather("Now")}>Now</StyledListItem>
            <StyledListItem chosen={chosenType === "Hourly"}
                            onClick={() => chooseTypeOfWeather("Hourly")}>Hourly</StyledListItem>
            <StyledListItem chosen={chosenType === "Daily"}
                            onClick={() => chooseTypeOfWeather("Daily")}>Daily</StyledListItem>

        </StyledTypesList>
    );
};

export default TypesList;