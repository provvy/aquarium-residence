import React from "react";
import styled from "styled-components";

const CoverPhoto = ({ variant, image, children }) => {
  return (
    <CoverWrapper>
      <CoverContainer>
        <ImageContainer variant={variant}>
          <img src={image.src} alt={image.alt} />
          {children}
        </ImageContainer>
      </CoverContainer>
    </CoverWrapper>
  );
};

export default CoverPhoto;
const CoverWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 8rem;
  @media screen and (max-width: 400px) {
    margin-top: 6rem;
  }
`;

const CoverContainer = styled.div`
  width: 100%;
  max-width: 100%;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 192rem;
  height: ${(props) => (props.variant ? "auto" : "calc(100vh - 16rem)")};
  max-height: 108rem;
  position: relative;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  @media screen and (max-width: 576px) {
    height: ${(props) => props.variant && "calc(100vh - 16rem)"};
    max-height: ${(props) => props.variant && "60rem"};
  }
  @media screen and (max-width: 400px) {
    height: calc(100vh - 12rem);
    max-height: ${(props) => props.variant && "60rem"};
  }
`;
