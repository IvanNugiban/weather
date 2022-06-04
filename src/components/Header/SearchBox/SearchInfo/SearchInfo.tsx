import React from 'react';
import styled from "styled-components";
import NoSearchData from "./NoSearchData/NoSearchData";
import SearchResult from "./SearchResult/SearchResult";

const StyledSearchInfo = styled.div`
  position: absolute;
  z-index: 999;
  top: 47px;
  border-radius: 5px;
  width: 100%;
  background-color: #D8EEEE;
`

interface IProps {
    value: string;
    clearInput: () => void;
    closeWindow: () => void;
}

const SearchInfo = ({value, clearInput, closeWindow} : IProps) => {
    return (
       <StyledSearchInfo>
           {!value ? <NoSearchData/> : <SearchResult closeWindow={closeWindow} clearInput={clearInput} cityName={value}/>}
       </StyledSearchInfo>
    );
};

export default SearchInfo;