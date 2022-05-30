import React from 'react';
import styled from "styled-components";
import SearchedCities from "./SearchedCities/SearchedCities";
import TypeOfWeather from "./TypeOfWeather/TypeOfWeather";

const StyledNavbar = styled.nav`
position: relative;
`


const Navbar = () => {
    return (
        <StyledNavbar>
                <SearchedCities/>
                <TypeOfWeather/>
        </StyledNavbar>
    );
};

export default Navbar;