import React from 'react';
import styled from "styled-components";

interface IParagraph {
    fontSize?: string;
    color?: string;
    fontFamily?: string;
    margin?:string;
}

interface IProps extends IParagraph{
    children: React.ReactNode;
}

const StyledParagraph = styled.p<IParagraph>`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.medium};
  color: ${(props) => props.color || props.theme.colors.primary};
  font-family: ${(props) => props.fontFamily || "Roboto, sans-serif"};
  margin: ${(props) => props.margin || "0"};
`

const Paragraph = ({children, ...props} : IProps) => {
    return <StyledParagraph {...props}>{children}</StyledParagraph>
};

export default Paragraph;