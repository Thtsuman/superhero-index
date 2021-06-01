import React from "react";
import Skeleton from 'react-loading-skeleton'

const SuperHeroStats = (props) => {
  const { stats, isLoading } = props;

  const SkeletonWrapper = <Skeleton width="30px" height="20px" />

  return (
    <div>
      <h6 style={{textAlign: 'end', margin: '5px 0px'}}>STATS</h6>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ gap: "20px" }}
      >
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Intelligence</div>
          <div className="">{isLoading ? SkeletonWrapper : stats?.intelligence}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Strength</div>
          <div className="">{isLoading ? SkeletonWrapper : stats?.intelligence}</div>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ gap: "20px" }}
      >
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Speed</div>
          <div className="">{isLoading ? SkeletonWrapper : stats?.speed}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Durability</div>
          <div className="">{ isLoading ? SkeletonWrapper : stats?.durability}</div>
        </div>
      </div>
      <div
        className="d-flex align-items-center justify-content-around"
        style={{ gap: "20px" }}
      >
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Power</div>
          <div className="">{isLoading ? SkeletonWrapper : stats?.power}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-50">
          <div className="text-muted">Combat</div>
          <div className="">{isLoading ? SkeletonWrapper : stats?.combat}</div>
        </div>
      </div>
    </div>
  );
};

export default SuperHeroStats;
