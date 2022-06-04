import React from 'react';
import styled from "styled-components";
import {ICities} from "../../../../types/ICity";
import TitleH3 from "../../../../ui/TitleH3/TitleH3";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import theme from "../../../../styles/theme";

const StyledSearchedCity = styled.li`
  cursor: pointer;
`

interface IProps {
    city: ICities;
    setCity: ActionCreatorWithPayload<ICities, string>
}

const SearchedCity = ({city, setCity}: IProps) => {

    return (
        <StyledSearchedCity onClick={() => setCity(city)}>
            <TitleH3 color={theme.colors.secondary}>{city.name}</TitleH3>
        </StyledSearchedCity>

    );
};

export default SearchedCity;