import React from 'react';
import styled from "styled-components";

interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}

const StyledButton = styled.div`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #1B4DE4;
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: ${({theme}) => theme.fontWeight.medium};
  font-size: ${({theme}) => theme.fontSize.medium};
  cursor: pointer;
`

const Button = ({children, onClick}: IProps) => {
    return <StyledButton onClick={onClick}>{children}</StyledButton>
};

export default Button;