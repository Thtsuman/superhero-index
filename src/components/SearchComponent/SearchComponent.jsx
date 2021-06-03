import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { clearReduxSearchList, getHeroWithId, getSearchListByString, toggleIsLoading } from "../../redux/states/Hero/heroActions";
import useOnClickOutside from "../../utils/outsideClickHandler";

const SearchComponent = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [resultList, setResultList] = useState([]);
  const [searchListLoading, setSearchListLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const reduxDispatch = useDispatch();
  const searchListRedux = useSelector((state) => state.hero?.searchList);

  const searchDivRef = useRef(null);
  useOnClickOutside(searchDivRef, () => resetSearchComp(false));

  useEffect(() => {
    if (searchListRedux.length > 1) {
    } else {
      setNoResults(true);
    }
    setResultList(searchListRedux);
    setSearchListLoading(false);
  }, [searchListRedux]);

  const handleChangeSearchText = (e) => {
    const value = e.target.value;
    setSearchListLoading(true);
    setNoResults(false);
    if (value?.length < 1) {
      setSearchText([]);
      setSearchListLoading(true);
    } else {
      reduxDispatch(getSearchListByString(value));
    }

    setSearchText(value);
  };

  const resetSearchComp = () => {
    setShowSearchInput(false);
    setSearchText("");
    setNoResults(false);
    reduxDispatch(clearReduxSearchList())
  };

  
  const handleOpenGoogleSearch = () => {
    window.open(`https://www.google.com/search?q=${searchText}-hero`, '_blank' )
  }

  const handleChangeInitHero = (id) => {
    reduxDispatch(toggleIsLoading(true))
    reduxDispatch(getHeroWithId(id))
    resetSearchComp()
  }

  return (
    <SearchWrapper>
      {showSearchInput ? (
        <SearchContentWrapper
          ref={searchDivRef}
          className="glassmorphism-wrapper"
        >
          <SearchIcon
            onClick={resetSearchComp}
            className="bx bx-x"
          ></SearchIcon>
          <SearchInput
            value={searchText}
            onChange={handleChangeSearchText}
            placeholder="Search by name, publisher"
            type="text"
          />

          <SearchResultDivWrapper className="glassmorphism-wrapper">
            {searchListLoading ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <i className="bx bx-glasses bx-burst"></i>
              </div>
            ) : (
              <>
                {resultList.length < 1 && noResults ? (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "10px",
                    }}
                  >
                    <div className="" onClick={handleOpenGoogleSearch}>
                      <div className="text-muted">No results found</div>
                      <div className="text-muted">Wanna search on google</div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            )}

            {resultList?.map((hero, index) => (
              <ResultWrapper
                onClick={() => handleChangeInitHero(hero.id)}
                key={index}
                className="d-flex align-items-center justify-content-between"
              >
                <div className="">{hero?.name}</div>
                <div className="d-flex align-items-center">
                  <div className="text-muted">see details</div>
                  <i className="bx bx-chevron-right"></i>
                </div>
              </ResultWrapper>
            ))}
          </SearchResultDivWrapper>
        </SearchContentWrapper>
      ) : (
        <SearchIconOuterWrapper>
          <div
            onClick={() => {
              setSearchListLoading(true);
              setShowSearchInput(true);
            }}
            className="icon-wrapper glassmorphism-wrapper"
          >
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
    opacity: 0.3;
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

const SearchResultDivWrapper = styled.div`
  position: absolute;
  padding: 10px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.accentColor}dd;
  left: 0;
  right: 0;
  width: 100%;
  top: 40px;
  z-index: 99999;
  min-height: 60px;
  max-height: 300px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const ResultWrapper = styled.div`
  position: relative;
  color: ${(props) => props.theme.colors.lightColor};
  padding: 7px;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightColor};
`;
