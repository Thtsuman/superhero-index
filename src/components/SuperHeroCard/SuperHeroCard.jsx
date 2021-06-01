import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import GenderDiv from "../GenderDiv/GenderDiv";
import KeyValueDiv from "../KeyValueDiv/KeyValueDiv";
import SuperHeroExpand from "../SuperHeroExpand/SuperHeroExpand";
import SuperHeroStats from "../SuperHeroStats/SuperHeroStats";
import Skeleton from "react-loading-skeleton";

const SuperHeroCard = (props) => {
  const { data, isLoading } = props;

  const [show, setShow] = useState(false);

  return (
    <SuperheroContainerWrapper className="container">
      <div>
        <SuperHeroName>{isLoading ? <Skeleton /> : data.name}</SuperHeroName>
        <SuperHeroDescription>
          {/* top layer desc */}
          <div className="my-2">
            <div className="d-flex align-items-center justify-content-between">
              <KeyValueDiv
                isLoading={isLoading}
                name="Publisher"
                value={[data?.biography?.publisher]}
              />
              <div className="d-flex align-items-end">
                <KeyValueDiv
                  isLoading={isLoading}
                  className="text-right mr-2"
                  name="Character"
                  value={[data?.biography?.alignment]}
                />
                <div className="">
                  <GenderDiv
                    isLoading={isLoading}
                    gender={data?.appearance?.gender}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* stats layer desc */}
          <SuperHeroStats isLoading={isLoading} stats={data?.powerstats} />

          {/* lower layer desc */}
          <KeyValueDiv
            isLoading={isLoading}
            multiple
            className="my-2"
            name="Occupation"
            value={data?.work?.occupation?.split(";")}
          />
        </SuperHeroDescription>
        {show ? <SuperHeroExpand data={data} /> : <></>}
      </div>
      <div className="d-flex">
        <Button disabled={isLoading} onClick={() => setShow(!show)}>
          {!show ? "See" : "Hide"} Details
        </Button>
      </div>
    </SuperheroContainerWrapper>
  );
};

export default SuperHeroCard;

const SuperHeroName = styled.h1``;

const SuperHeroDescription = styled.div`
  margin: 15px 0px;
  width: 100%;
`;

const SuperheroContainerWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100vh;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;
