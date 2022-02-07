import React from "react";
import styled from "styled-components";
import { ImQuotesRight } from "react-icons/im";

const Quote = () => (
  <QuoteContainer>
    <TextWrapper>
      <TextContainer>
        <QuoteIcon />
        <h1>
          La voce del mare parla all'anima. Il suo tocco è sensuale, avvolge il
          corpo in un morbido e stretto abbraccio.
        </h1>
        <span>- Kate Chopin</span>
      </TextContainer>
    </TextWrapper>
  </QuoteContainer>
);

export default Quote;

const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 576px) {
    padding-top: 4rem;
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  width: 90rem;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  max-width: 80%;
`;

const QuoteIcon = styled(ImQuotesRight)`
  font-size: calc(2rem + 1vw);
  float: left;
  color: #5da9ad;
`;

const TextContainer = styled.div`
  position: relative;
  padding-bottom: 2rem;
  ::before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 60%;
    border-bottom: 0.1rem solid #bababa;
  }
  h1 {
    font-size: calc(3rem + 1vw);
    font-family: "Allura", cursive;
    font-weight: normal;
    line-height: 1.3;
    color: #000;
  }
  span {
    float: right;
    font-size: calc(0.8rem + 0.5vw);
    color: #888;
    font-weight: 300;
  }
`;
