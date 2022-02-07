import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ristorante11920 from "../../assets/images/ristorante11920.jpg";
import ristorante41920 from "../../assets/images/ristorante41920.jpg";
import ristorante51920 from "../../assets/images/ristorante51920.jpg";
import ristorante1576 from "../../assets/images/ristorante1576.jpg";
import ristorante4576 from "../../assets/images/ristorante4576.jpg";
import ristorante5576 from "../../assets/images/ristorante5576.jpg";
import CoverSlider from "../../components/CoverSlider";
import RestaurantSection from "../../components/RestaurantSection";
import Footer from "../../components/Footer";
import ContactButtons from "../../components/ContactButtons";
import TransitionDiv from "../../components/TransitionDiv";
import { Helmet } from "react-helmet";

const RestaurantScreen = ({ history }) => {
  const scrollRef = useRef(null);
  const imageArray = [
    {
      src: window.innerWidth > 576 ? ristorante11920 : ristorante1576,
      alt: "Foto numero 1 di copertina del Ristorante",
    },
    {
      src: window.innerWidth > 576 ? ristorante41920 : ristorante4576,
      alt: "Foto numero 2 di copertina del Ristorante",
    },
    {
      src: window.innerWidth > 576 ? ristorante51920 : ristorante5576,
      alt: "Foto numero 3 di copertina del Ristorante",
    },
  ];
  return (
    <RestaurantScreenWrapper>
      <Helmet>
        <title>Aquarium Residence | Ristorante sul mare</title>
        <meta
          name="description"
          content="È possibile pranzare e cenare sia all'interno della sala climatizzata che all'esterno in veranda con la splendida vista mare"
        />
        <link
          rel="canonical"
          href="https://www.aquariumresidence.com/ristorante-sul-mare"
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Ristorante sul mare"
        />
        <meta
          property="og:description"
          content="È possibile pranzare e cenare sia all'interno della sala climatizzata che all'esterno in veranda con la splendida vista mare"
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/ristorante-sul-mare"
        />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <TransitionDiv />
      <Header />
      <CoverSlider scrollRef={scrollRef} images={imageArray} />
      <Main>
        <RestaurantSection scrollRef={scrollRef} />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </RestaurantScreenWrapper>
  );
};

export default RestaurantScreen;

const RestaurantScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;
