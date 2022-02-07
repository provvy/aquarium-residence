import React from "react";
import styled from "styled-components";
import ServiceCard from "../ServiceCard";
import { IoSunnyOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { GiWineGlass } from "react-icons/gi";

const ServiceComponent = () => {
  const cardItems = [
    {
      img: <DrinkIcon />,
      title: "SERVIZI",
      subtitle: "La nostra accoglienza su misura",
      description:
        "Il chiosco bar, il wifi libero e il parcheggio in area riservata sono solo alcuni dei servizi che mettiamo a disposizione dei nostri ospiti.",
    },
    {
      img: <SunIcon />,
      title: "COMODITÀ E RELAX",
      subtitle: "Goditi la tua vacanza",
      description:
        "Uscire dalla propria stanza e ritrovarsi il mare a pochi passi, è questo secondo noi l'ingrediente giusto per la vacanza ideale.",
    },
    {
      img: <CheckIcon />,
      title: "SICUREZZA",
      subtitle: "Un soggiorno in tutta tranquillità",
      description:
        "La spiaggia antistante è organizzata con un accurato sistema di distanziamento tra ombrelloni. La vostra sicurezza è la nostra priorità.",
    },
  ];

  return (
    <ServiceContainer>
      <CardsContainer>
        {cardItems.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </CardsContainer>
    </ServiceContainer>
  );
};

export default ServiceComponent;

const ServiceContainer = styled.div`
  width: 110rem;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem auto;
`;

const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
`;

const SunIcon = styled(IoSunnyOutline)`
  font-size: calc(5rem + 0.3vw);
  color: #5da9ad;
`;

const CheckIcon = styled(IoCheckmarkCircleOutline)`
  font-size: calc(5rem + 0.3vw);
  color: #5da9ad;
`;

const DrinkIcon = styled(GiWineGlass)`
  font-size: calc(5rem + 0.3vw);
  color: #5da9ad;
`;
