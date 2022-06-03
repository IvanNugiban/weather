import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useGetCitiesQuery} from "../../../../../services/citiesService";
import styled from "styled-components";
import CityItem from "./CityItem/CityItem";
import {ICities} from "../../../../../types/ICity";
import useActions from "../../../../../hooks/useActions";
import {HeaderContext} from "../../../../../context";

const limit = 5;

interface IProps {
    cityName: string;
    clearInput: () => void;
    closeWindow: () => void;
}


const CitiesList = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Message = styled.h2`
  padding: 20px;
  font-family: Roboto, sans-serif;
  font-size: ${({theme}) => theme.fontSize.bigger};
  color: ${({color}) => color === "danger" ? "red" : "black"}
`

const SearchResult = ({cityName, clearInput, closeWindow}: IProps) => {
    const {setCity} = useActions();
    const {searchBox} = useContext(HeaderContext);
    const {data: cities, isLoading, error} = useGetCitiesQuery({cityName, limit});
    const [citiesArray, setCitiesArray] = useState<ICities[] | any>([]);



    useEffect(() => {
        function onEnterClick(e: KeyboardEvent) {
            if (e.key === "Enter" && cities?.length) {
                setCity(cities[0]);
                closeWindow();
                clearInput();
                searchBox.current.blur();
            }
        }
        document.body.addEventListener("keydown", onEnterClick );

    return () => {
        document.body.removeEventListener("keydown", onEnterClick)
    }
    }, [cities])

    useMemo(() => {
        if (cities?.length) {
            const filteredArray = cities.filter((city: ICities, index, array) => array.findIndex((city2: ICities) => (city2.lon === city.lon && city2.lat == city.lat)) === index)
            const searchedArray = filteredArray.map((city: ICities) => <CityItem setCity={setCity} key={`${city.lat} ${city.lon}`} clearInput={clearInput} city={city}/>);
            setCitiesArray(searchedArray)
        }
    }, [cities]);

    if (error) return <Message color="danger">Server error</Message>

    if (isLoading || !cities?.length) return <Message>No results find</Message>

    return <CitiesList>{citiesArray}</CitiesList>
};

export default SearchResult;