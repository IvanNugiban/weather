import React from 'react';
import styled from "styled-components";

const StyledHamburgerMenu = styled.span`
  position: relative;
  label {
    position: absolute;
    width: 30px;
    height: 20px;
    top: -8px;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    display: none;
  }

  div,
  div::before,
  div::after {
    display: block;
    background-color: #fff;
    pointer-events: none;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  div::before {
    content: '';
    margin-top: -8px;
  }

  div::after {
    content: '';
    margin-top: 8px;
  }

  input:checked ~ div::before {
    margin-top: 0;
    transform: rotate(405deg);
  }

  input:checked ~ div {
    background: rgba(255, 255, 255, 0);
  }

  input:checked ~ div::after {
    margin-top: 0;
    transform: rotate(-405deg);
  }
`

const HamburgerMenu = () => {
    return (
       <StyledHamburgerMenu >
            <input id="menu-toggle" type="checkbox"/>
            <label  htmlFor="menu-toggle"></label>
            <div></div>
        </StyledHamburgerMenu>
    );
};

export default HamburgerMenu;