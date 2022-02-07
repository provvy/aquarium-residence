import React, { useEffect, useState, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
import terrazza from "../../assets/images/terrazza.jpg";
import interno from "../../assets/images/interno.jpg";
import cameraslide from "../../assets/images/cameraslide.jpg";
import ImageComponent from "../ImageComponent";
import spiaggia from "../../assets/images/spiaggia.jpg";
import { RefContext } from "../../screens/HomeScreen";
import terrazza1023 from "../../assets/images/terrazza1023.jpg";
import terrazza576 from "../../assets/images/terrazza576.jpg";
import interno1023 from "../../assets/images/interno1023.jpg";
import interno576 from "../../assets/images/interno576.jpg";
import cameraslide1023 from "../../assets/images/cameraslide1023.jpg";
import cameraslide576 from "../../assets/images/cameraslide576.jpg";
import spiaggia1023 from "../../assets/images/spiaggia1023.jpg";
import spiaggia576 from "../../assets/images/spiaggia576.jpg";

const Slider = () => {
  const [active, setActive] = useState(0);
  const [zIndex, setZIndex] = useState(999999);
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setZIndex(1);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  const images = [
    {
      src:
        window.innerWidth <= 576
          ? terrazza576
          : window.innerWidth <= 1024
          ? terrazza1023
          : terrazza,
      alt: "Immagine della terrazza esterna",
    },
    {
      src:
        window.innerWidth <= 576
          ? interno576
          : window.innerWidth <= 1024
          ? interno1023
          : interno,
      alt: "Immagine degli interni del locale",
    },
    {
      src:
        window.innerWidth <= 576
          ? cameraslide576
          : window.innerWidth <= 1024
          ? cameraslide1023
          : cameraslide,
      alt: "Immagine di una camera",
    },
    {
      src:
        window.innerWidth <= 576
          ? spiaggia576
          : window.innerWidth <= 1024
          ? spiaggia1023
          : spiaggia,
      alt: "Immagine di una spiaggia",
    },
  ];
  const length = images.length - 1;

  useEffect(() => {
    const keyPressSlide = (e) => {
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
    window.addEventListener("keydown", keyPressSlide);
    return () => window.removeEventListener("keydown", keyPressSlide);
  }, [disabled]);

  useEffect(() => {
    setDisabled(true);
    const timeOut = setTimeout(() => {
      setDisabled(false);
    }, 1000);
    const interval = setInterval(() => {
      setActive((active) => active + 1);
    }, 5000);
    if (active > length) {
      setActive(0);
    } else if (active < 0) {
      setActive(length);
    }
    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, [active, length]);

  const ref = useContext(RefContext);

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

  return (
    <SliderWrapper>
      <SliderContainer>
        {images.map((item, index) => (
          <ImageComponent
            index={index}
            active={active}
            key={index}
            item={item}
          />
        ))}
        <TextContainer zIndex={zIndex}>
          <div>
            <h1>Aquarium</h1>
            <h2>RESIDENCE</h2>
          </div>
        </TextContainer>
        <AnimationContainer />
        <IconContainer onClick={clickHandle} left>
          <LeftIcon />
        </IconContainer>
        <IconContainer onClick={(e) => clickHandle(e, "add")} right>
          <RightIcon />
        </IconContainer>
        <DownIconContainer
          onClick={() => ref.targetRef.current.scrollIntoView()}
        >
          <DownIcon />
        </DownIconContainer>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;

const SliderWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SliderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  height: calc(100vh - 8.1rem);
  position: relative;
  max-height: 108rem;
  max-width: 192rem;
  @media screen and (max-width: 576px) {
    height: calc(100vh - 7.4rem);
  }
`;

const animateDiv = keyframes`
  from {
    top: 0;
    bottom: 0;
    height: 100vh;
  } to {
    top: 45%;
    bottom: 55%;
    height: 0;
    display: none;
  }
`;

const AnimationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #5da9ad;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  animation: ${animateDiv} 1.1s ease 3s forwards;
`;

const animateText = keyframes`
    0% {
      transform: translateY(100%) scale(1);
      color: #fff;
    } 50% {
      transform: translateY(0) scale(1);
      color: #fff;
    } 70% {
      transform: translateY(0) scale(.65);
      color: #fff;
    }
    100% {
      transform: translateY(0) scale(.65);
    }
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: "Allura", cursive;
  overflow: hidden;
  z-index: ${(props) => props.zIndex};
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${animateText} 6s ease forwards;
    font-size: calc(3rem + 3vw);
  }
  h1 {
    font-weight: 200;
  }
  h2 {
    font-weight: 300;
    font-size: calc(1.6rem + 0.6vw);
    font-family: "Raleway", sans-serif;
    letter-spacing: 0.5rem;
    position: relative;
    top: -5.5rem;
    @media screen and (min-width: 1251px) and (max-width: 1500px) {
      top: -5rem;
    }
    @media screen and (min-width: 951px) and (max-width: 1250px) {
      top: -4rem;
    }
    @media screen and (min-width: 500px) and (max-width: 950px) {
      top: -3rem;
    }
    @media screen and (max-width: 499px) {
      top: -2rem;
    }
  }
`;

const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: calc(2.5rem + 2.5%);
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.left && 0};
  right: ${(props) => props.right && 0};
  :hover {
    background: rgba(0, 0, 0, 40%);
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const LeftIcon = styled(BsChevronLeft)`
  color: #fff;
  width: 70%;
  height: 100%;
  path {
    filter: drop-shadow(0.5px 1px 0.8px rgba(0, 0, 0, 50%));
  }
`;

const RightIcon = styled(BsChevronRight)`
  color: #fff;
  width: 70%;
  height: 100%;
  path {
    filter: drop-shadow(0.5px 1px 0.8px rgba(0, 0, 0, 50%));
  }
`;

const DownIconContainer = styled.div`
  cursor: pointer;
  display: flex;
  width: calc(2rem + 4%);
  height: calc(2rem + 4%);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: calc(100% - 10%);
  left: 50%;
  transform: translateX(-50%) scale(1);
  transition: all 0.3s;
  :hover {
    transform: translateX(-50%) scale(1.2);
  }
`;

const DownIcon = styled(BsChevronCompactDown)`
  color: #fff;
  width: 100%;
  height: 100%;
  path {
    filter: drop-shadow(0px 1px 0.8px rgba(0, 0, 0, 50%));
  }
`;
