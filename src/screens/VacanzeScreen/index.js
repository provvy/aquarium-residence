import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import ContactButtons from "../../components/ContactButtons";
import CoverPhoto from "../../components/CoverPhoto";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import drone3 from "../../assets/images/drone3.jpg";
import VacanzeSection from "../../components/VacanzeSection";
import drone2 from "../../assets/images/drone2.jpg";
import { Helmet } from "react-helmet";

const VacanzeScreen = ({ history }) => {
  const imageObject = {
    src: window.innerWidth >= 576 ? drone3 : drone2,
    alt: "Foto del Residence Aquarium vista dall'alto e scattata col drone",
  };
  const [scrolled, setScrolled] = useState(+false);
  useEffect(() => {
    const scrollDetection = () => {
      if (window.scrollY > 0) {
        setScrolled(+true);
      } else {
        setScrolled(+false);
      }
    };
    window.addEventListener("scroll", scrollDetection);
    return () => window.removeEventListener("scroll", scrollDetection);
  }, []);
  return (
    <VacanzeScreenWrapper>
      <Helmet>
        <title>Aquarium Residence | Vacanze Sicure</title>
        <meta
          name="description"
          content="La nostra policy riguardo il programma Vacanze Sicure, per viaggiare, prenotare o cancellare in totale sicurezza"
        />
        <link
          rel="canonical"
          href="https://www.aquariumresidence.com/vacanze-sicure"
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aquarium Residence | Vacanze Sicure"
        />
        <meta
          property="og:description"
          content="La nostra policy riguardo il programma Vacanze Sicure, per viaggiare, prenotare o cancellare in totale sicurezza"
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/vacanze-sicure"
        />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <Header scrolled={+true} />
      <CoverPhoto variant={+true} image={imageObject}>
        <TextContainer>
          <div>
            <h1>Vacanze Sicure</h1>
          </div>
        </TextContainer>
      </CoverPhoto>
      <TitleContainer>
        <Div>
          <H2 scrolled={scrolled}>Il Programma</H2>
        </Div>
      </TitleContainer>
      <Main>
        <VacanzeSection />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </VacanzeScreenWrapper>
  );
};

export default VacanzeScreen;

const VacanzeScreenWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

const animateText = keyframes`
    from {
      transform: translateY(100%);
    } to {
      transform: translateY(0);
    }
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: "Allura", cursive;
  color: rgba(255, 255, 255, 100%);
  overflow: hidden;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    animation: ${animateText} 3s ease forwards;
    font-size: calc(2rem + 2vw);
  }
  h1 {
    font-weight: 200;
  }
`;
const TitleContainer = styled.div`
  margin-bottom: 0.6rem;
  box-shadow: 0rem 0.3rem 0.8rem -0.2rem rgba(0, 0, 0, 30%);
  background: #fff;
  width: 100%;
`;
const Div = styled.div`
  width: 110rem;
  max-width: 90%;
  position: relative;
  margin: 0 auto;
  height: 8rem;
  @media screen and (max-width: 400px) {
    height: 6rem;
  }
`;
const H2 = styled.h2`
  font-size: calc(2.5rem + 0.8vw);
  font-family: "Antonio", sans-serif;
  color: #5b7083;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.scrolled ? 0 : "50%")};
  transform: ${(props) =>
    props.scrolled ? "translate(0, -58%)" : "translate(-50%, -58%)"};
  transition: all 0.25s;
`;
