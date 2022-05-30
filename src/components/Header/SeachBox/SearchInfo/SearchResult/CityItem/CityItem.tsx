import React from 'react';
import styled from "styled-components";
import {ICities} from "../../../../../../types/ICity";
import useActions from "../../../../../../hooks/useActions";

interface IProps {
    city: ICities,
    clearInput: () => void
}

const StyledCityItem = styled.h6`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #EEEEEE;

  &:hover {
    background-color: #1B4DE4;
  }
`

const CityItem = ({city, clearInput}: IProps) => {
    const {setCity} = useActions();
    return <StyledCityItem  onMouseDown={() => {
        setCity(city);
        clearInput();
    } }>{city.name}, {city.country}, {city?.state && city.state}</StyledCityItem>
};

export default CityItem;