import React from "react";
import styled, { css } from "styled-components";

const ImageComponent = ({ item, index, active }) => {
  return (
    <ImageContainer index={index} active={active}>
      <img src={item.src} alt={item.alt} />
    </ImageContainer>
  );
};

export default ImageComponent;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.4s;
  ${(props) =>
    props.index === props.active &&
    css`
      opacity: 1;
      transform: scale(1.08);
    `}
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
