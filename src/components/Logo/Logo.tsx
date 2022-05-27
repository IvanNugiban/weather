import React from 'react';
import styled from "styled-components";

interface IImg {
    width?: string,
    height?: string,
    rounded?: boolean
}

interface IProps extends IImg {
    src: string
}

const StyledLogo = styled.img<IImg>`
  display: block;
  width: ${({width}) => width || "20px"};
  height: ${({height}) => height || "20px"};
  border-radius: ${({rounded}) => rounded ? "50%" : "0"};
`

const Logo = (props : IProps) => {
    return <StyledLogo {...props}/>
};

export default Logo;