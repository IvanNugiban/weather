import React from 'react';
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";


const StyledTypesList = styled.ul`
  display: flex;
`

const StyledListItem = styled.li<{ chosen?: boolean }>`
  padding: 10px 15px 8px 15px;
  cursor: pointer;
  margin-right: 5vw;
  color: white;
  font-family: Roboto, sans-serif;
  border-bottom: ${({chosen}) => chosen ? "2px solid white" : "none"};
  font-size: ${({theme}) => theme.fontSize.medium};

  &:hover {
    border-bottom: 2px solid white;
  }
`

const TypesList = () => {
    const {pathname} = useLocation();

    return (
        <StyledTypesList>
            <Link  to='./now'> <StyledListItem
                chosen={pathname === "/now"}>Now</StyledListItem></Link>
            <Link  to='./hourly'> <StyledListItem
                chosen={pathname === "/hourly"}>Hourly</StyledListItem></Link>
            <Link  to='./daily'> <StyledListItem
                chosen={pathname === "/daily"}>Daily</StyledListItem></Link>

        </StyledTypesList>
    );
};

export default TypesList;