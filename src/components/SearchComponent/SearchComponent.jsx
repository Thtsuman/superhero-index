import React, { useState } from "react";
import styled from "styled-components";

const SearchComponent = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <SearchWrapper>
      {showSearchInput ? (
        <SearchContentWrapper className="glassmorphism-wrapper">
          <SearchIcon onClick={() => setShowSearchInput(false)} className="bx bx-x"></SearchIcon>
          <SearchInput placeholder="Search by name, publisher" type="text" />
        </SearchContentWrapper>
      ) : (
        <SearchIconOuterWrapper>
          <div onClick={() => setShowSearchInput(true)} className="icon-wrapper glassmorphism-wrapper">
            <SearchIconOuter className="bx bx-search"></SearchIconOuter>
          </div>
        </SearchIconOuterWrapper>
      )}
    </SearchWrapper>
  );
};

export default SearchComponent;

const SearchWrapper = styled.div`
  position: absolute;
  margin: 10px 10px;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;
`;

const SearchContentWrapper = styled.div`
  transition: all 0.15s ease 0s;
  z-index: 23;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 3px 7px;
  margin: 0px auto;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.lightColor};
`;

const SearchInput = styled.input`
  box-shadow: none;
  outline: none;
  font-weight: 400;
  order: 1;
  color: ${(props) => props.theme.colors.lightColor};
  font-size: 16px;
  width: 100%;
  margin: 0px 0px 0px 10px;
  padding: 5px 0px;
  border-radius: 2px;
  border: 0px;
  display: block;
  background: transparent;

  ::placeholder { 
    color: ${(props) => props.theme.colors.lightColor};
    opacity: .3;
  }
`;

const SearchIcon = styled.i``;

const SearchIconOuterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px;
  }
`;

const SearchIconOuter = styled.i`
  color: ${(props) => props.theme.colors.lightColor};
`;
