import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VacanzeSection = () => {
  const [arrivo, setArrivo] = useState("");
  const [partenza, setPartenza] = useState("");
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
    <Container>
      <p>
        Cari amici, il momento storico che stiamo vivendo ci sta mettendo a dura
        prova e dai messaggi ricevuti e dalle telefonate scambiate con molti di
        voi, capiamo che forte è la voglia di venirci a trovare per staccare da
        questa nuova quotidianità.
      </p>
      <p>
        È per questo motivo che abbiamo deciso di creare la campagna "Vacanza
        Sicura", con la quale vi assicuriamo la possibilità di prenotare in
        sicurezza, con un'attenzione particolare alle cause di forza maggiore
        che potrebbero occorrere in qualsiasi momento.
      </p>
      <p>
        Infatti, come indicato nella pagina dedicata ai{" "}
        <RouterLink to="/termini-condizioni-prenotazione-cancellazione/#cause-di-forza-maggiore">
          termini di prenotazione e cancellazione
        </RouterLink>
        , nel caso in cui dovessero esserci restrizioni che impediscano la
        possibilità di raggiungerci, la prenotazione sarà annullata
        gratuitamente e provvederemo a restituire la caparra confirmatoria
        versata.
      </p>
      <p>
        E allora cosa aspetti a prenotare, controlla disponibilità e prezzi
        indicando le date desiderate nel seguente form. Ti aspettiamo!
      </p>
      <Form onSubmit={(e) => e.preventDefault()}>
        <InputContainer>
          <label htmlFor="arrivo">Dal</label>
          <input
            type="date"
            id="arrivo"
            value={arrivo}
            onChange={(e) => setArrivo(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="partenza">Al</label>
          <input
            type="date"
            id="partenza"
            value={partenza}
            onChange={(e) => setPartenza(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <button onClick={() => clickHandler(arrivo, partenza)} type="submit">
            Fai un preventivo
          </button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default VacanzeSection;

const Container = styled.div`
  width: 110rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 2rem 0 5rem;
  text-align: justify;
  color: #5b7083;
  p {
    margin: 2rem 0;
    font-weight: 300;
    font-size: calc(1.3rem + 0.3vw);
    line-height: 1.7;
  }
`;
const RouterLink = styled(Link)`
  color: #5da9ad;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 0 1rem;
`;
const InputContainer = styled.div`
  flex: 1 15rem;
  display: flex;
  flex-direction: column;
  color: #5b7083;
  padding: 1rem;
  label {
    margin-bottom: 0.5rem;
    font-size: calc(1.4rem + 0.2vw);
  }
  input {
    padding: 1.5rem;
    font-size: calc(1.4rem + 0.2vw);
    border: 0.1rem solid #ccc;
    outline: none;
    color: #5b7083;
    border-radius: 0.2rem;
  }
`;
const ButtonContainer = styled.div`
  flex: 1 15rem;
  padding: 1rem;
  button {
    width: 100%;
    padding: 1.8rem 1rem;
    color: #fff;
    background: #5da9ad;
    transition: opacity 0.2s;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 0.2rem;
    font-size: calc(1.3rem + 0.2vw);
    :hover {
      opacity: 0.9;
    }
  }
`;
