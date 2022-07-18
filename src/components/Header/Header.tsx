import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import SearchBox from "./SearchBox/SearchBox";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import WeatherLogo from '../../img/logos/weather.jpg'

const StyledHeader = styled.header`
  background-color:${({theme}) => theme.headerBackground} ;
  padding: 10px 35px 10px 10px;
  @media${(props) => props.theme.media.phone} {
  padding: 5px 35px 5px 10px;
}
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header = () => {
    return (
      <StyledHeader>
          <Container>
              <Content>
                  <Logo width="50px" height="50px" src={WeatherLogo}/>
                  <SearchBox margin="0 10px"/>
                  <HamburgerMenu/>
              </Content>
          </Container>
      </StyledHeader>
    )
}
export default Header;