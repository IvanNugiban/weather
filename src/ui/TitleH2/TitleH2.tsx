import React from 'react';
import styled from "styled-components";

interface ITitleH2 {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
    fontWeight?: string;
}

interface IProps extends ITitleH2{
    children: React.ReactNode;
}

const StyledTitleH2 = styled.h2<ITitleH2>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.bigger};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
`

const TitleH2 = ({children, ...props} : IProps) => {
    return <StyledTitleH2 {...props}>{children}</StyledTitleH2>
};

export default TitleH2;