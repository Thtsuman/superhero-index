import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import images from "../../assets/images";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import SuperHeroCard from "../../components/SuperHeroCard/SuperHeroCard";
import {
  getHeroWithId,
  getInitialHero,
  toggleIsLoading,
} from "../../redux/states/Hero/heroActions";

const Heropage = (props) => {
  const reduxDispatch = useDispatch();
  const currentHeroObj = useSelector((state) => state.hero?.currentSuperHero);
  const isLoading = useSelector((state) => state.hero?.isLoading);

  const [data, setData] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    reduxDispatch(toggleIsLoading(true));
    const id = props.location?.state?.id;
    if (id) {
      reduxDispatch(getHeroWithId(id));
    } else {
      reduxDispatch(getInitialHero());
    }
  }, []);

  useEffect(() => {
    if (currentHeroObj?.id) {
      setData(currentHeroObj);
      reduxDispatch(toggleIsLoading(false));
    }
  }, [currentHeroObj]);

  return (
    <HeropageWrapper>
      <SearchComponent />
      <DescriptionWrapper
        id="description-wrapper"
        className="glassmorphism-wrapper"
      >
        <SuperHeroCard isLoading={isLoading} data={data} />
      </DescriptionWrapper>
      <ImageWrapper>
        <OpacityWrapper className="opacity-container"></OpacityWrapper>
        <SuperHeroImg
          onError={() => images.defaultImg}
          src={
            isLoading
              ? images.defaultImg
              : data?.images?.md || images.defaultImg
          }
          alt=""
        />
      </ImageWrapper>
    </HeropageWrapper>
  );
};

export default Heropage;

// styling

const HeropageWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

const ImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;

const DescriptionWrapper = styled.div`
  position: relative;
  width: 100%;
  bottom: 0;
  z-index: 99;
  transition: opacity 0.3s ease-in-out;
  // background: var(--light-color);
  border-radius: 10px;
  color: ${(props) => props.theme.colors.lightColor};
}
`;

const SuperHeroImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const OpacityWrapper = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 31%,
    rgba(0, 0, 0, 0) 100%
  );
`;
