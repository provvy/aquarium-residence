import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useWindowDimensions } from "../../hooks";
import useMeasure from "react-use-measure";
import { IoClose } from "react-icons/io5";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const ZoomSlider = ({ variant, images }) => {
  const [margin, setMargin] = useState(0);
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const { width: windowWidth } = useWindowDimensions();
  const [ref, bounds] = useMeasure();
  const length = images.length - 1;

  const activateZoom = (index) => {
    setZoomed(true);
    setActive(index);
  };

  const toggleMargin = (operation) => {
    if (operation === "add") {
      setMargin((margin) =>
        window.innerWidth >= 576 ? margin + 50 : margin + 25
      );
    } else {
      setMargin((margin) =>
        window.innerWidth >= 576 ? margin - 50 : margin - 25
      );
    }
  };

  useEffect(() => {
    const keyPress = (e) => {
      switch (e.keyCode) {
        case 37:
          setActive((active) => active - 1);
          break;
        case 39:
          setActive((active) => active + 1);
          break;
        case 27:
          setZoomed(false);
          break;
        default:
          break;
      }
    };
    if (zoomed) {
      window.addEventListener("keydown", keyPress);
      disableBodyScroll(document, { reserveScrollBarGap: true });
    }
    return () => {
      window.removeEventListener("keydown", keyPress);
      clearAllBodyScrollLocks();
    };
  }, [zoomed]);

  useEffect(() => {
    if (active < 0) {
      setActive(0);
    } else if (active > length) {
      setActive(length);
    }
  }, [active, length]);

  useEffect(() => {
    if (margin) {
      if (margin < 0) {
        setMargin(0);
      } else if (margin > bounds.width / 10 - (windowWidth / 100) * 9) {
        setMargin(bounds.width / 10 - (windowWidth / 100) * 9);
      }
    }
  }, [margin, windowWidth, bounds.width]);

  return (
    <Wrapper>
      <Container ref={ref} margin={margin}>
        {images.map((item, index) => (
          <ImageContainer onClick={() => activateZoom(index)} key={index}>
            <img src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
      </Container>
      <IconContainer onClick={() => toggleMargin("sub")} left>
        <LeftIcon />
      </IconContainer>
      <IconContainer onClick={() => toggleMargin("add")}>
        <RightIcon />
      </IconContainer>
      {zoomed && (
        <Zoom onClick={() => setZoomed(false)}>
          <IconContainer
            onClick={(e) => e.stopPropagation()}
            variant={variant}
            left
            zoom
          >
            <LeftIcon
              zoom={+true}
              onClick={() => setActive((active) => active - 1)}
            />
          </IconContainer>
          <IconContainer
            onClick={(e) => e.stopPropagation()}
            variant={variant}
            zoom
          >
            <RightIcon
              zoom={+true}
              onClick={() => setActive((active) => active + 1)}
            />
          </IconContainer>
          <CloseIcon onClick={() => setZoomed(false)} />
          <Div onClick={(e) => e.stopPropagation()}>
            {images
              .filter((item, index) => index === active)
              .map((item, index) => (
                <Image key={index} src={item.src} alt={item.alt} />
              ))}
          </Div>
        </Zoom>
      )}
    </Wrapper>
  );
};

export default ZoomSlider;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const IconContainer = styled.div`
  height: 100%;
  cursor: pointer;
  background: #f7f7f7;
  background: ${(props) =>
    props.zoom
      ? "transparent"
      : props.left
      ? "linear-gradient(90deg, rgba(247,247,247,1) 10%, rgba(247,247,247,0) 100%)"
      : "linear-gradient(90deg, rgba(247,247,247,0) 0%, rgba(247,247,247,1) 90%)"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: ${(props) => !props.zoom && "0 2rem"};
  left: ${(props) => (!props.zoom ? props.left && 0 : props.left && "1%")};
  right: ${(props) => (!props.zoom ? !props.left && 0 : !props.left && "1%")};
`;
const LeftIcon = styled(GoChevronLeft)`
  color: ${(props) => (props.zoom ? "#d8d8d8" : "#738A9C")};
  font-size: calc(1.5rem + 1vw);
  height: 100%;
  :hover {
    color: ${(props) => (props.zoom ? "#fff" : "#5b7083")};
  }
`;
const RightIcon = styled(GoChevronRight)`
  color: ${(props) => (props.zoom ? "#d8d8d8" : "#738A9C")};
  font-size: calc(1.5rem + 1vw);
  height: 100%;
  :hover {
    color: ${(props) => (props.zoom ? "#fff" : "#5b7083")};
  }
`;
const Container = styled.div`
  height: 100%;
  width: max-content;
  margin-left: -${(props) => props.margin}rem;
  transition: margin 0.8s;
`;
const ImageContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  height: 100%;
  position: relative;
  margin-right: 1.5rem;
  ::after {
    position: absolute;
    transition: opacity 0.3s;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    right: 0;
    opacity: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  img {
    height: 100%;
    object-fit: cover;
    float: right;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
`;
const Zoom = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999 !important;
  cursor: zoom-out;
`;
const Div = styled.div`
  position: relative;
  cursor: default;
`;
const CloseIcon = styled(IoClose)`
  color: #d8d8d8;
  cursor: pointer;
  position: absolute;
  right: 1%;
  top: 2%;
  font-size: calc(2.5rem + 1vw);
  :hover {
    color: #fff;
  }
`;
const Image = styled.img`
  max-height: 85vh;
  display: block;
  max-width: 85vw;
  box-shadow: 0rem 0rem 1.4rem 0rem rgba(0, 0, 0, 55%);
`;
