import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { BiChevronDown } from "react-icons/bi";

const CoverSlider = ({ images, scrollRef }) => {
  const [active, setActive] = useState(0);
  const length = images.length - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active) => active + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active > length) {
      setActive(0);
    } else if (active < 0) {
      setActive(length);
    }
  }, [active, length]);

  return (
    <Wrapper>
      <Container>
        {images.map((item, index) => (
          <ImageContainer index={index} active={active} key={index}>
            <img src={item.src} alt={item.alt} />
          </ImageContainer>
        ))}
        <TextContainer>
          <div>
            <h1>Ristorante</h1>
          </div>
        </TextContainer>
        <IconContainer onClick={() => scrollRef.current.scrollIntoView()}>
          <DownIcon />
        </IconContainer>
      </Container>
    </Wrapper>
  );
};

export default CoverSlider;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 108rem;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 2s;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.active === props.index &&
    css`
      opacity: 1;
    `}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    max-width: 192rem;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scale(1);
  width: 6rem;
  height: 3rem;
  background: #f7f7f7;
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  transition: transform 0.5s;
  :hover {
    transform: translateX(-50%) scale(1.3) translateY(-10%);
  }
`;

const DownIcon = styled(BiChevronDown)`
  height: 120%;
  margin-top: -0.15rem;
  width: 85%;
  color: #000;
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
  top: 48%;
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
