import React from "react";
import styled from "styled-components";
import { BsFillPeopleFill } from "react-icons/bs";

const RoomCard = ({ onClick, item }) => {
  return (
    <Wrapper>
      <Left onClick={onClick}>
        <img src={item.images[0].src} alt={item.images[0].title} />
        <Over>
          <h3>{item.title}</h3>
        </Over>
      </Left>
      <Right>
        <Up>
          <span>
            da <strong>{item.prezzi[0]}€</strong> a notte
          </span>
        </Up>
        <Down>
          <Text>
            <span>
              <PeopleIcon />
              {item.persone} persone
            </span>
          </Text>
          <Button>
            <button onClick={onClick}>Mostra tariffe</button>
          </Button>
        </Down>
      </Right>
    </Wrapper>
  );
};

export default RoomCard;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 579px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.48;
  position: relative;
  cursor: pointer;
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background: rgba(0, 0, 0, 0.2);
    transition: opacity 0.2s;
    width: 100%;
    height: 100%;
  }
  :hover {
    ::after {
      opacity: 0;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const Over = styled.div`
  position: absolute;
  top: 22%;
  left: 10%;
  z-index: 9;
  width: 50%;
  h3 {
    font-size: calc(2rem + 0.6vw);
    color: #fff;
    font-family: "Antonio", sans-serif;
  }
`;

const Right = styled.div`
  flex: 0.52;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 3rem;
  @media screen and (max-width: 579px) {
    padding: 1.5rem;
  }
`;

const Up = styled.div`
  padding: 3rem 0;
  span {
    color: #5b7083;
    font-size: calc(1.2rem + 0.3vw);
    strong {
      font-size: calc(2.5rem + 0.3vw);
    }
  }
  @media screen and (max-width: 579px) {
    padding: 2rem;
  }
`;

const Down = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Text = styled.div`
  flex: 0.55;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #5b7083;
    display: flex;
    align-items: center;
    font-size: calc(1.2rem + 0.3vw);
    font-weight: 500;
  }
`;

const PeopleIcon = styled(BsFillPeopleFill)`
  color: #5b7083;
  margin-right: 1rem;
`;

const Button = styled.div`
  flex: 0.45;
  button {
    outline: none;
    border: none;
    color: #fff;
    font-size: calc(1.3rem + 0.3vw);
    border-radius: 0.2rem;
    background: #5da9ad;
    width: 100%;
    padding: 1.5rem;
    cursor: pointer;
    transition: opacity 0.15s;
    :hover {
      opacity: 0.85;
    }
  }
`;
