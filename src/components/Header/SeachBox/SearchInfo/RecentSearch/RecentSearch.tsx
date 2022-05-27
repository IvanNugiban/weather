import React from 'react';
import styled from "styled-components";

const RecentTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: ${({theme}) => theme.fontSize.bigger};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  color: #686868;
  border-bottom: 1px solid #EEEEEE;
  padding: 20px 10px 10px 10px;
  margin-bottom: 20px;
`

const RecentSearch = () => {


    return (
        <>
            <RecentTitle>Recents</RecentTitle>
        </>
    );
};

export default RecentSearch;