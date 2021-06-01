import React from "react";
import KeyValueDiv from "../KeyValueDiv/KeyValueDiv";

const SuperHeroBiography = (props) => {
  const { biography } = props;
  return (
    <div className="my-2">
      <h6 style={{ margin: "5px 0px" }}>BIO</h6>

      <KeyValueDiv
        className="my-2"
        name="Full Name"
        value={[biography?.fullName]}
      />
      <KeyValueDiv
        className="my-2"
        name="Alter Egos"
        value={[biography?.alterEgos]}
      />
      <KeyValueDiv
        className="my-2"
        name="Place of Birth"
        value={[biography?.placeOfBirth]}
      />
      <KeyValueDiv
        className="my-2"
        name="First Appearance"
        value={[biography?.firstAppearance]}
      />
      <KeyValueDiv
        className="my-2"
        name="Publisher"
        value={[biography?.publisher]}
      />
    </div>
  );
};

export default SuperHeroBiography;
