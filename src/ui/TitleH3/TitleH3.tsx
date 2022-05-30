import React from 'react';
import styled from "styled-components";

interface ITitleH3 {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
    fontWeight?: string;
}

interface IProps extends ITitleH3{
    children: React.ReactNode;
}

const StyledTitleH3 = styled.h3<ITitleH3>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.bigger};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
`

const TitleH3 = ({children, ...props} : IProps) => {
    return <StyledTitleH3 {...props}>{children}</StyledTitleH3>
};

export default TitleH3;