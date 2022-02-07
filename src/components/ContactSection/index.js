import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { BsChevronDoubleDown } from "react-icons/bs";
import Form from "../Form";

const ContactSection = ({ title, scrollRef }) => {
  const [scrolled, setScrolled] = useState(+false);

  const scrollDetection = () => {
    if (window.scrollY > 0) {
      setScrolled(+true);
    } else {
      setScrolled(+false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollDetection);
    return () => window.removeEventListener("scroll", scrollDetection);
  }, []);

  return (
    <SectionWrapper>
      <TitleContainer ref={scrollRef}>
        <H2 scrolled={scrolled}>
          <span>{title}</span>
          <DownIcon
            onClick={() => scrollRef.current.scrollIntoView()}
            scrolled={scrolled}
          />
        </H2>
      </TitleContainer>
      <Form />
    </SectionWrapper>
  );
};

export default ContactSection;

const SectionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  position: relative;
  padding-bottom: 9rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 8rem;
  box-shadow: 0rem 0.3rem 0.8rem -0.2rem rgba(0, 0, 0, 30%);
  margin-bottom: 0.8rem;
  @media screen and (max-width: 400px) {
    height: 6rem;
  }
`;

const H2 = styled.h2`
  font-size: calc(2.5em + 0.8vw);
  color: #5b7083;
  font-family: "Antonio", sans-serif;
  width: 90rem;
  max-width: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-top: -0.5rem;
    transition: all 0.25s ease-out;
    position: absolute;
    opacity: ${(props) => (props.scrolled ? 1 : 0)};
    top: 50%;
    left: ${(props) => (props.scrolled ? 0 : "50%")};
    transform: ${(props) =>
      props.scrolled ? "translate(0, -50%)" : "translate(-110%, -50%)"};
    pointer-events: none;
    display: flex;
    margin-left: 2rem;
  }
`;

const animateIcon = keyframes`
  from {
    transform: scale(1)
  } to {
    transform: scale(1.25)
  }
`;

const DownIcon = styled(BsChevronDoubleDown)`
  font-size: calc(3.5rem + 1vw);
  animation: ${animateIcon} 0.5s alternate infinite;
  color: #5b7083;
  transition: opacity 0.25s ease-in-out, transform 0.25s;
  opacity: ${(props) => (props.scrolled ? 0 : 1)};
  cursor: pointer;
  pointer-events: ${(props) => props.scrolled && "none"};
`;
