import React from 'react';
import styled from "styled-components";

const RecentTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: ${({theme}) => theme.fontSize.bigger};
  font-weight: ${({theme}) => theme.fontWeight.medium};
  color: #686868;
  padding: 20px 10px 10px 10px;
  margin-bottom: 20px;
`

const NoSearchData = () => {


    return (
        <>
            <RecentTitle>Search city</RecentTitle>
        </>
    );
};

export default NoSearchData;