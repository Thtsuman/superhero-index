import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PublisherSection from "../../components/PublisherSection/PublisherSection";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import { withRouter } from "react-router-dom";
import { fetchChosenOne } from "../../redux/sagas/requests/heroRequests";
import { useDispatch } from "react-redux";
import { clearReduxHeroObj } from "../../redux/states/Hero/heroActions";

const Mainpage = (props) => {
  const [chosenOneId, setChosenOneId] = useState(1);
  const [randomId, setRandomId] = useState(1);

  const reduxDispatch = useDispatch();

  useEffect(() => {
    reduxDispatch(clearReduxHeroObj());
    handleSetChosenOneId();
    handleGetRandomHeroId();
  }, []);

  const handleSetChosenOneId = async () => {
    let chosenOneId = 1;
    await fetchChosenOne().then((resp) => {
      chosenOneId = resp;
    });
    setChosenOneId(chosenOneId);
  };

  const handleGetRandomHeroId = async () => {
    let randomId = 1;
    await fetchChosenOne().then((resp) => {
      randomId = resp;
    });
    setRandomId(randomId);
  };

  const handleRedirectToHeroPage = (type) => {
    switch (type) {
      case "chosen_one":
        props.history.push({
          pathname: `/hero`,
          state: {
            id: chosenOneId,
          },
        });
        break;
      case "random_one":
        props.history.push({
          pathname: `/hero`,
          state: {
            id: randomId,
          },
        });
        break;
      default:
        return;
    }
  };

  return (
    <MainpageWrapper>
      <div className="container">
        <h1 style={{ opacity: 0.9 }}>Super Hero Index</h1>

        <QuoteCard />
        <SectionWrapper className="">
          <div
            className="d-flex flex-column justify-content-between"
            style={{ gap: "10px" }}
          >
            <CardWrapper
              variant={1}
              onClick={() => handleRedirectToHeroPage("chosen_one")}
              className="glassmorphism-wrapper w-100"
            >
              THE CHOSEN ONE
            </CardWrapper>
            <CardWrapper
              variant={2}
              onClick={() => handleRedirectToHeroPage("random_one")}
              className="glassmorphism-wrapper w-100"
            >
              GET ME A HERO ALREADY
            </CardWrapper>
          </div>
        </SectionWrapper>
        <PublisherSection />
        <LastSectionWrapper>
          <div className="d-flex align-items-center justify-content-between text-muted">
            <div className="">Superhero Index</div>
            <div className="">About</div>
          </div>
        </LastSectionWrapper>
      </div>
    </MainpageWrapper>
  );
};

export default withRouter(Mainpage);

// styling
const MainpageWrapper = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.darkBg};
  color: ${(props) => props.theme.colors.lightColor};
`;

const SectionWrapper = styled.div`
  margin: 30px 0px;
`;

const CardWrapper = styled.div`
  background: ${(props) => props.theme.colors[`gradient${props.variant}`]};
  padding: 40px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  letter-spacing: 1.3px;
`;

const LastSectionWrapper = styled.div`
  padding-top: 5px;
  border-top: 1px solid ${(props) => props.theme.colors.lightColor}30;
`;
