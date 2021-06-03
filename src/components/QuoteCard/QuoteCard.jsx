import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const heroQuotes = [
  {
    quote:
      "Remember that just because you hit bottom doesn't mean you have to stay there",
    by: "Robert Downey jr.",
  },
  {
    quote: "I’m loyal to nothing, General…except the Dream.",
    by: "Captain America",
  },
  {
    quote:
      "Of all people, you know who I am…who the worlds needs me to be. I’m Wonder Woman.",
    by: "Wonder Woman",
  },
  {
    quote: "You are much stronger than you think you are. Trust me.",
    by: "Superman",
  },
  {
    quote:
      "You have the instincts of a hero, my friend. But above all, the soul of a good man.",
    by: "Nightcrawler",
  },
];

const QuoteCard = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    window.interval23 = setInterval(() => {
      setCurrentQuoteIndex((state) =>
        state + 2 > heroQuotes.length ? 0 : state + 1
      );
    }, 10000);
    return () => {
      clearInterval(window.interval23);
    };
  }, []);

  return (
    <QuoteCardWrapper>
      <SwitchTransition mode="out-in">
        <CSSTransition
          classNames="fade"
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          key={currentQuoteIndex}
        >
          <>
            <QuoteText>{heroQuotes[currentQuoteIndex].quote}</QuoteText>
            <QuoteBy className="text-muted">
              -{heroQuotes[currentQuoteIndex].by}
            </QuoteBy>
          </>
        </CSSTransition>
      </SwitchTransition>

      {/* <QuoteText>{heroQuotes[currentQuoteIndex].quote}</QuoteText>
      <QuoteBy className="text-muted">
        -{heroQuotes[currentQuoteIndex].by}
      </QuoteBy> */}
    </QuoteCardWrapper>
  );
};

export default QuoteCard;

const QuoteCardWrapper = styled.div`
  padding: 10px 0px;
  margin: 20px 0px;
  transition: 0.2s ease-in-out all;
  min-height: 150px;

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const QuoteText = styled.div`
  font-weight: lighter;
  line-height: 1.3;
  letter-spacing: 1.3px;
  opacity: 0.7;
`;
const QuoteBy = styled.div`
  opacity: 0.3;
  text-align: end;
`;
