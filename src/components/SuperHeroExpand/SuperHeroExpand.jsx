import React from "react";
import Button from "../Button/Button";
import SuperHeroAffections from "../SuperHeroAffections/SuperHeroAffections";
import SuperHeroAppearance from "../SuperHeroAppearance/SuperHeroAppearance";
import SuperHeroBiography from "../SuperHeroBiography/SuperHeroBiography";

const SuperHeroExpand = (props) => {
  const { data } = props;

  const handleOpenGoogleSearch = () => {
    window.open(`https://www.google.com/search?q=${data?.name}-${data?.biography?.publisher}`, '_blank' )
  }

  return (
    <div>
      <SuperHeroAppearance appearance={data?.appearance} />
      <SuperHeroBiography biography={data?.biography} />
      <SuperHeroAffections connections={data?.connections} />
      <Button onClick={handleOpenGoogleSearch} variant="secondary">Learn More</Button>
    </div>
  );
};

export default SuperHeroExpand;
