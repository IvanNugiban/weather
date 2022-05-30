import React from 'react';
import styled from "styled-components";

interface ITitleH1 {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
    fontWeight?: string;
}

interface IProps extends ITitleH1{
    children: React.ReactNode;
}

const StyledTitleH1 = styled.h1<ITitleH1>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.veryLarge};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
`

const TitleH1 = ({children, ...props} : IProps) => {
    return <StyledTitleH1 {...props}>{children}</StyledTitleH1>
};

export default TitleH1;