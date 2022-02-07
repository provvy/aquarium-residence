import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Card = ({ index, active, item }) => {
  const history = useHistory();
  const trigger = () => {
    history.push(`/${item.link}`);
  };
  return (
    <CardWrapper index={index} active={active}>
      <ImageContainer onClick={trigger}>
        <img src={item.img} alt={item.title} />
      </ImageContainer>
      <TextWrapper>
        <TextContainer>
          <h2>{item.title}</h2>
        </TextContainer>
        <TextContainer>
          <h4>Descrizione</h4>
          <p>{item.description}</p>
        </TextContainer>
        {item.price && (
          <TextContainer>
            <h4>Prezzo</h4>
            <p>{item.price}</p>
          </TextContainer>
        )}
        <ButtonContainer>
          <button onClick={trigger}>SCOPRI DI PIÙ</button>
        </ButtonContainer>
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: ${(props) => props.index}00%;
  height: 100%;
  @media screen and (max-width: 699px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  flex: 0.55 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2rem;
  height: 100%;
  overflow: hidden;
  position: relative;
  ::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    transition: 0.2s;
  }
  :hover {
    ::after {
      opacity: 0.2;
    }
  }
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: block;
    transition: 0.3s;
  }
  @media screen and (max-width: 799px) {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 576px) {
    margin: 0 1rem 2rem;
  }
  @media screen and (max-width: 399px) {
    flex: 0.45;
  }
  @media screen and (max-width: 309px) {
    flex: 0.4;
  }
`;
const TextWrapper = styled.div`
  flex: 0.45 1;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    margin: 0 1rem;
  }
  @media screen and (max-width: 399px) {
    flex: 0.55;
  }
  @media screen and (max-width: 309px) {
    flex: 0.6;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1rem;
  h2 {
    font-size: calc(2.5rem + 0.45vw);
    color: #5da9ad;
  }
  h4 {
    font-size: calc(1.7rem + 0.2vw);
    color: #5da9ad;
    padding-bottom: 1rem;
  }
  p {
    color: #5b7083;
    font-size: calc(1.2rem + 0.2vw);
    line-height: 1.7;
    font-weight: 300;
  }
  @media screen and (max-width: 419px) {
    h2 {
      font-size: 2.3rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  button {
    cursor: pointer;
    padding: 1.5rem 3vw;
    background: #5da9ad;
    color: #fff;
    font-size: calc(1rem + 0.25vw);
    font-weight: 600;
    border: none;
    outline: none;
    transition: opacity 0.15s;
    :hover {
      opacity: 0.85;
    }
  }
`;
