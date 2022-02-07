import React, { useState, useEffect, useCallback } from "react";
import styled, { css, keyframes } from "styled-components";
import Availability from "../Availability";
import Details from "../Details";
import RoomCard from "../RoomCard";
import RoomSlider from "../RoomSlider";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { BsChevronDoubleDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const Section = ({
  description,
  variant,
  title,
  targetRef,
  scrollRef,
  details,
}) => {
  const [active, setActive] = useState(false);
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
    return () => {
      window.removeEventListener("scroll", scrollDetection);
    };
  }, []);

  const keyPress = useCallback((e) => {
    if (e.keyCode === 27) {
      setActive(0);
    }
  }, []);

  useEffect(() => {
    if (active) {
      disableBodyScroll(targetRef.current, { reserveScrollBarGap: true });
      window.addEventListener("keydown", keyPress);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", keyPress);
    };
  }, [keyPress, active, targetRef]);

  return (
    <SectionWrapper>
      <TitleContainer ref={scrollRef}>
        <H2 scrolled={scrolled}>
          <span>{title}</span>
          <DownIcon
            onClick={() => scrollRef.current.scrollIntoView()}
            scrolled={scrolled}
          />
        </H2>
      </TitleContainer>
      <SectionContainer>
        <Left>
          <Container variant="image">
            <RoomSlider
              images={details.reduce(
                (acc, curr) => acc.concat(curr.images),
                []
              )}
            />
          </Container>
          <Container variant="description">
            <Title>
              <h3>Descrizione</h3>
            </Title>
            <Text>
              <p>{description}</p>
            </Text>
          </Container>
          {details.map((item, index) => (
            <Container key={index} variant="card">
              <RoomCard
                onClick={() => setActive(index + 1)}
                key={index}
                item={item}
              />
            </Container>
          ))}
          <Container variant="description">
            <Title>
              <h3>Norme</h3>
            </Title>
            <Text>
              <p>
                Per la salvaguardia dell'ambiente, il cambio della biancheria è
                previsto due volte alla settimana, più precisamente il mercoledì
                e la domenica. Qualora desideraste cambio extra, questo servizio
                sarà fornito a pagamento.
              </p>
              {variant && (
                <p>
                  La colazione viene servita dalle 7.30 alle 9.30 nella sala
                  ristoro, con una splendida vista sul mare e l'accesso diretto
                  alla spiaggia.
                </p>
              )}
            </Text>
          </Container>
          {variant && (
            <Final>
              *I prezzi si intendono a notte per camera in trattamento di bed
              and breakfast e possono subire variazioni a seconda delle
              promozioni attive.
            </Final>
          )}
          <Final>
            Il personale della struttura è a disposizione per valutare e cercare
            di esaudire ogni richiesta specifica.{" "}
            <span>
              <RouterLink to="/contatti">Non esitare a contattarci!</RouterLink>
            </span>
          </Final>
        </Left>
        <Right>
          <Availability>{details[0].prezzi[0]}€</Availability>
        </Right>
      </SectionContainer>
      {active &&
        details
          .filter((item, index) => index + 1 === active)
          .map((item, index) => (
            <Details
              targetRef={(el) => (targetRef.current = el)}
              key={index}
              item={item}
              onClick={() => setActive(false)}
            />
          ))}
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 8rem;
  box-shadow: 0rem 0.3rem 0.8rem -0.2rem rgba(0, 0, 0, 30%);
  margin-bottom: 0.8rem;
  @media screen and (max-width: 400px) {
    height: 6rem;
  }
`;

const H2 = styled.h2`
  font-size: calc(2.5rem + 0.8vw);
  color: #5b7083;
  font-family: "Antonio", sans-serif;
  width: 110rem;
  max-width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-top: -0.5rem;
    transition: all 0.25s ease-out;
    position: absolute;
    opacity: ${(props) => (props.scrolled ? 1 : 0)};
    top: 50%;
    left: ${(props) => (props.scrolled ? 0 : "50%")};
    transform: ${(props) =>
      props.scrolled ? "translate(0, -50%)" : "translate(-110%, -50%)"};
    pointer-events: none;
    display: flex;
  }
`;

const animateIcon = keyframes`
  from {
    transform: scale(1)
  } to {
    transform: scale(1.25)
  }
`;

const DownIcon = styled(BsChevronDoubleDown)`
  font-size: calc(3.5rem + 1vw);
  animation: ${animateIcon} 0.5s alternate infinite;
  color: #5b7083;
  transition: opacity 0.25s ease-in-out, transform 0.25s;
  opacity: ${(props) => (props.scrolled ? 0 : 1)};
  cursor: pointer;
  pointer-events: ${(props) => props.scrolled && "none"};
`;

const SectionContainer = styled.div`
  width: 110rem;
  display: flex;
  max-width: 90%;
  margin: 0 auto;
`;

const Left = styled.div`
  flex: 0 1 80rem;
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  ${(props) =>
    props.variant === "image" &&
    css`
      height: 0;
      padding-top: 66.25%;
      position: relative;
      margin-bottom: 7rem;
    `}
  ${(props) =>
    props.variant === "description" &&
    css`
      background: #fff;
      box-shadow: 0 0.1rem 0.6rem -0.2rem rgba(0, 0, 0, 0.3);
      border-radius: 0.2rem;
      display: flex;
      padding: 4rem;
      @media screen and (max-width: 950px) {
        flex-direction: column;
      }
    `}
    ${(props) =>
    props.variant === "card" &&
    css`
      background: #fff;
      box-shadow: 0 0.1rem 0.6rem -0.2rem rgba(0, 0, 0, 0.3);
      border-radius: 0.2rem;
      overflow: hidden;
    `}
`;

const Title = styled.div`
  flex: 1 20%;
  padding-bottom: 1rem;
  h3 {
    font-size: calc(1.4rem + 0.2vw);
    font-weight: 700;
    color: #5da9ad;
  }
`;

const Text = styled.div`
  flex: 1 80%;
  p {
    font-size: calc(1.1rem + 0.2vw);
    color: #5b7083;
    line-height: 2;
    text-align: justify;
  }
`;

const Final = styled.p`
  width: 100%;
  color: #5b7083;
  font-size: calc(1rem + 0.2vw);
  margin-bottom: 1.5rem;
  text-align: justify;
  line-height: 1.7;
`;

const RouterLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
  color: inherit;
  :hover {
    color: #5da9ad;
  }
`;

const Right = styled.div`
  flex: 1;
  margin-left: 4rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
