import React, { useState } from "react";
import styled from "styled-components";
import InputComponent from "../InputComponent";
import { inputData, selectData } from "../../data";
import SelectComponent from "../SelectComponent";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    arrivo: "",
    partenza: "",
    sistemazione: "",
    camere: "",
    adulti: "",
    neonati: "",
    bambini1: "",
    bambini2: "",
    text: "",
  });

  return (
    <Container>
      <Title>
        <p>
          Se hai dubbi, domande o richieste specifiche, o vuoi chiederci
          qualsiasi informazione, non esitare a contattarci!
        </p>
        <p>
          <PhoneIcon /> <a href="tel:+393664048048">366 4048048</a>
        </p>
      </Title>
      <FormComponent onSubmit={(e) => e.preventDefault()}>
        <p>I campi contrassegnati da * sono obbligatori.</p>
        {inputData.map((item, index) => (
          <InputComponent
            key={index}
            id={item.id}
            type={item.type}
            label={item.label}
            required={item.required}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                [item.id]: e.target.value,
              }))
            }
            value={formData[item.id]}
          />
        ))}
        {selectData.map((item, index) => (
          <SelectComponent
            key={index}
            id={item.id}
            label={item.label}
            options={item.options}
            value={formData[item.id]}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                [item.id]: e.target.value,
              }))
            }
          />
        ))}
        <Text>
          <span>
            Per maggiori informazioni in merito alla nostra policy sui bambini,{" "}
            <RouterLink to="/termini-condizioni-prenotazione-cancellazione/#bimbi">
              consulta la pagina dedicata.
            </RouterLink>
          </span>
        </Text>
        <TextAreaContainer>
          <label htmlFor="text-area">Messaggio*</label>
          <textarea
            id="text-area"
            required
            value={formData.text}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
          />
        </TextAreaContainer>
        <CheckContainer>
          <input type="checkbox" id="privacy" required />
          <label htmlFor="privacy">
            Confermo di aver preso visione dell'informativa sulla{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.iubenda.com/privacy-policy/51189642"
            >
              privacy.
            </a>
          </label>
        </CheckContainer>
        <CheckContainer>
          <input type="checkbox" id="newsletter" />
          <label htmlFor="newsletter">
            Acconsento a ricevere promo riservate tramite mail.
          </label>
        </CheckContainer>
        <ButtonContainer>
          <button type="submit">Invia la tua richiesta</button>
        </ButtonContainer>
      </FormComponent>
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.686623053368!2d17.662095015646415!3d40.3049165703556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1346eb53eafb24c7%3A0xf78a4f94d3db0b4a!2sAquarium%20Residence%20e%20Restaurant!5e0!3m2!1sit!2sit!4v1620985059134!5m2!1sit!2sit"
          width="100%"
          height={window.innerWidth >= 576 ? "500" : "300"}
          title="google map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>
    </Container>
  );
};

export default Form;

const Container = styled.div`
  width: 90rem;
  max-width: 90%;
  margin: 0 auto;
  padding: 4rem 0 0;
`;
const Title = styled.div`
  width: 100%;
  padding: 0 2rem;
  p {
    display: flex;
    align-items: center;
    color: #5b7083;
    font-size: calc(1.4rem + 0.3vw);
    font-weight: 300;
    margin-bottom: 2rem;
    text-align: justify;
    line-height: 1.8;
  }
  p:last-child {
    color: #5da9ad;
    font-weight: 500;
    cursor: pointer;
    a {
      color: inherit;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
const PhoneIcon = styled(FaPhone)`
  margin-right: 1rem;
  color: #5da9ad;
`;
const FormComponent = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > p {
    color: #5b7083;
    font-size: calc(1rem + 0.3vw);
    font-weight: 300;
    margin: 1rem 2rem;
    text-align: left;
    width: 100%;
  }
`;
const Text = styled.div`
  width: 100%;
  color: #5b7083;
  font-weight: 300;
  text-align: justify;
  line-height: 1.8;
  font-size: calc(1.2rem + 0.3vw);
  margin: 1rem 2rem;
`;
const RouterLink = styled(Link)`
  color: #5da9ad;
  text-decoration: none;
  font-weight: 500;
  :hover {
    text-decoration: underline;
  }
`;
const TextAreaContainer = styled.div`
  display: flex;
  flex: 1 100%;
  flex-direction: column;
  padding: 2rem;
  margin-bottom: 1rem;
  label {
    font-size: calc(1.3rem + 0.3vw);
    margin-bottom: 1rem;
    color: #5da9ad;
    font-weight: 500;
  }
  textarea {
    border: 0.1rem solid #ccc;
    padding: 1rem;
    font-size: calc(1.3rem + 0.3vw);
    border-radius: 0.3rem;
    color: #5b7083;
    resize: vertical;
    width: 100%;
    line-height: 1.5;
  }
`;
const CheckContainer = styled.div`
  flex: 1 1 100%;
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  label {
    font-size: calc(1.3rem + 0.3vw);
    color: #5b7083;
    font-weight: 300;
    cursor: pointer;
    a {
      color: #5da9ad;
      text-decoration: none;
      font-weight: 500;
      :hover {
        text-decoration: underline;
      }
    }
  }
  input {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
const ButtonContainer = styled.div`
  flex: 1 100%;
  margin: 3rem 2rem;
  button {
    width: 100%;
    color: #fff;
    font-size: calc(1.4rem + 0.3vw);
    background: #5da9ad;
    cursor: pointer;
    padding: 1.5rem 0;
    border: none;
    outline: none;
    border-radius: 0.2rem;
    transition: opacity 0.2s;
    :hover {
      opacity: 0.9;
    }
  }
`;
const MapContainer = styled.div`
  width: 100%;
  padding: 3rem 2rem;
  margin-top: 3rem;
  iframe {
    border: 0.1rem solid #5b7083;
    width: 100%;
  }
`;
