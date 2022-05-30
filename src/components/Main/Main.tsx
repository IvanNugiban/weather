import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import {useTypedSelector} from "../../redux/typedReduxHooks";
import WeatherMenu from "./WeatherMenu/WeatherMenu";
import WelcomeSign from "./WelcomeSign/WelcomeSign";
import {ICities} from "../../types/ICity";

const StyledMain = styled.main`
  flex: 1 1 auto;
  padding: 10px 0;
`


const Main = () => {
    const chosenCity = useTypedSelector(state => state.city.city) as ICities;

    return (
        <StyledMain>
            <Container>
                {chosenCity.name ? <WeatherMenu city={chosenCity}/> : <WelcomeSign/>}
            </Container>
        </StyledMain>
    );
};

export default Main;