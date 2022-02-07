import React, { useState } from "react";
import styled, { css } from "styled-components";
import Card from "../Card";
import camera from "../../assets/images/camera.jpg";
import ristorante from "../../assets/images/ristorante.jpg";
import concucina from "../../assets/images/concucina.jpg";
import dehors from "../../assets/images/dehors.jpg";
import camera463 from "../../assets/images/camera463.jpg";
import ristorante463 from "../../assets/images/ristorante463.jpg";
import concucina463 from "../../assets/images/concucina463.jpg";
import dehors463 from "../../assets/images/dehors463.jpg";

const Offer = () => {
  const [active, setActive] = useState(0);

  const links = [
    {
      title: window.innerWidth > 635 ? "Camere b&b" : "Camere",
      link: "camere",
      img: window.innerWidth <= 576 ? camera463 : camera,
      description:
        "Il Residence Aquarium dispone di diverse tipologie di camere, tra cui Matrimoniale, Junior, Tripla, Familiare e Superior.",
      price: "A partire da € 60,00",
    },
    {
      title: window.innerWidth > 635 ? "Camere con cucina" : "Con cucina",
      link: "camere-con-cucina",
      img: window.innerWidth <= 576 ? concucina463 : concucina,
      description:
        "Scopri le nostre fantastiche camere con cucina, una soluzione innovativa per godere in totale libertà ed indipendenza di tutti i nostri servizi.",
      price: "A partire da € 80,00",
    },
    {
      title: "Ristorante",
      link: "ristorante",
      img: window.innerWidth <= 576 ? ristorante463 : ristorante,
      description:
        "Il ristorante, di recente realizzazione, è destinato a chiunque voglia godere dell'esperienza unica di pranzare o cenare con la vista sul nostro splendido mare, all'esterno in veranda, o all'interno della sala climatizzata.",
    },
    {
      title: window.innerWidth > 635 ? "Dehors vista mare" : "Dehors",
      link: "dehors",
      img: window.innerWidth <= 576 ? dehors463 : dehors,
      description:
        "Cosa c'è di meglio di un aperitivo fresco e rigenerante per rilassarsi e godersi l'estate? Secondo noi nulla! Vieni a scoprire i nostri salottini vista mare e lasciati coccolare dalla brezza marina.",
    },
  ];

  return (
    <OfferContainer>
      <LinksContainer>
        {links.map((item, index) => (
          <TextContainer
            index={index}
            active={active}
            onClick={() => setActive(index)}
            key={index}
          >
            <p>{item.title.toUpperCase()}</p>
          </TextContainer>
        ))}
      </LinksContainer>
      <CardsContainer>
        <Container active={active}>
          {links.map((item, index) => (
            <Card index={index} active={active} key={index} item={item} />
          ))}
        </Container>
      </CardsContainer>
    </OfferContainer>
  );
};

export default Offer;

const OfferContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  flex-direction: column;
  margin: 0 auto;
  max-width: 90%;
  position: relative;
  z-index: 1;
`;

const CardsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding: 4rem 2rem;
  border-radius: 0.2rem;
  position: relative;
  box-shadow: 0rem 0rem 0.8rem -0.2rem rgba(0, 0, 0, 40%);
  @media screen and (max-width: 576px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  margin-left: -${(props) => props.active * 2}00%;
  transition: all 1s;
  height: 0;
  padding-top: 50%;
  @media screen and (max-width: 699px) {
    padding-top: 130%;
  }
  @media screen and (max-width: 549px) {
    padding-top: 180%;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0;
  width: 100%;
  border-bottom: 0.1rem solid #5b7083;
`;

const TextContainer = styled.div`
  padding: 2rem 0;
  flex: 0.25;
  cursor: pointer;
  text-align: center;
  border-bottom: 0.4rem solid transparent;
  :hover {
    border-bottom: ${(props) =>
      props.active !== props.index && ".4rem solid #5b7083"};
  }
  p {
    font-size: calc(1.2rem + 0.25vw);
    color: #5b7083;
    font-weight: 300;
  }
  ${(props) =>
    props.active === props.index &&
    css`
      border-bottom: 0.4rem solid #5da9ad;
      p {
        color: #5da9ad;
        font-weight: 700;
      }
    `}
  @media screen and (max-width: 436px) {
    p {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 349px) {
    p {
      font-size: 1rem;
    }
  }
`;
