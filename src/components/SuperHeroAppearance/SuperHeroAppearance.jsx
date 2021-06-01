import React, { useState } from "react";

const SuperHeroAppearance = (props) => {
  const { appearance } = props;

  const [currentHeightIndex, setCurrentHeightIndex] = useState(0);
  const [currentWeightIndex, setCurrentWeightIndex] = useState(0);

  const handleChangeHeight = () => {
    setCurrentHeightIndex(currentHeightIndex === 1 ? 0 : 1);
  };
  const handleChangeWeight = () => {
    setCurrentWeightIndex(currentWeightIndex === 1 ? 0 : 1);
  };

  return (
    <div className="my-2">
      <h6 style={{ textAlign: "end", margin: "5px 0px" }}>APPEARANCE</h6>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ gap: "20px" }}
      >
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Race</div>
          <div className="">{appearance?.race}</div>
        </div>
        <div
          onClick={handleChangeHeight}
          className="d-flex align-items-center justify-content-between w-50"
        >
          <div className="text-muted">Height</div>
          <div className="">{appearance?.height[currentHeightIndex]}</div>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ gap: "20px" }}
      >
        <div
          onClick={handleChangeWeight}
          className="d-flex align-items-center justify-content-between w-50"
        >
          <div className="text-muted">Weight</div>
          <div className="">{appearance?.weight[currentWeightIndex]}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Eye Color</div>
          <div className="">{appearance?.eyeColor}</div>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-start"
        style={{ gap: "20px" }}
      >
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Hair Color</div>
          <div className="">{appearance?.hairColor}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-50">
            <div className="text-muted">Gender</div>
            <div className="">{appearance?.gender}</div>
          </div>
      </div>
    </div>
  );
};

export default SuperHeroAppearance;
