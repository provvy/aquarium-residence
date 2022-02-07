import React, { useRef } from "react";
import styled from "styled-components";
import Booking from "../../components/Booking";
import CoverPhoto from "../../components/CoverPhoto";
import Header from "../../components/Header";
import Main from "../../components/Main";
import copertinadehors from "../../assets/images/copertinadehors.jpg";
import copertinadehors576 from "../../assets/images/copertinadehors576.jpg";
import DehorsSection from "../../components/DehorsSection";
import Footer from "../../components/Footer";
import ContactButtons from "../../components/ContactButtons";
import TransitionDiv from "../../components/TransitionDiv";
import { Helmet } from "react-helmet";

const DehorsScreen = ({ history }) => {
  const scrollRef = useRef(null);
  const imageObject = {
    src: window.innerWidth > 576 ? copertinadehors : copertinadehors576,
    alt: "Foto dei dehors vista mare utilizzata come copertina per la sezione dehors.",
  };
  return (
    <DehorsScreenWrapper>
      <Helmet>
        <title>Aquarium Residence | Dehors vista mare</title>
        <meta
          name="description"
          content="Aperitivi e colazioni nelle nostre terrazze con una splendida vista sul mare cristallino"
        />
        <link rel="canonical" href="https://www.aquariumresidence.com/dehors" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Dehors vista mare"
        />
        <meta
          property="og:description"
          content="Aperitivi e colazioni nelle nostre terrazze con una splendida vista sul mare cristallino"
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/dehors"
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
        <DehorsSection title={"I Dehors"} scrollRef={scrollRef} />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </DehorsScreenWrapper>
  );
};

export default DehorsScreen;

const DehorsScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
