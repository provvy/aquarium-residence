import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import copertinacamere from "../../assets/images/copertinacamere.jpg";
import CoverPhoto from "../../components/CoverPhoto";
import Booking from "../../components/Booking";
import Main from "../../components/Main";
import Section from "../../components/Section";
import { roomDetails } from "../../data";
import Footer from "../../components/Footer";
import ContactButtons from "../../components/ContactButtons";
import TransitionDiv from "../../components/TransitionDiv";
import copertinacamere576 from "../../assets/images/copertinacamere576.jpg";
import { Helmet } from "react-helmet";

const RoomScreen = ({ history }) => {
  const imageObject = {
    src: window.innerWidth > 576 ? copertinacamere : copertinacamere576,
    alt: "Foto della camera senior utilizzata come copertina per la sezione camere",
  };
  const description =
    "Ideale per una vacanza di coppia o per la famiglia, il Residence Aquarium dispone di diverse tipologie di camere, perfette anche per un gruppo di amici. Sono tutte accoglienti e luminose, le tonalità dei colori pastello che contraddistinguono la location, rendendola fresca e pulita, conciliano il relax. Il pavimento in ceramica e i semplici complementi d'arredo richiamano le tonalità naturali del legno e rendono l'ambiente caldo e confortevole. Le camere hanno tutte i servizi privati con doccia e asciugacapelli, wi-fi libero, aria climatizzata con controllo indipendente, frigobar, TV LCD.";
  const targetRef = useRef(null);
  const scrollRef = useRef(null);

  return (
    <RoomScreenWrapper>
      <Helmet>
        <title>
          Aquarium Residence | Camere matrimoniali e familiari per vacanze in
          Puglia
        </title>
        <meta
          name="description"
          content="Pernottamento con colazione inclusa in struttura con affaccio diretto sulla spiaggia di San Pietro in Bevagna. Clicca e scegli la tua soluzione preferita."
        />
        <link rel="canonical" href="https://www.aquariumresidence.com/camere" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Camere matrimoniali e familiari per vacanze in Puglia"
        />
        <meta
          property="og:description"
          content="Pernottamento con colazione inclusa in struttura con affaccio diretto sulla spiaggia di San Pietro in Bevagna. Clicca e scegli la tua soluzione preferita."
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/camere"
        />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <TransitionDiv />
      <Header scrolled={+true} />
      <CoverPhoto image={imageObject}>
        <Booking variant={+true} />
      </CoverPhoto>
      <Main>
        <Section
          variant={+true}
          title={"Le Camere"}
          targetRef={targetRef}
          scrollRef={scrollRef}
          description={description}
          details={roomDetails}
        />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </RoomScreenWrapper>
  );
};

export default RoomScreen;

const RoomScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
