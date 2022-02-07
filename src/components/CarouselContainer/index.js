import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import particolare1 from "../../assets/images/particolare1.jpg";
import particolare2 from "../../assets/images/particolare2.jpg";
import particolare3 from "../../assets/images/particolare3.jpg";
import particolare4 from "../../assets/images/particolare4.jpg";
import particolare5 from "../../assets/images/particolare5.jpg";
import particolare1zoom from "../../assets/images/particolare1zoom.jpg";
import particolare2zoom from "../../assets/images/particolare2zoom.jpg";
import particolare3zoom from "../../assets/images/particolare3zoom.jpg";
import particolare4zoom from "../../assets/images/particolare4zoom.jpg";
import particolare5zoom from "../../assets/images/particolare5zoom.jpg";
import particolare1518zoom from "../../assets/images/particolare1518zoom.jpg";
import particolare2518zoom from "../../assets/images/particolare2518zoom.jpg";
import particolare3518zoom from "../../assets/images/particolare3518zoom.jpg";
import particolare4518zoom from "../../assets/images/particolare4518zoom.jpg";
import particolare5518zoom from "../../assets/images/particolare5518zoom.jpg";
import particolare1418 from "../../assets/images/particolare1418.jpg";
import particolare2418 from "../../assets/images/particolare2418.jpg";
import particolare3418 from "../../assets/images/particolare3418.jpg";
import particolare4418 from "../../assets/images/particolare4418.jpg";
import particolare5418 from "../../assets/images/particolare5418.jpg";

const CarouselContainer = () => {
  const [active, setActive] = useState(false);
  const [zoomed, setZoomed] = useState(0);
  const images = [
    {
      src: window.innerWidth <= 576 ? particolare1418 : particolare1,
      zoomsrc:
        window.innerWidth <= 576 ? particolare1518zoom : particolare1zoom,
      alt: "Foto interni stanza",
    },
    {
      src: window.innerWidth <= 576 ? particolare3418 : particolare3,
      zoomsrc:
        window.innerWidth <= 576 ? particolare3518zoom : particolare3zoom,
      alt: "Foto interno sala",
    },
    {
      src: window.innerWidth <= 576 ? particolare4418 : particolare4,
      zoomsrc:
        window.innerWidth <= 576 ? particolare4518zoom : particolare4zoom,
      alt: "Foto colazione",
    },
    {
      src: window.innerWidth <= 576 ? particolare2418 : particolare2,
      zoomsrc:
        window.innerWidth <= 576 ? particolare2518zoom : particolare2zoom,
      alt: "Foto terrazza",
    },
    {
      src: window.innerWidth <= 576 ? particolare5418 : particolare5,
      zoomsrc:
        window.innerWidth <= 576 ? particolare5518zoom : particolare5zoom,
      alt: "Foto letto",
    },
  ];
  const length = images.length - 1;

  const toggleZoom = (index) => {
    setActive(true);
    setZoomed(index);
  };

  useEffect(() => {
    if (zoomed > length) {
      setZoomed(0);
    } else if (zoomed < 0) {
      setZoomed(length);
    }
  }, [zoomed, length]);

  useEffect(() => {
    const keyPressSlide = (e) => {
      switch (e.keyCode) {
        case 37:
          setZoomed((zoomed) => zoomed - 1);
          break;
        case 39:
          setZoomed((zoomed) => zoomed + 1);
          break;
        case 27:
          setActive(false);
          break;
        default:
          break;
      }
    };
    if (active) {
      disableBodyScroll(document, { reserveScrollBarGap: true });
      window.addEventListener("keydown", keyPressSlide);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", keyPressSlide);
    };
  }, [active]);

  return (
    <>
      <Container>
        {images.map((item, index) => (
          <Carousel
            onClick={() => toggleZoom(index)}
            key={item.alt}
            item={item}
          />
        ))}
      </Container>
      {active && (
        <ZoomWrapper onClick={() => setActive(false)}>
          <IconContainer
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((zoomed) => zoomed - 1);
            }}
            left
          >
            <LeftIcon />
          </IconContainer>
          <IconContainer
            onClick={(e) => {
              e.stopPropagation();
              setZoomed((zoomed) => zoomed + 1);
            }}
          >
            <RightIcon />
          </IconContainer>
          <CloseIcon onClick={() => setActive(false)} />
          {images
            .filter((item, index) => index === zoomed)
            .map((item, index) => (
              <Image
                onClick={(e) => e.stopPropagation()}
                key={index}
                src={item.zoomsrc}
                alt={item.alt}
              />
            ))}
        </ZoomWrapper>
      )}
    </>
  );
};

export default CarouselContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  margin: 3rem auto 0;
  flex-wrap: wrap;
`;

const ZoomWrapper = styled.div`
  cursor: zoom-out;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background: rgba(0, 0, 0, 75%);
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0rem 0rem 1.4rem 0rem rgba(0, 0, 0, 55%);
  cursor: default;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 5%;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => !props.left && 0};
  left: ${(props) => props.left && 0};
  cursor: pointer;
`;

const LeftIcon = styled(BsChevronLeft)`
  width: 100%;
  height: 5rem;
  color: #d8d8d8;
  :hover {
    color: #fff;
  }
`;

const RightIcon = styled(BsChevronRight)`
  width: 100%;
  height: 5rem;
  color: #d8d8d8;
  :hover {
    color: #fff;
  }
`;

const CloseIcon = styled(VscClose)`
  color: #d8d8d8;
  position: fixed;
  cursor: pointer;
  top: 2%;
  right: 2%;
  font-size: calc(2.5rem + 0.5vw);
  :hover {
    color: #fff;
  }
`;
