import React, { useState, useEffect } from "react";
import styled from "styled-components";
import dintorni1 from "../../assets/images/dintorni1.jpg";
import dintorni2 from "../../assets/images/dintorni2.jpg";
import dintorni3 from "../../assets/images/dintorni3.jpg";
import dintorni4 from "../../assets/images/dintorni4.jpg";
import dintorni5 from "../../assets/images/dintorni5.jpg";
import dintorni6 from "../../assets/images/dintorni6.jpg";
import dintorni7 from "../../assets/images/dintorni7.jpg";
import dintorni8 from "../../assets/images/dintorni8.jpg";
import dintorni9 from "../../assets/images/dintorni9.jpg";
import dintorni10 from "../../assets/images/dintorni10.jpg";
import dintorni11 from "../../assets/images/dintorni11.jpg";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { dintorniDetails } from "../../data";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const DintorniSlider = () => {
  const [active, setActive] = useState(false);
  const [zoomed, setZoomed] = useState(0);
  const length = dintorniDetails.length - 1;
  const clickHandle = (index) => {
    setActive(true);
    setZoomed(index);
  };

  useEffect(() => {
    if (zoomed < 0) {
      setZoomed(0);
    } else if (zoomed > length) {
      setZoomed(length);
    }
  }, [zoomed, length]);

  useEffect(() => {
    const keyPress = (e) => {
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
      window.addEventListener("keydown", keyPress);
      disableBodyScroll(document, { reserveScrollBarGap: true });
    }
    return () => {
      window.removeEventListener("keydown", keyPress);
      clearAllBodyScrollLocks();
    };
  }, [active]);
  return (
    <Container>
      <Row>
        <Big>
          <img src={dintorni1} alt="Foto di un paesaggio salentino" />
          <div onClick={() => clickHandle(0)}>
            <span>Grotta della Poesia</span>
          </div>
        </Big>
        <Small>
          <div>
            <img src={dintorni2} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(1)}>
              <span>Lecce</span>
            </div>
          </div>
          <div>
            <img src={dintorni3} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(2)}>
              <span>Gallipoli</span>
            </div>
          </div>
        </Small>
        <Small>
          <div>
            <img src={dintorni4} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(3)}>
              <span>Castro</span>
            </div>
          </div>
          <div>
            <img src={dintorni5} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(4)}>
              <span>Lecce</span>
            </div>
          </div>
        </Small>
      </Row>
      <Row>
        <Small>
          <div>
            <img src={dintorni6} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(5)}>
              <span>San Foca</span>
            </div>
          </div>
          <div>
            <img src={dintorni7} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(6)}>
              <span>Otranto</span>
            </div>
          </div>
        </Small>
        <Big>
          <img src={dintorni8} alt="Foto di un paesaggio salentino" />
          <div onClick={() => clickHandle(7)}>
            <span>Otranto</span>
          </div>
        </Big>
        <Small>
          <div>
            <img src={dintorni9} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(8)}>
              <span>Castro</span>
            </div>
          </div>
          <div>
            <img src={dintorni10} alt="Foto di un paesaggio salentino" />
            <div onClick={() => clickHandle(9)}>
              <span>Cava di Bauxite</span>
            </div>
          </div>
        </Small>
      </Row>
      <Row>
        <Big>
          <img src={dintorni11} alt="Foto di un paesaggio salentino" />
          <div onClick={() => clickHandle(10)}>
            <span>Trulli di Alberobello</span>
          </div>
        </Big>
      </Row>
      {active && (
        <ZoomWrapper onClick={() => setActive(false)}>
          <IconContainer onClick={(e) => e.stopPropagation()} left>
            <LeftIcon onClick={() => setZoomed((zoomed) => zoomed - 1)} />
          </IconContainer>
          <IconContainer onClick={(e) => e.stopPropagation()}>
            <RightIcon onClick={() => setZoomed((zoomed) => zoomed + 1)} />
          </IconContainer>
          <CloseIcon onClick={() => setActive(false)} />
          {dintorniDetails
            .filter((item, index) => index === zoomed)
            .map((item, index) => (
              <div key={index}>
                <img
                  onClick={(e) => e.stopPropagation()}
                  src={item.src}
                  alt={item.alt}
                />
                <p>{item.alt}</p>
              </div>
            ))}
        </ZoomWrapper>
      )}
      <p>*Clicca sulle foto per vederle a schermo intero.</p>
    </Container>
  );
};

export default DintorniSlider;

const Container = styled.div`
  width: 100%;
  padding-bottom: 7rem;
  > p {
    font-size: calc(1rem + 0.2vw);
    color: #5b7083;
    margin-top: 1.5rem;
    font-weight: 300;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  margin: ${(props) => props.bottom && ".5rem"};
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: transform 0.6s;
  }
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;
const Big = styled.div`
  flex: 1 50%;
  margin: 0.5rem;
  overflow: hidden;
  position: relative;
  &:hover {
    > div {
      opacity: 1;
    }
    img {
      transform: scale(1.15);
    }
  }
  > div {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 30%);
    transition: opacity 0.6s;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: calc(2rem + 1vw);
      font-family: "Allura", cursive;
    }
  }
`;
const Small = styled.div`
  flex: 1 25%;
  display: flex;
  flex-direction: column;
  div {
    flex: 1 1 50%;
    overflow: hidden;
    position: relative;
    margin: 0.5rem;
    &:hover {
      > div {
        opacity: 1;
      }
      img {
        transform: scale(1.15);
      }
    }
    > div {
      opacity: 0;
      position: absolute;
      cursor: pointer;
      top: -0.5rem;
      left: -0.5rem;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 30%);
      transition: opacity 0.6s;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: calc(1.4rem + 1vw);
        font-family: "Allura", cursive;
      }
    }
  }
`;
const ZoomWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 80%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: zoom-out;
  img {
    max-height: 85vh;
    display: block;
    max-width: 85vw;
    box-shadow: 0rem 0rem 1.4rem 0rem rgba(0, 0, 0, 55%);
    cursor: default;
  }
  p {
    position: fixed;
    bottom: 4%;
    left: 50%;
    transform: translateX(-50%);
    color: #d8d8d8;
    font-size: calc(2rem + 0.5vw);
    font-weight: 300;
    font-family: "Allura", cursive;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  left: ${(props) => props.left && "1%"};
  right: ${(props) => !props.left && "1%"};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftIcon = styled(GoChevronLeft)`
  color: #d8d8d8;
  font-size: calc(3.5rem + 1.5vw);
  height: 100%;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
const RightIcon = styled(GoChevronRight)`
  color: #d8d8d8;
  font-size: calc(3.5rem + 1.5vw);
  height: 100%;
  cursor: pointer;
  :hover {
    color: #fff;
  }
`;
const CloseIcon = styled(IoClose)`
  color: #d8d8d8;
  cursor: pointer;
  position: absolute;
  right: 1%;
  top: 2%;
  font-size: calc(3rem + 0.5vw);
  :hover {
    color: #fff;
  }
`;
