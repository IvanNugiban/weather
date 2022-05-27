import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";

const StyledMain = styled.main`
  flex: 1 1 auto;
`


const Main = () => {
    return (
        <StyledMain>
            <Container>
                <h1>Hi</h1>
            </Container>
        </StyledMain>
    );
};

export default Main;