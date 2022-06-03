import React from 'react';
import styled from "styled-components";

const StyledSearchedCities = styled.div`
    padding: 10px;
  background-color: ${({theme}) => theme.searchedCityBg};
`

const SearchedCities = () => {
    return (
            <StyledSearchedCities>
                Cities
            </StyledSearchedCities>
    );
};

export default SearchedCities;