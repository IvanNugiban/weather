import React from 'react';
import styled from "styled-components";
import Container from "../../Container/Container";
import TypesList from "./TypesList/TypesList";

const StyledTypeOfWeather = styled.div`
  background-color: ${({theme}) => theme.typeOfWeatherBg};
`


const TypeOfWeather = () => {
    return (
        <StyledTypeOfWeather>
            <Container>
             <TypesList/>
            </Container>
        </StyledTypeOfWeather>
    );
};

export default TypeOfWeather;