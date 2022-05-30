import React from 'react';
import styled from "styled-components";

interface IImage {
    width?: string;
    height?: string;
}

interface IProps extends IImage {
    src:string
}

const StyledImage = styled.img<IImage>`
  width: ${({width}) => width || "100%"};
  height: ${({height}) => height || "auto"};
`

const Image = (props : IProps) => {
    return <StyledImage {...props}/>
};

export default Image;