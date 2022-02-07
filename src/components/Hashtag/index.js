import React from "react";
import styled from "styled-components";
import presentation1 from "../../assets/images/presentation1.jpg";
import presentation2 from "../../assets/images/presentation2.jpg";
import presentation3 from "../../assets/images/presentation3.jpg";
import presentation1257 from "../../assets/images/presentation1257.jpg";
import presentation2257 from "../../assets/images/presentation2257.jpg";
import presentation3257 from "../../assets/images/presentation3257.jpg";

const Hashtag = () => {
  return (
    <Container>
      <Image>
        <img
          src={window.innerWidth <= 576 ? presentation1257 : presentation1}
          alt="Foto del locale"
        />
        <span>#my</span>
      </Image>
      <Image>
        <img
          src={window.innerWidth <= 576 ? presentation2257 : presentation2}
          alt="Foto del locale"
        />
        <span>#happy</span>
      </Image>
      <Image>
        <img
          src={window.innerWidth <= 576 ? presentation3257 : presentation3}
          alt="Foto del locale"
        />
        <span>#place</span>
      </Image>
    </Container>
  );
};

export default Hashtag;

const Container = styled.div`
  width: 130rem;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  justify-content: center;
`;
const Image = styled.div`
  flex: 0.33 22rem;
  padding: 2rem;
  margin: 4rem 2.5rem;
  position: relative;
  z-index: 2;
  box-shadow: 0rem 0rem 0.6rem -0.2rem rgba(0, 0, 0, 40%);
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  span {
    position: absolute;
    bottom: 4rem;
    right: 20%;
    color: #fff;
    font-size: calc(2rem + 0.7vw);
    font-family: "Rubik Mono One", sans-serif;
  }
  @media screen and (max-width: 916px) {
    margin: 2rem 2.5rem;
  }
`;
