import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import images from "../../assets/images";
import BigScreenNoAllowedDiv from "../../components/BigScreenNoAllowedDiv/BigScreenNoAllowedDiv";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import SuperHeroCard from "../../components/SuperHeroCard/SuperHeroCard";
import { getInitialHero } from "../../redux/states/Hero/heroActions";

const Homepage = () => {
  const reduxDispatch = useDispatch();
  const currentHeroObj = useSelector((state) => state.hero?.currentSuperHero);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    reduxDispatch(getInitialHero());
  }, []);

  useEffect(() => {
    if (currentHeroObj?.id) {
      setData(currentHeroObj);
      setIsLoading(false);
    }
  }, [currentHeroObj]);

  return (
    <HomepageWrapper>
      <MobileWrapper>
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
            onError={images.defaultImg}
            src={data?.images?.md || images.defaultImg}
            alt=""
          />
        </ImageWrapper>
      </MobileWrapper>

      <BigScreenNoAllowedDiv />
    </HomepageWrapper>
  );
};

export default Homepage;

// styling
const HomepageWrapper = styled.div`
  position: relative;
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
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
  // background: var(--light-color);
  border-radius: 10px;
  color: ${(props) => props.theme.colors.lightColor};
}
`;

const MobileWrapper = styled.div`
width: 100%;
@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
  display: none;

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
