import React from 'react';
import styled from "styled-components";

interface ITitleH4 {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
    fontWeight?: string;
}

interface IProps extends ITitleH4{
    children: React.ReactNode;
}

const StyledTitleH4 = styled.h4<ITitleH4>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.bigger};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
`

const TitleH4 = ({children, ...props} : IProps) => {
    return <StyledTitleH4 {...props}>{children}</StyledTitleH4>
};

export default TitleH4;