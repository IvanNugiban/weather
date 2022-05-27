import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

interface IProps {
    children: React.ReactNode
}

const Container = ({children} : IProps ) => {
    return <StyledContainer>{children}</StyledContainer>
};

export default Container;