import React, {useContext} from 'react';
import styled from "styled-components";
import Button from "../../../ui/Button/Button";
import Paragraph from "../../../ui/Paragraph/Paragaph";
import TitleH4 from "../../../ui/TitleH4/TitleH4";
import {HeaderContext} from "../../../context";


const StyledWelcomeSign = styled.div`
  padding: 0 50px;
  & div:first-child {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  @media ${({theme}) => theme.media.tablet} {
    padding: 0 10px;
  }
  @media ${({theme}) => theme.media.phone} {
    padding: 0 5px;
  }
`

const WelcomeSign = () => {
    const {searchBox} = useContext(HeaderContext);
    function focusOnSearch() {
        searchBox?.current.focus()
    }
    return (
        <StyledWelcomeSign>
            <div>
            <TitleH4>Welcome</TitleH4>
            <Paragraph margin="10px 0">Please enter your city in order to get the most up-to-date weather data in it</Paragraph>
             <Button onClick={focusOnSearch}>Search city</Button>
            </div>
        </StyledWelcomeSign>
    );
};

export default WelcomeSign;