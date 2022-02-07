import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const RoomSlider = ({ images, variant }) => {
  const [active, setActive] = useState(0);
  const length = images.length - 1;

  useEffect(() => {
    if (active < 0) {
      setActive(length);
    } else if (active > length) {
      setActive(0);
    }
    const interval = setInterval(() => {
      setActive((active) => active + 1);
    }, 3500);
    return () => {
      clearInterval(interval);
    };
  }, [active, length]);

  useEffect(() => {
    return () => setActive(0);
  }, []);

  return (
    <Wrapper>
      <Up>
        {images.map((item, index) => (
          <ImageContainer active={active} index={index} key={index}>
            <img src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
        <IconContainer onClick={() => setActive((active) => active - 1)} left>
          <LeftIcon />
        </IconContainer>
        <IconContainer onClick={() => setActive((active) => active + 1)}>
          <RightIcon />
        </IconContainer>
      </Up>
      <Down variant={variant || false}>
        {images.map((item, index) => (
          <CircleContainer
            variant={variant || false}
            onClick={() => setActive(index)}
            key={index}
          >
            <Circle active={active} index={index} />
          </CircleContainer>
        ))}
      </Down>
    </Wrapper>
  );
};

export default RoomSlider;

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const Up = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.left && 0};
  right: ${(props) => !props.left && 0};
  width: 8%;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const LeftIcon = styled(BsChevronLeft)`
  width: 70%;
  color: #eaeaea;
  height: auto;
  transition: color 0.2s;
  :hover {
    color: #fff;
  }
`;

const RightIcon = styled(BsChevronRight)`
  width: 70%;
  color: #fff;
  height: auto;
  color: #eaeaea;
  transition: color 0.2s;
  :hover {
    color: #fff;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: ${(props) => (props.active === props.index ? 1 : 0)};
  transition: opacity 0.3s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Down = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: ${(props) =>
    props.variant ? "flex-start" : "space-between"};
  overflow: hidden;
`;

const CircleContainer = styled.div`
  height: 100%;
  flex: 1 1 3rem;
  flex-grow: ${(props) => props.variant && 0};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    div {
      background: #5da9ad;
    }
  }
`;

const Circle = styled.div`
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 50%;
  transition: background 0.3s;
  background: ${(props) =>
    props.active === props.index ? "#5da9ad" : "#d8d8d8"};
  @media screen and (max-width: 576px) {
    height: 1rem;
    width: 1rem;
  }
`;
