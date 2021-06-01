import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <ButtonWrapper {...props} className={`${props.className}`}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  margin: 5px 0px;
  padding: 10px 20px;
  border-radius: 7px;
  width: 100%;
  border: unset;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "transparent"
      : props.theme.colors.accentColor};
  color: ${(props) => props.theme.colors.lightColor};
  font-size: 0.8rem;

  box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);
  -webkit-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 0px 19px 1px rgba(0, 0, 0, 0.57);
`;
