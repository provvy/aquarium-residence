import React, { useContext } from "react";
import styled from "styled-components";
import terrazza2 from "../../assets/images/terrazza2.jpg";
import bar from "../../assets/images/bar.jpg";
import { RefContext } from "../../screens/HomeScreen";
import ServiceComponent from "../ServiceComponent";
import drone from "../../assets/images/drone.jpg";
import Offer from "../Offer";
import Hashtag from "../Hashtag";
import terrazza2923 from "../../assets/images/terrazza2923.jpg";
import bar923 from "../../assets/images/bar923.jpg";
import terrazza2503 from "../../assets/images/terrazza2503.jpg";
import bar503 from "../../assets/images/bar503.jpg";

const Presentation = () => {
  const ref = useContext(RefContext);

  return (
    <PresentationWrapper>
      <BackgroundGradient>
        <img src={drone} alt="Foto del mare usata come sfondo" />
        <GradientDiv top />
        <GradientDiv />
      </BackgroundGradient>
      <PresentationContainer>
        <TitleContainer ref={ref.targetRef}>
          <h2>About us</h2>
        </TitleContainer>
        <Row top>
          <Text left>
            <p>
              <strong>L'Aquarium Residence</strong> si trova a San Pietro in
              Bevagna, una delle località balneari più rinomate della costa
              Jonica, in territorio di Manduria. Il residence, di recente
              ristrutturazione, è costituito da 8 camere b&b e 4 camere con
              angolo cottura, tutte completamente indipendenti. Completano
              l'offerta un chiosco bar, un ristorante ed una terrazza con
              accesso diretto alla splendida spiaggia bianca dal mare
              cristallino.
            </p>
          </Text>
          <ImageContainer>
            <img
              src={
                window.innerWidth <= 576
                  ? bar503
                  : window.innerWidth <= 1042
                  ? bar923
                  : bar
              }
              alt="Immagine del fronte locale"
            />
          </ImageContainer>
        </Row>
        <ServiceComponent />
        <Row>
          <ImageContainer>
            <img
              src={
                window.innerWidth <= 576
                  ? terrazza2503
                  : window.innerWidth <= 1042
                  ? terrazza2923
                  : terrazza2
              }
              alt="Immagine della terrazza"
            />
          </ImageContainer>
          <Text>
            <p>
              La bellezza del paesaggio offre viste mozzafiato che trasmettono
              un senso di relax e tranquillità. Di particolare interesse sono le
              dune secolari, alcune tra le meglio conservate in Italia, sito di
              interesse comunitario, ricoperte da tipica vegetazione
              mediterranea. Sono facilmente raggiungibili alcune delle località
              più note al turismo internazionale, città quali{" "}
              <strong>Lecce, Ostuni, Alberobello, Manduria,</strong> ma anche le
              spiagge di <strong>Torre Lapillo, Gallipoli, Otranto.</strong>
            </p>
          </Text>
        </Row>
      </PresentationContainer>
      <Hashtag />
      <Offer />
    </PresentationWrapper>
  );
};

export default Presentation;

const PresentationWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 4rem 0 13rem;
  background: #f7f7f7;
  position: relative;
`;

const BackgroundGradient = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(191, 255, 251, 0.9108018207282913) 25%,
    rgba(93, 169, 173, 1) 100%
  );
  img {
    mask-image: linear-gradient(
        90deg,
        transparent 0%,
        black 50%,
        transparent 100%
      ),
      linear-gradient(270deg, transparent 0%, black 50%, transparent 100%);
    opacity: 0.7;
    width: 160rem;
  }
  @media screen and (max-width: 1199px) {
    img {
      width: 140rem;
    }
  }
  @media screen and (max-width: 966px) {
    img {
      width: 120rem;
    }
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top && 0};
  bottom: ${(props) => !props.top && 0};
  width: 100%;
  height: 50%;
  background: ${(props) =>
    props.top
      ? "linear-gradient(0deg, transparent, #f7f7f7 90%)"
      : "linear-gradient(0deg, #5da9ad, transparent)"};
`;

const PresentationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  flex-direction: column;
  max-width: 90%;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  h2 {
    font-size: calc(3rem + 0.8vw);
    color: #5b7083;
    font-weight: 600;
    font-family: "Antonio", sans-serif;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 0;
  flex-wrap: wrap;
`;

const Text = styled.div`
  flex: 1 35%;
  padding-right: ${(props) => props.left && "4rem"};
  padding-left: ${(props) => !props.left && "4rem"};
  p {
    font-size: calc(1.3rem + 0.35vw);
    text-align: justify;
    color: #5b7083;
    line-height: 2;
    font-weight: 300;
    strong {
      color: #5da9ad;
    }
  }
  @media screen and (max-width: 1042px) {
    padding: 0;
    margin-bottom: ${(props) => props.left && "3rem"};
    margin-top: ${(props) => !props.left && "3rem"};
  }
`;

const ImageContainer = styled.div`
  flex: 1 60rem;
  overflow: hidden;
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    display: block;
  }
`;
