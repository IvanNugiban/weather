import React from 'react';
import styled from "styled-components";

interface ITitleH5 {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
    fontWeight?: string;
}

interface IProps extends ITitleH5{
    children: React.ReactNode;
    id?: string;
}

const StyledTitleH5 = styled.h5<ITitleH5>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.medium};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
  font-weight: ${(props) => props.fontWeight || props.theme.fontWeight.regular};
`

const TitleH5 = ({children, ...props} : IProps) => {
    return <StyledTitleH5 {...props}>{children}</StyledTitleH5>
};

export default TitleH5;