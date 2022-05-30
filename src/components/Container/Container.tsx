import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div<{padding?: string}>`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({padding}) => padding || "0"};
`

interface IProps {
    children: React.ReactNode,
    padding?: string,
}

const Container = ({children, padding} : IProps ) => {
    return <StyledContainer padding={padding}> {children}</StyledContainer>
};

export default Container;