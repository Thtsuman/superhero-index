import React from "react";
import Skeleton from 'react-loading-skeleton'

const GenderDiv = (props) => {
  const { gender, isLoading } = props;
  return (
    <div className="text-capitalize">
      {isLoading ? (
        <Skeleton height="30px" width="30px" />
      ) : gender?.toUpperCase() === "MALE" ? (
        <i className="bx bx-male-sign bx-sm" style={{ color: "#4F8AFF" }}></i>
      ) : (
        <i
          className="bx bx-female-sign bx-sm"
          style={{ color: "#F99AFF " }}
        ></i>
      )}
    </div>
  );
};

export default GenderDiv;
