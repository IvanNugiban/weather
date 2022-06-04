import React, {useEffect} from 'react';
import styled from "styled-components";
import useActions from "../../../hooks/useActions";
import {ICities} from "../../../types/ICity";
import Container from "../../Container/Container";
import {useTypedSelector} from "../../../redux/typedReduxHooks";
import SearchedCity from "./SearchedCity/SearchedCity";

const StyledSearchedCities = styled.div`
  // padding: 10px;
  // // background-color: ; 
`

const SearchedCitiesList = styled.ul`
    display: grid;
    grid-auto-flow: column;
`

const SearchedCities = () => {
    const {setSearchedCities, setCity} = useActions();
    const searchedCities = useTypedSelector(state => state.city.searchedCities)
    useEffect(() => {
        const cities: string | null = localStorage.getItem("cities");
        if (cities) {
            const citiesArray: ICities[] = JSON.parse(cities);
            setSearchedCities(citiesArray);
            setCity(citiesArray[citiesArray.length - 1])
        }
    }, [])

    return (
        <StyledSearchedCities>
            <Container>
                <SearchedCitiesList>
                {searchedCities && searchedCities.map(city => <SearchedCity city={city} setCity={setCity} />)}
                </SearchedCitiesList>
            </Container>
        </StyledSearchedCities>
    );
};

export default SearchedCities;