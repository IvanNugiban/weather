import React from 'react';
import styled from "styled-components";
import Image from "../../../../../../../ui/Image/Image";
import Paragraph from "../../../../../../../ui/Paragraph/Paragaph";

const StyledGeneralWeatherItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #DEDEDE;
  padding: 10px;
  span {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;

      text-transform: uppercase;
    } 
  }
`

interface IProps {
    src: string;
    children: React.ReactNode;
    type: string
}

const GeneralWeatherItem = ({src, children, type}: IProps) => {
    return (
        <StyledGeneralWeatherItem>
            <span>
            <Image width="25px" height="25px" src={src}/> <Paragraph>{type}</Paragraph>
            </span>
            <Paragraph>{children}</Paragraph>
        </StyledGeneralWeatherItem>
    );
};

export default GeneralWeatherItem;