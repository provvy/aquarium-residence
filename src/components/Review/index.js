import React from "react";
import styled from "styled-components";
import { ImStarFull } from "react-icons/im";

const Review = ({ item }) => {
  return (
    <Container>
      <Top>
        <Left>
          <img
            src={item.img}
            alt="Foto profilo dell'utente che ha postato la recensione su TripAdvisor"
          />
        </Left>
        <Right>
          <span>{item.name}</span>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon last={+true} />
            <span>{item.date}</span>
          </div>
        </Right>
      </Top>
      <Bottom>
        <h3>
          <a href="https://www.tripadvisor.it/Hotel_Review-g1204396-d9736823-Reviews-Aquarium_Residence-Manduria_Province_of_Taranto_Puglia.html">
            {item.title}
          </a>
        </h3>
        <p>{item.text}</p>
      </Bottom>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  margin-top: 1rem;
  background: #fff;
  border-radius: 0.4rem;
  width: 100%;
  padding: 2rem 3rem;
`;
const Top = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;
const Left = styled.div`
  height: 4.4rem;
  width: 4.4rem;
  border-radius: 50%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 379px) {
    display: none;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.7rem;
  align-items: flex-start;
  span {
    font-size: 1.4rem;
    color: #111;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  div {
    color: #ffb400;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    span {
      font-size: 1.3rem;
      font-weight: 300;
      color: #11111180;
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 379px) {
    margin-left: 0;
  }
`;
const StarIcon = styled(ImStarFull)`
  color: #ffb400;
  font-size: 2rem;
  margin-right: ${(props) => props.last && "1rem"};
`;
const Bottom = styled.div`
  h3 {
    font-size: 1.7rem;
    color: #111;
    margin-bottom: 0.5rem;
    font-weight: 600;
    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }
  p {
    font-size: 1.5rem;
    line-height: 1.5;
    color: #111;
  }
`;
