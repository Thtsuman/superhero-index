import React from "react";
import styled from "styled-components";
import images from "../../assets/images";

const BigScreenNoAllowedDiv = () => {
  return (
    <SignWrapper>
      <div>This application is only supported on mobile.</div>
      <div>Please use mobile to use this application</div>
      <ImgWrapper src={images.noImgScreenImg} alt="" />
    </SignWrapper>
  );
};

export default BigScreenNoAllowedDiv;

const SignWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${props => props.theme.colors.lightColor};
  display:none;
  color: ${props => props.theme.colors.accentColor};

  @media(min-width: ${props => props.theme.breakpoints.mobile}) {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ImgWrapper = styled.img`
  width: 60px;
  margin: 30px;
`
