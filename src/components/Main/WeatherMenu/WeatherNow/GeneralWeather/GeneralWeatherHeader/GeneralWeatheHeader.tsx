import React from 'react';
import styled from "styled-components";
import TitleH2 from "../../../../../../ui/TitleH2/TitleH2";
import {ICities} from "../../../../../../types/ICity";
import theme from "../../../../../../styles/theme";

const StyledGeneralWeatherHeader = styled.header`
  margin-bottom: 30px;
`

interface IProps {
    city: ICities;
}

const GeneralWeatherHeader = ({city}: IProps) => {
    return (
        <StyledGeneralWeatherHeader>
            <TitleH2
                fontWeight={theme.fontWeight.medium}>Weather Now in {city.name}{city.state && `, ${city.state}`}, {city.country}</TitleH2>
        </StyledGeneralWeatherHeader>
    );
};

export default GeneralWeatherHeader;