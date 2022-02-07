import React, { useState } from "react";
import styled from "styled-components";

const Availability = (props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const clickHandler = (from, to) => {
    if (from && to) {
      window.open(
        `https://aquariumresidence.kross.travel/book/step1?lang=it&from=${from}&to=${to}`
      );
    } else {
      alert("Scegli una data di arrivo ed una di partenza!");
    }
  };
  return (
    <Wrapper>
      <Up>
        <Text>
          <p>
            da <strong>{props.children}</strong> a notte
          </p>
        </Text>
      </Up>
      <Down>
        <Form onSubmit={(e) => e.preventDefault()}>
          <InputContainer>
            <input
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              type="date"
            />
          </InputContainer>
          <InputContainer>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              type="date"
            />
          </InputContainer>
          <InputContainer>
            <button onClick={() => clickHandler(from, to)} type="submit">
              Verifica disponibilità
            </button>
          </InputContainer>
        </Form>
      </Down>
    </Wrapper>
  );
};

export default Availability;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  position: sticky;
  top: 7.5rem;
`;

const Up = styled.div`
  flex: 0.3;
  padding: 2rem 1rem;
  border-bottom: 0.1rem solid #eee;
  width: 100%;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  p {
    font-size: calc(1rem + 0.3vw);
    color: #5b7083;
    strong {
      font-size: calc(1.6rem + 0.3vw);
    }
  }
`;

const Down = styled.div`
  flex: 0.7;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  input {
    padding: 0.8rem 1rem;
    width: 100%;
    cursor: pointer;
    font-size: calc(1rem + 0.3vw);
  }
  button {
    width: 100%;
    color: #fff;
    background: #5da9ad;
    cursor: pointer;
    transition: opacity 0.15s;
    padding: 1.3rem 0;
    font-size: calc(1.1rem + 0.3vw);
    outline: none;
    border: none;
    :hover {
      opacity: 0.85;
    }
  }
`;
