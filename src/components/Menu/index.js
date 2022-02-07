import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const Menu = ({ blockScrollRef, onClick }) => {
  return (
    <Wrapper ref={blockScrollRef}>
      <Header>
        <h1>AQUARIUM</h1>

        <CloseIcon onClick={onClick} />
      </Header>
      <Container>
        <Ul>
          <h2>Primi</h2>
          <Li>
            <p>Nome primo piatto</p>
            <span>9,5</span>
          </Li>
          <Li>
            <p>Nome primo piatto</p>
            <span>9,5</span>
          </Li>
          <Li>
            <p>Nome primo piatto</p>
            <span>9,5</span>
          </Li>
          <Li>
            <p>Nome primo piatto</p>
            <span>9,5</span>
          </Li>
          <Li>
            <p>Nome primo piatto</p>
            <span>9,5</span>
          </Li>
        </Ul>
        <Ul>
          <h2>Secondi</h2>
          <Li>
            <p>Nome secondo piatto</p>
            <span>12,5</span>
          </Li>
          <Li>
            <p>Nome secondo piatto</p>
            <span>12,5</span>
          </Li>
          <Li>
            <p>Nome secondo piatto</p>
            <span>12,5</span>
          </Li>
          <Li>
            <p>Nome secondo piatto</p>
            <span>12,5</span>
          </Li>
          <Li>
            <p>Nome secondo piatto</p>
            <span>12,5</span>
          </Li>
        </Ul>
        <Ul>
          <h2>Desserts</h2>
          <Li>
            <p>Nome dessert</p>
            <span>4,5</span>
          </Li>
          <Li>
            <p>Nome dessert</p>
            <span>4,5</span>
          </Li>
          <Li>
            <p>Nome dessert</p>
            <span>4,5</span>
          </Li>
          <Li>
            <p>Nome dessert</p>
            <span>4,5</span>
          </Li>
          <Li>
            <p>Nome dessert</p>
            <span>4,5</span>
          </Li>
        </Ul>
        <p>
          *Previa segnalazione, siamo organizzati per far fronte ad eventuali
          intolleranze alimentari.
        </p>
      </Container>
    </Wrapper>
  );
};

export default Menu;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  min-width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
  z-index: 9999;
`;
const Header = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  padding: 0 4rem;
  top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: calc(3.5rem + 1vw);
    color: #5b7083;
    font-family: "Antonio", sans-serif;
  }
  @media screen and (max-width: 1500px) {
    position: relative;
  }
`;
const CloseIcon = styled(CgClose)`
  font-size: calc(3rem + 1vw);
  color: #5b7083;
  cursor: pointer;
  :hover {
    color: #000;
  }
`;
const Container = styled.div`
  width: 75rem;
  max-width: 85%;
  color: #5b7083;
  height: 100%;
  margin: 13rem auto 5rem;
  > p {
    font-size: calc(1rem + 0.1vw);
  }
`;
const Ul = styled.ul`
  margin-bottom: 5rem;
  h2 {
    width: 100%;
    font-size: calc(1.5rem + 0.5vw);
    margin-bottom: 1.3rem;
  }
`;
const Li = styled.li`
  display: flex;
  margin-bottom: 1.7rem;
  font-size: calc(1.2rem + 0.2vw);
  font-weight: 300;
  p {
    flex: 0.7;
    line-height: 1.8;
  }
  span {
    text-align: right;
    flex: 0.3;
  }
`;
