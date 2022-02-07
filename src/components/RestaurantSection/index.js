import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import piatti1 from "../../assets/images/piatti1.jpg";
import piatti4 from "../../assets/images/piatti4.jpg";
import piatti4503 from "../../assets/images/piatti4503.jpg";
import ZoomSlider from "../ZoomSlider";
import { restaurantDetails } from "../../data";
import { FaPhone } from "react-icons/fa";
import Menu from "../Menu";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const RestaurantSection = ({ scrollRef }) => {
  const [active, setActive] = useState(false);
  const blockScrollRef = useRef(null);
  useEffect(() => {
    if (active) {
      disableBodyScroll(blockScrollRef.current, { reserveScrollBarGap: true });
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [active, blockScrollRef]);
  return (
    <Wrapper>
      <Container>
        <Div header ref={scrollRef}>
          <h2>Il Ristorante</h2>
        </Div>
        <Div>
          <Column left>
            <Text>
              <p>
                Il nostro ristorante, di recente realizzazione, è destinato a
                chiunque voglia godere dell'esperienza unica di pranzare o
                cenare con una fantastica vista sullo splendido mare di San
                Pietro in Bevagna.
              </p>
            </Text>
            <Image>
              <img
                src={window.innerWidth > 576 ? piatti4 : piatti4503}
                alt="Immagine degli interni ristorante"
              />
            </Image>
            <Text>
              <p>
                È possibile pranzare e cenare sia all'interno, nella sala
                climatizzata, che all'esterno in veranda. Da entrambe le
                location si gode di un panorama meraviglioso, che concilia
                l'appetito ed il relax.
              </p>
            </Text>
          </Column>
          <Column>
            <Image right>
              <img src={piatti1} alt="Immagine di un pranzo vista mare" />
            </Image>
          </Column>
        </Div>
        <Div info>
          <Info left>
            <button onClick={() => setActive(true)}>Menù</button>
          </Info>
          <Info>
            <h3>Info e prenotazioni:</h3>
            <p>
              <PhoneIcon /> <a href="tel:+393276749153">327 6749153</a>
            </p>
          </Info>
        </Div>
      </Container>
      <SliderWrapper>
        <ZoomSlider variant={+false} images={restaurantDetails} />
      </SliderWrapper>
      <p>*Clicca sulle foto per visualizzarle a schermo intero</p>
      {active && (
        <Menu
          blockScrollRef={(el) => (blockScrollRef.current = el)}
          onClick={() => setActive(false)}
        />
      )}
    </Wrapper>
  );
};

export default RestaurantSection;

const Wrapper = styled.div`
  width: 100%;
  max-width: 100%;
  > p {
    font-size: calc(1rem + 0.2vw);
    color: #5b7083;
    margin: 0 auto;
    width: 90%;
    font-weight: 300;
    padding-bottom: 6rem;
  }
`;
const Container = styled.div`
  width: 110rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 4rem 0 2rem;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5rem;
  color: #5b7083;
  h2 {
    font-size: calc(2.5rem + 0.8vw);
    font-family: "Antonio", sans-serif;
  }
  align-items: ${(props) => props.info && "center"};
  @media screen and (max-width: 805px) {
    align-items: ${(props) => !props.header && "center"};
  }
  @media screen and (max-width: 700px) {
    flex-direction: ${(props) => !props.info && "column"};
  }
  @media screen and (max-width: 700px) {
    margin-bottom: ${(props) => props.header && "3rem"};
  }
`;
const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${(props) => (props.left ? 0 : "1.5rem")};
  margin-right: ${(props) => (props.left ? "1.5rem" : 0)};
  @media screen and (max-width: 700px) {
    margin: 1.5rem 0;
  }
`;
const Text = styled.div`
  width: 100%;
  p {
    font-size: calc(1.3rem + 0.35vw);
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 2;
    text-align: justify;
  }
`;
const Image = styled.div`
  flex: ${(props) => !props.right && 0.8};
  width: 100%;
  margin: ${(props) => !props.right && "1rem 0"};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media screen and (max-width: 700px) {
    margin: ${(props) => !props.right && "2rem 0"};
  }
`;
const SliderWrapper = styled.div`
  width: 90%;
  height: 50rem;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  margin-bottom: 2rem;
  @media screen and (max-width: 576px) {
    height: 30rem;
  }
`;
const Info = styled.div`
  flex: 1 1 50%;
  display: flex;
  align-items: ${(props) => (props.left ? "flex-start" : "flex-end")};
  flex-direction: column;
  h3 {
    font-size: calc(1.2rem + 0.35vw);
    color: #5b7083;
    margin-bottom: 1rem;
    font-weight: 300;
  }
  p,
  button {
    display: flex;
    align-items: center;
    color: #5da9ad;
    font-size: calc(1.4rem + 0.3vw);
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.3s;
    :hover {
      opacity: 0.8;
    }
    a {
      color: #5da9ad;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
  button {
    background: #5da9ad;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    padding: 1rem 3rem;
    font-weight: 400;
  }
`;
const PhoneIcon = styled(FaPhone)`
  font-size: calc(1.7rem + 0.1vw);
  color: #5da9ad;
  margin-right: 1rem;
`;
