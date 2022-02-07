import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import CoverPhoto from "../../components/CoverPhoto";
import Header from "../../components/Header";
import copertinadintorni from "../../assets/images/copertinadintorni.jpg";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import DintorniSection from "../../components/DintorniSection";
import ContactButtons from "../../components/ContactButtons";
import TransitionDiv from "../../components/TransitionDiv";
import { Helmet } from "react-helmet";

const DintorniScreen = ({ history }) => {
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
  const imageObject = {
    src: copertinadintorni,
    alt: "Foto del Duomo di Lecce usata come copertina per la sezione dintorni",
  };
  return (
    <DintorniScreenWrapper>
      <Helmet>
        <title>Aquarium Residence | Dintorni</title>
        <meta
          name="description"
          content="Il Salento, in cui siamo immersi, ti aspetta per scoprire tutte le meraviglie che custodisce"
        />
        <link
          rel="canonical"
          href="https://www.aquariumresidence.com/dintorni"
        />
        <meta property="og:locale" content="it_IT" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Aquarium Residence | Dintorni" />
        <meta
          property="og:description"
          content="Il Salento, in cui siamo immersi, ti aspetta per scoprire tutte le meraviglie che custodisce"
        />
        <meta
          property="og:url"
          content="https://www.aquariumresidence.com/dintorni"
        />
        <meta property="og:site_name" content="Aquarium Residence" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://i.imgur.com/jxF8H61.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <TransitionDiv />
      <Header scrolled={+true} />
      <CoverPhoto variant={+true} image={imageObject}>
        <TextContainer>
          <div>
            <h1>Dintorni</h1>
          </div>
        </TextContainer>
      </CoverPhoto>
      <TitleContainer>
        <Div>
          <H2 scrolled={scrolled}>Il Salento</H2>
        </Div>
      </TitleContainer>
      <Main>
        <DintorniSection />
      </Main>
      <Footer />
      <ContactButtons history={history} />
    </DintorniScreenWrapper>
  );
};

export default DintorniScreen;

const DintorniScreenWrapper = styled.div`
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
  width: 90rem;
  max-width: 90%;
  position: relative;
  margin: 0 auto;
  height: 8rem;
  @media screen and (max-width: 400px) {
    height: 6rem;
  }
`;
const H2 = styled.h2`
  font-size: calc(2.5rem + 1vw);
  font-family: "Antonio", sans-serif;
  color: #5b7083;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.scrolled ? 0 : "50%")};
  transform: ${(props) =>
    props.scrolled ? "translate(0, -58%)" : "translate(-50%, -58%)"};
  transition: all 0.25s;
`;
