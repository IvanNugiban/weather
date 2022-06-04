import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import Paragraph from "../../ui/Paragraph/Paragaph";

const StyledFooter = styled.footer`
  background-color: white;
  padding: 20px;
`

const FooterContent = styled.div`
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterContent>
                    <Paragraph color="black" fontSize="14px">Created by IvanNugiban in 2022</Paragraph>
                </FooterContent>
            </Container>
        </StyledFooter>
    )
};

export default Footer;