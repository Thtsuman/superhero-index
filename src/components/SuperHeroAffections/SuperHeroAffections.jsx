import React from "react";
import KeyValueDiv from "../KeyValueDiv/KeyValueDiv";

const SuperHeroAffections = (props) => {
  const { connections } = props;
  return (
    <div className="my-2">
      <h6 style={{ textAlign: "end", margin: "5px 0px" }}>CONNECTION</h6>
      <KeyValueDiv
        className="my-2"
        name="Group Affiliation"
        value={connections?.groupAffiliation?.split(";")}
      />
      <KeyValueDiv
        className="my-2"
        name="Relatives"
        value={connections?.relatives?.split(";")}
      />
    </div>
  );
};

export default SuperHeroAffections;
