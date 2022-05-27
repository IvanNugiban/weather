import React, {useMemo, useState} from 'react';
import {useGetCitiesQuery} from "../../../../../services/citiesService";
import styled from "styled-components";
import CityItem from "./CityItem/CityItem";
import {ICities} from "../../../../../types/ICity";

const limit = 5;

interface IProps {
    cityName: string
}


const CitiesList = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Message = styled.h2`
  padding: 10px;
  font-size: ${({theme}) => theme.fontSize.bigger};
  color: ${({color}) => color === "danger" ? "red" : "#9C9C9C" }
`

const SearchResult = ({cityName}: IProps) => {
    const {data: cities, isLoading, error} = useGetCitiesQuery({cityName, limit});
    const [citiesArray, setCitiesArray] = useState<ICities[] | any>([]);

    useMemo(() => {
        if (cities?.length) {
            const filteredArray = cities.filter((city: ICities, index, array) => array.findIndex((city2: ICities) => (city2.lon === city.lon && city2.lat == city.lat)) === index)
            const searchedArray = filteredArray.map((city: ICities) => <CityItem key={`${city.lat} ${city.lon}`}
                                                                                 city={city}/>);
            setCitiesArray(searchedArray)
        }
    }, [cities]);

    if (error) return <Message color="danger">Server error</Message>
    if (isLoading || !cities?.length) return <Message>No results find</Message>
    return <CitiesList>{citiesArray}</CitiesList>
};

export default SearchResult;