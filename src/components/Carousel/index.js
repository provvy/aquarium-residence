import React from "react";
import styled from "styled-components";

const Carousel = (props) => {
  const { item, onClick } = props;
  return (
    <CarouselBox onClick={onClick}>
      <img alt={item.alt} src={item.src} />
    </CarouselBox>
  );
};

export default Carousel;

const CarouselBox = styled.div`
  flex: 1;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
    left: 0;
    top: 0;
    transition: opacity 0.5s;
  }
  :hover {
    ::after {
      opacity: 0.3;
    }
    img {
      transform: scale(1.2);
    }
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.5s;
  }
  @media screen and (max-width: 991.98px) {
    flex: 1 25rem;
  }
  @media screen and (max-width: 767px) {
    flex: 1 20rem;
  }
  @media screen and (max-width: 576px) {
    flex: 1 16rem;
  }
  @media screen and (max-width: 499px) {
    flex: 1 14rem;
  }
`;
