import React from "react";
import styled from "styled-components";

const ServiceCard = ({ item }) => {
  return (
    <CardContainer>
      <IconContainer>{item.img}</IconContainer>
      <TextContainer>
        <h3>{item.title}</h3>
        <h6>{item.subtitle}</h6>
        <p>{item.description}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default ServiceCard;

const CardContainer = styled.div`
  flex: 0.5 1 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;
  h3 {
    font-size: calc(1.7rem + 0.2vw);
    font-weight: 500;
    color: #5b7083;
    margin-bottom: 0.8rem;
  }
  h6 {
    font-size: calc(1.1rem + 0.2vw);
    font-weight: 400;
    color: #5b7083;
    margin-bottom: 0.8rem;
  }
  p {
    font-size: calc(1.2rem + 0.2vw);
    font-weight: 300;
    line-height: 1.6;
    text-align: center;
    color: #5b7083;
  }
`;
