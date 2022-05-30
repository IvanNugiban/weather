import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import TitleH5 from "../../ui/TitleH5/TitleH5";
import Paragraph from "../../ui/Paragraph/Paragaph";

const StyledFooter = styled.footer`
  background-color: white;
  padding: 20px;
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin: 0 5px;
  }
`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterContent>
                    <TitleH5 fontSize="14px" color="black">©Weather forecast 2022</TitleH5>
                    <Paragraph color="black" fontSize="14px">Created by IvanNugiban x ComCast</Paragraph>
                    <a color="black" href=''>About us</a>
                </FooterContent>
            </Container>
        </StyledFooter>
    )
};

export default Footer;