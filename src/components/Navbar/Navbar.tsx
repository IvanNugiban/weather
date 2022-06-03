import React from 'react';
import styled from "styled-components";
import SearchedCities from "./SearchedCities/SearchedCities";
import TypeOfWeather from "./TypeOfWeather/TypeOfWeather";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const StyledNavbar = styled.nav`
position: relative;
`

interface IProps {
    menuState:boolean
}


const Navbar = ({menuState} : IProps) => {
    return (
        <StyledNavbar>
            {menuState && <HeaderMenu/>}
                <SearchedCities/>
                <TypeOfWeather/>
        </StyledNavbar>
    );
};

export default Navbar;