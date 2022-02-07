import React from "react";
import styled from "styled-components";

const DehorsSlider = ({ image, active, index }) => {
  return (
    <Image active={active} index={index} src={image.src} alt={image.alt} />
  );
};

export default DehorsSlider;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  opacity: ${({ active, index }) => (index === active ? 1 : 0)};
  transition: opacity 0.6s ease;
  position: absolute;
  top: 0;
`;
