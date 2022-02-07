import React, { useRef } from "react";
import styled from "styled-components";
import Booking from "../../components/Booking";
import ContactButtons from "../../components/ContactButtons";
import CoverPhoto from "../../components/CoverPhoto";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import copertinacontatti from "../../assets/images/copertinacontatti.jpg";
import copertinacontatti576 from "../../assets/images/copertinacontatti576.jpg";
import ContactSection from "../../components/ContactSection";
import TransitionDiv from "../../components/TransitionDiv";
import { Helmet } from "react-helmet";

const ContactScreen = ({ history }) => {
  const scrollRef = useRef(null);
  const imageObject = {
    src: window.innerWidth > 576 ? copertinacontatti : copertinacontatti576,
    alt: "Foto della passerella che dà sul mare usata come copertina della sezione contatti",
  };
  return (
    <ContactScreenWrapper>
      <Helmet>
        <title>Aquarium Residence | Contatti</title>
        <meta
          name="description"
          content="Contattaci per prenotare la tua camera o appartamento per la tua vacanza esclusiva in Puglia."
        />
        <link
          rel="canonical"
          href="https://www.aquariumresidence.com/contatti"
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aquarium Residence | Contatti" />
        <meta
          property="og:description"
          content="Contattaci per prenotare la tua camera o appartamento per la tua vacanza esclusiva in Puglia."
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/contatti"
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
        <ContactSection title={"Contatti"} scrollRef={scrollRef} />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </ContactScreenWrapper>
  );
};

export default ContactScreen;

const ContactScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
