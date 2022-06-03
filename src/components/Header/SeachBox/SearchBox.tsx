import React, {useContext, useState} from 'react';
import styled from "styled-components";
import SearchInfo from "./SearchInfo/SearchInfo";
import useInput from "../../../hooks/useInput";
import searchIcon from '../../../img/search.png'
import {HeaderContext} from "../../../context";

interface IProps {
    margin?: string
}

const SearchInput = styled.input`
  width: 100%;
  padding: 9px 0;
  border-radius: 20px;
  background-color: ${({theme}) => theme.searchBoxBg};
  color: white;
  text-align: center;
  font-family: Roboto, sans-serif;
  font-weight: 300;
  font-size: ${({theme}) => theme.fontSize.medium};
  &::placeholder {
    color: white;
    transition: 300ms opacity;
  }
  &:focus {
    outline: 3px solid white;
    &::placeholder {
      opacity: 0;
    }
  }
`

const SearchBoxContainer = styled.div<IProps>`
  position: relative;
  width: 350px;
  margin: ${({margin}) => margin || "0"};

  &:after {
    content: '';
    position: absolute;
    right: 10px;
    top: 8px;
    width: 20px;
    height: 20px;
    display: block;
    background-image: url(${searchIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`

const SearchBox = ({margin}: IProps) => {
    const [activeState, setActiveState] = useState(false);
    const {bind, clear} = useInput('');
    const {searchBox} = useContext(HeaderContext)
    return (
        <SearchBoxContainer margin={margin}>
            <SearchInput ref={searchBox} {...bind} onFocus={() => setActiveState(true)} onBlur={() => setActiveState(false)} placeholder="Search city"/>
            {activeState && <SearchInfo closeWindow={() => setActiveState((prev : boolean) => !prev)} clearInput = {clear} value={bind.value}/>}
        </SearchBoxContainer>
    );
};

export default SearchBox;