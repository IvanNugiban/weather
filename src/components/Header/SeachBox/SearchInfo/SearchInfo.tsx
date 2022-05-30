import React from 'react';
import styled from "styled-components";
import RecentSearch from "./RecentSearch/RecentSearch";
import SearchResult from "./SearchResult/SearchResult";

const StyledSearchInfo = styled.div`
  position: absolute;
  z-index: 999;
  top: 47px;
  border-radius: 5px;
  width: 100%;
  background-color: white;
`

interface IProps {
    value: string;
    clearInput: () => void;
}

const SearchInfo = ({value, clearInput} : IProps) => {
    return (
       <StyledSearchInfo>
           {!value ? <RecentSearch/> : <SearchResult clearInput={clearInput} cityName={value}/>}
       </StyledSearchInfo>
    );
};

export default SearchInfo;