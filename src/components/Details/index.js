import React from "react";
import styled from "styled-components";
import RoomSlider from "../RoomSlider";
import { VscClose } from "react-icons/vsc";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaShower } from "react-icons/fa";
import { BsWifi } from "react-icons/bs";
import { IoSnowSharp } from "react-icons/io5";
import { BiFridge } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";

const Details = ({ targetRef, item, onClick }) => {
  const dates = [
    {
      from: "23/04/2021",
      to: "28/05/2021",
    },
    {
      from: "29/05/2021",
      to: "18/06/2021",
    },
    {
      from: "19/06/2021",
      to: "02/07/2021",
    },
    {
      from: "03/07/2021",
      to: "23/07/2021",
    },
    {
      from: "24/07/2021",
      to: "21/08/2021",
    },
    {
      from: "22/08/2021",
      to: "28/08/2021",
    },
    {
      from: "29/08/2021",
      to: "11/09/2021",
    },
    {
      from: "12/09/2021",
      to: "18/09/2021",
    },
    {
      from: "19/09/2021",
      to: "29/09/2021",
    },
  ];
  return (
    <Wrapper onClick={onClick} ref={targetRef}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>
          <h1>{item.title}</h1>
          <Icon>
            <CloseIcon onClick={onClick} />
          </Icon>
        </Title>
        <Image>
          <RoomSlider images={item.images} variant={true} />
        </Image>
        <Element>
          <h3>Descrizione</h3>
          <p>{item.descrizione}</p>
        </Element>
        <Element>
          <h3>Prezzi</h3>
          <table>
            <thead>
              <tr>
                <th>Dal</th>
                <th>Al</th>
                <th>A notte</th>
              </tr>
            </thead>
            <tbody>
              {item.prezzi.map((prezzo, index) => (
                <tr key={index}>
                  <td>{dates[index].from}</td>
                  <td>{dates[index].to}</td>
                  <td>da € {prezzo},00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Element>
        <Element>
          <h3>Servizi</h3>
          <p>
            <span>
              <PeopleIcon />
              {item.persone} persone
            </span>
            <span>
              <ShowerIcon />
              Servizi privati
            </span>
            <span>
              <WifiIcon />
              Free wifi
            </span>
            <span>
              <ClimaIcon />
              Climatizzazione
            </span>
            <span>
              <FridgeIcon />
              Frigobar
            </span>
            <span>
              <TvIcon />
              Tv LCD
            </span>
          </p>
        </Element>
      </Container>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  background: rgba(0, 0, 0, 60%);
  z-index: 9999 !important;
  overflow-y: auto;
  padding: 3rem 0;
  cursor: zoom-out;
`;

const Container = styled.div`
  width: 83rem;
  margin: 0 auto;
  max-width: 90%;
  box-shadow: 0 0.1rem 0.6rem rgba(0, 0, 0, 80%);
  background: #f7f7f7;
  border-radius: 0.2rem;
  padding: 2rem;
  cursor: default;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  align-items: center;
  h1 {
    color: #5da9ad;
    font-size: calc(2.4rem + 0.3vw);
    font-family: "Antonio", sans-serif;
  }
`;

const Icon = styled.div`
  height: 100%;
  width: 3.5rem;
  margin-left: 2rem;
`;

const CloseIcon = styled(VscClose)`
  width: 100%;
  height: 100%;
  color: #bbb;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: #888;
  }
`;

const Image = styled.div`
  height: 0;
  padding-top: 66.25%;
  position: relative;
  width: 100%;
  margin-bottom: 5rem;
`;

const Element = styled.div`
  width: 100%;
  display: flex;
  border-top: 0.1rem solid #ddd;
  padding: 2rem 1.5rem 4rem;
  h3 {
    flex: 0.2;
    font-size: calc(1.4rem + 0.2vw);
    color: #5da9ad;
    margin-right: 3rem;
    margin-bottom: 1.5rem;
  }
  p,
  table {
    flex: 0.8;
    font-size: calc(1.2rem + 0.2vw);
    color: #5b7083;
    text-align: center;
    font-weight: 300;
  }
  td,
  th {
    padding: 1.5rem 1rem;
    border: 0.1rem solid #ddd;
  }
  p {
    text-align: justify;
    line-height: 1.8;
    display: flex;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  span {
    font-size: calc(1.1rem + 0.2vw);
    flex: 1 25%;
    color: #5b7083;
    display: flex;
    align-items: center;
    font-weight: 500;
    justify-content: center;
    margin: 0 1.5rem 1rem;
  }
  @media screen and (max-width: 479px) {
    flex-direction: column;
  }
`;

const PeopleIcon = styled(BsFillPeopleFill)`
  color: #5b7083;
  margin-right: 0.5rem;
`;

const ShowerIcon = styled(FaShower)`
  color: #5b7083;
  margin-right: 0.5rem;
`;

const WifiIcon = styled(BsWifi)`
  color: #5b7083;
  margin-right: 0.5rem;
`;

const ClimaIcon = styled(IoSnowSharp)`
  color: #5b7083;
  margin-right: 0.5rem;
`;

const FridgeIcon = styled(BiFridge)`
  color: #5b7083;
  margin-right: 0.5rem;
`;

const TvIcon = styled(FiMonitor)`
  color: #5b7083;
  margin-right: 0.5rem;
`;
