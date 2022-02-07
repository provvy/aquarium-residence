import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";
import Quote from "../Quote";
import spiaggia from "../../assets/images/spiaggia.jpg";
import spiaggia475 from "../../assets/images/spiaggia475.jpg";
import dehors16 from "../../assets/images/dehors16.jpg";
import dehors16695 from "../../assets/images/dehors16695.jpg";
import dehors16503 from "../../assets/images/dehors16503.jpg";
import particolare4 from "../../assets/images/particolare4.jpg";
import particolare4385 from "../../assets/images/particolare4385.jpg";
import { dehorsDetails } from "../../data";
import DehorsSlider from "../DehorsSlider";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const DehorsSection = ({ title, scrollRef }) => {
  const [scrolled, setScrolled] = useState(+false);
  const [active, setActive] = useState(0);
  const length = dehorsDetails.length - 1;
  const [disabled, setDisabled] = useState(false);

  const clickHandle = (e, operator) => {
    if (disabled) {
      e.preventDefault();
    } else {
      switch (operator) {
        case "add":
          setActive((active) => active + 1);
          break;
        default:
          setActive((active) => active - 1);
          break;
      }
    }
  };

  useEffect(() => {
    const scrollDetection = () => {
      if (window.scrollY > 0) {
        setScrolled(+true);
      } else {
        setScrolled(+false);
      }
    };
    const keyDownHandler = (e) => {
      if (disabled) {
        e.preventDefault();
      } else {
        switch (e.keyCode) {
          case 37:
            setActive((active) => active - 1);
            break;
          case 39:
            setActive((active) => active + 1);
            break;
          default:
            break;
        }
      }
    };
    window.addEventListener("scroll", scrollDetection);
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("scroll", scrollDetection);
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [disabled]);

  useEffect(() => {
    setDisabled(true);
    const timeOut = setTimeout(() => {
      setDisabled(false);
    }, 1000);
    const interval = setInterval(() => {
      setActive((active) => active + 1);
    }, 5000);
    if (active < 0) {
      setActive(length);
    } else if (active > length) {
      setActive(0);
    }
    return () => {
      clearTimeout(timeOut);
      clearInterval(interval);
    };
  }, [active, length]);

  return (
    <SectionWrapper>
      <BackgroundGradient>
        <img
          src={window.innerWidth > 576 ? spiaggia : spiaggia475}
          alt="Foto del mare usata come sfondo"
        />
        <GradientDiv top />
        <GradientDiv />
      </BackgroundGradient>
      <TitleContainer ref={scrollRef}>
        <H2 scrolled={scrolled}>
          <span>{title}</span>
          <DownIcon
            onClick={() => scrollRef.current.scrollIntoView()}
            scrolled={scrolled}
          />
        </H2>
      </TitleContainer>
      <Container>
        <Div>
          <Text>
            <p>
              Sorseggiare un drink e fare colazione a pochi passi dal mare
              cristallino sono esperienze uniche, che tutti dovrebbero fare
              almeno una volta nella vita. I nostri salottini sono qui per
              questo, pronti ad accogliere chiunque voglia godere della
              fantastica esperienza di ammirare un tramonto in riva al mare o
              cerchi ristoro dall'asfissiante calura estiva. Tutto quello che
              devi fare è lasciare lo stress a casa e venire qui da noi, a farti
              accarezzare dalla brezza marina, all'ombra dei nostri dehors.
            </p>
          </Text>
        </Div>
        <Div>
          <Image left>
            <img
              src={window.innerWidth > 576 ? dehors16695 : dehors16503}
              alt="Foto di una colazione consumata sui nostri dehors"
            />
          </Image>
          <Image>
            <img
              src={window.innerWidth > 576 ? particolare4385 : particolare4}
              alt="Foto di un tramonto in spiaggia, visto dai nostri dehors"
            />
          </Image>
        </Div>
      </Container>
      <Quote />
      <SliderWrapper>
        <LeftIcon onClick={(e) => clickHandle(e)} />
        <RightIcon onClick={(e) => clickHandle(e, "add")} />
        <Invisible>
          <img src={dehors16} alt="Immagine posticcia per layout" />
        </Invisible>
        {dehorsDetails.map((item, index) => (
          <DehorsSlider
            key={index}
            index={index}
            active={active}
            image={item}
          />
        ))}
      </SliderWrapper>
    </SectionWrapper>
  );
};

export default DehorsSection;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding-bottom: 9rem;
  @media screen and (max-width: 576px) {
    padding-bottom: 5rem;
  }
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

const BackgroundGradient = styled.div`
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(247, 247, 247, 1) 0%,
    rgba(191, 255, 251, 0.9108018207282913) 25%,
    rgba(93, 169, 173, 1) 100%
  );
  img {
    mask-image: linear-gradient(
        90deg,
        transparent 0%,
        black 50%,
        transparent 100%
      ),
      linear-gradient(270deg, transparent 0%, black 50%, transparent 100%);
    width: 85%;
    max-width: 192rem;
  }
`;

const GradientDiv = styled.div`
  position: absolute;
  top: ${(props) => props.top && 0};
  bottom: ${(props) => !props.top && 0};
  width: 100%;
  height: 50%;
  background: ${(props) =>
    props.top
      ? "linear-gradient(0deg, transparent, #f7f7f7 90%)"
      : "linear-gradient(0deg, #5da9ad, transparent)"};
`;

const Container = styled.div`
  width: 110rem;
  max-width: 90%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
  z-index: 2;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
const Text = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  color: #5b7083;
  p {
    font-size: calc(1.3rem + 0.35vw);
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    line-height: 2;
    text-align: justify;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 2rem;
  }
`;
const Image = styled.div`
  margin-left: ${(props) => (props.left ? 0 : "1rem")};
  margin-right: ${(props) => (props.left ? "1rem" : 0)};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
  @media screen and (max-width: 576px) {
    margin: 1.5rem 0;
  }
`;

const SliderWrapper = styled.div`
  width: 110rem;
  max-width: 90%;
  margin: 6rem auto 0;
  z-index: 2;
  position: relative;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 50%);
  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

const Invisible = styled.div`
  width: 100%;
  visibility: hidden;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const LeftIcon = styled(AiFillCaretLeft)`
  position: absolute;
  height: 100%;
  top: 50%;
  left: -5%;
  font-size: calc(3rem + 1.5vw);
  color: #5b7083;
  transform: translateY(-50%);
  cursor: pointer;
  transition: color 0.2s, opacity 0.4s;
  opacity: 0;
  :hover {
    color: #364859;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightIcon = styled(AiFillCaretRight)`
  position: absolute;
  height: 100%;
  top: 50%;
  right: -5%;
  font-size: calc(3rem + 1.5vw);
  color: #5b7083;
  transform: translateY(-50%);
  cursor: pointer;
  transition: color 0.2s, opacity 0.4s;
  opacity: 0;
  :hover {
    color: #364859;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
