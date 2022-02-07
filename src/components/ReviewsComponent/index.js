import React from "react";
import styled from "styled-components";
import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { reviewsDetails } from "../../data";
import Review from "../Review";

const ReviewsComponent = () => {
  const clickHandler = () => {
    window.open(
      "https://www.tripadvisor.it/UserReviewEdit-g1204396-d9736823-Aquarium_Residence-Manduria_Province_of_Taranto_Puglia.html"
    );
  };
  return (
    <Wrapper>
      <Title top>
        <h2>Dicono di noi</h2>
      </Title>
      <Title>
        <h3>Tripadvisor Reviews</h3>
      </Title>
      <Container>
        <Left>
          <span>4,5</span>
          <div>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <HalfStarIcon />
          </div>
          <span>68 recensioni</span>
        </Left>
        <Right>
          <button onClick={clickHandler}>Scrivi una recensione</button>
        </Right>
      </Container>
      {reviewsDetails.map((item, index) => (
        <Review key={index} item={item} />
      ))}
      <LinkContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tripadvisor.it/Hotel_Review-g1204396-d9736823-Reviews-Aquarium_Residence-Manduria_Province_of_Taranto_Puglia.html"
        >
          Leggi tutte le recensioni
        </a>
      </LinkContainer>
    </Wrapper>
  );
};

export default ReviewsComponent;

const Wrapper = styled.div`
  width: 110rem;
  max-width: 90%;
  padding: 5rem 0 7rem;
  margin: 0 auto;
`;
const Title = styled.div`
  width: 100%;
  margin-bottom: ${(props) => (props.top ? "4rem" : "2.5rem")};
  text-align: ${(props) => !props.top && "center"};
  h2 {
    font-size: calc(3rem + 0.8vw);
    color: #5b7083;
    font-weight: 600;
    font-family: "Antonio", sans-serif;
  }
  h3 {
    font-size: calc(1.7rem + 0.3vw);
    color: #5da9ad;
    font-weight: 600;
  }
`;
const Container = styled.div`
  background: #fff;
  border-radius: 0.4rem;
  width: 100%;
  display: flex;
  padding: 2rem 3rem;
  flex-wrap: wrap;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  span {
    color: #111;
    font-size: 2.3rem;
    font-weight: 600;
  }
  div {
    display: flex;
    margin: 0 1.5rem;
  }
  span:last-child {
    color: #11111180;
    font-size: 1.3rem;
    font-weight: 300;
  }
  @media screen and (max-width: 549px) {
    justify-content: space-between;
    margin-right: 0;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  button {
    padding: 0.8rem 2rem;
    color: #fff;
    background: #5da9ad;
    font-size: 1.5rem;
    outline: none;
    border-radius: 2.6rem;
    border: none;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  }
  @media screen and (max-width: 569px) {
    button {
      margin-top: 2rem;
    }
  }
`;

const StarIcon = styled(ImStarFull)`
  color: #ffb400;
  font-size: 2.4rem;
`;
const HalfStarIcon = styled(ImStarHalf)`
  color: #ffb400;
  font-size: 2.4rem;
`;

const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 1.5rem;
  a {
    color: #111;
    font-size: 1.4rem;
    :hover {
      color: #5da9ad;
    }
  }
`;
