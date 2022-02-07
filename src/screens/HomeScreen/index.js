import React, { useRef } from "react";
import styled from "styled-components";
import Booking from "../../components/Booking";
import CarouselContainer from "../../components/CarouselContainer";
import ContactButtons from "../../components/ContactButtons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import MediaComponent from "../../components/MediaComponent";
import Presentation from "../../components/Presentation";
import ReviewsComponent from "../../components/ReviewsComponent";
import Slider from "../../components/Slider";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export const RefContext = React.createContext();

const HomeScreen = ({ history }) => {
  const targetRef = useRef(null);
  const context = {
    targetRef,
  };
  return (
    <HomeScreenWrapper>
      <Helmet>
        <title>
          Aquarium Residence | Camere matrimoniali e appartamenti per vacanze in
          Puglia
        </title>
        <meta
          name="description"
          content="Il Residence Aquarium è il punto di riferimento per chi cerca una vacanza rilassante lontano dal caos. Direttamente sul mare, entra e scopri di più!"
        />
        <link rel="canonical" href="https://www.aquariumresidence.com/" />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Camere matrimoniali e appartamenti per vacanze in Puglia"
        />
        <meta
          property="og:description"
          content="Il Residence Aquarium è il punto di riferimento per chi cerca una vacanza rilassante lontano dal caos. Direttamente sul mare, entra e scopri di più!"
        />
        <meta property="og:url" content="https://www.aquariumresidence.com/" />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <TransitionDiv
        initial={false}
        animate={{ top: "100%" }}
        exit={{ top: 0 }}
        transition={{ duration: 1 }}
      />
      <RefContext.Provider value={context}>
        <Header />
        <Slider />
        <Main>
          <Booking />
          <Presentation />
          <ReviewsComponent />
          <MediaComponent />
          <CarouselContainer />
        </Main>
        <Footer />
        <ContactButtons history={history} />
      </RefContext.Provider>
    </HomeScreenWrapper>
  );
};

export default HomeScreen;

const HomeScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  height: 100%;
`;
const TransitionDiv = styled(motion.div)`
  position: fixed;
  z-index: 99999;
  bottom: 0;
  left: 0;
  right: 0;
  background: #5da9ad;
  height: 100vh;
`;
