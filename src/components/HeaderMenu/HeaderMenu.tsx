import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import TitleH2 from "../../ui/TitleH2/TitleH2";
import theme from "../../styles/theme";
import useActions from "../../hooks/useActions";
import {HeaderContext} from "../../context";
import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";

const StyledHeaderMenu = styled.div`
  padding: 30px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  height: 90vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  text-align: center;
  @media ${({theme}) => theme.media.tablet} {
    overflow-y: scroll;
    height: 100vh
  }
  @media ${({theme}) => theme.media.phone} {
    overflow-y: scroll;
   height: 100vh
  }
`

const HeaderMenuList = styled.ul`
    margin-bottom: 20px;
`

const HeaderMenuItem = styled.li`
  cursor: pointer;
  font-family: Roboto, sans-serif;;
  margin-top: 10px;
  font-size: ${({theme}) => theme.fontSize.bigger};
a {
  color: inherit;
}
  &:hover {
    color: #365cf6;
  }
`

const HeaderMenu = () => {
    const {setNowWeather, setDailyWeather, setHourlyWeather} = useActions();
    const {searchBox, hamburgerMenu} = useContext(HeaderContext)
    function liCLick(callback: ActionCreatorWithoutPayload<string> | null) {
        if (typeof callback === "function") callback();
        else {searchBox.current.focus()}
        hamburgerMenu.current.click();
        document.body.classList.toggle("popUp")
    }
    useEffect(() => {
        document.body.classList.add("popUp");
        return () => {
            document.body.classList.remove("popUp")
        }
    }, [])
    return (
        <StyledHeaderMenu className="hamburger_menu">
            <Container>
                <TitleH2 fontWeight={theme.fontWeight.bold} fontSize={theme.fontSize.large}>Weather forecast</TitleH2>
                <HeaderMenuList>
                    <HeaderMenuItem onClick={() => liCLick(null)}>Search Weather</HeaderMenuItem>
                    <HeaderMenuItem onClick={() => liCLick(setNowWeather)}>Weather Now</HeaderMenuItem>
                    <HeaderMenuItem onClick={() => liCLick(setHourlyWeather)}>Hourly Weather</HeaderMenuItem>
                    <HeaderMenuItem onClick={() => liCLick(setDailyWeather)}>Daily weather</HeaderMenuItem>
                </HeaderMenuList>
                <TitleH2 fontWeight={theme.fontWeight.bold} fontSize={theme.fontSize.large}>Other</TitleH2>
                <HeaderMenuList>
                    <HeaderMenuItem><a href="https://github.com/IvanNugiban/weather">Github repository</a></HeaderMenuItem>
                    <HeaderMenuItem><a href="https://www.instagram.com/ivan_peshikov">Instagram</a></HeaderMenuItem>
                    <HeaderMenuItem><a href="https://www.youtube.com/channel/UCUq-j0bhiFNU5-7FfuOOmtw">Youtube</a></HeaderMenuItem>
                    <HeaderMenuItem><a href="https://github.com/IvanNugiban">Github</a></HeaderMenuItem>
                    <HeaderMenuItem><a href="https://www.codewars.com/users/IvanNugiban">Codewars</a></HeaderMenuItem>
                </HeaderMenuList>
            </Container>
        </StyledHeaderMenu>
    );
};

export default HeaderMenu;