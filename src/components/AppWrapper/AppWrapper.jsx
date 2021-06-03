import React from "react";
import styled from "styled-components";
import BigScreenNoAllowedDiv from "../BigScreenNoAllowedDiv/BigScreenNoAllowedDiv";

const AppWrapper = (props) => {
  return (
    <AppWrapperContainer>
      <HomepageWrapper>
        <MobileWrapper>{props.children}</MobileWrapper>
        <BigScreenNoAllowedDiv />
      </HomepageWrapper>
    </AppWrapperContainer>
  );
};

export default AppWrapper;

const AppWrapperContainer = styled.div`
  height: 100vh;
`;

const HomepageWrapper = styled.div`
 
`;

const MobileWrapper = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
