import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BiSearch } from "react-icons/bi";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { BsFillPeopleFill } from "react-icons/bs";

const Booking = ({ variant }) => {
  const [fromDate, setFromDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [toDate, setToDate] = useState(new Date().toISOString().slice(0, 10));
  const [people, setPeople] = useState(2);
  const submitHandle = (e) => {
    e.preventDefault();
    window.open(
      `https://aquariumresidence.kross.travel/book/step1?from=${fromDate}&to=${toDate}&guests_rooms=${people},0;`
    );
  };
  return (
    <BookingWrapper variant={variant}>
      <BookingContainer>
        <Form onSubmit={submitHandle}>
          <TextContainer>
            <p>PRENOTA SUBITO LE TUE VACANZE!</p>
          </TextContainer>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <InputContainer>
              <KeyboardDatePicker
                disablePast
                autoOk
                variant="inline"
                format="dd/MM/yyyy"
                id="date-picker-inline"
                label={variant ? false : "Dal"}
                value={fromDate}
                onChange={(date) => {
                  setFromDate(date.toISOString().slice(0, 10));
                }}
                inputVariant="outlined"
                InputAdornmentProps={{ position: "start" }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </InputContainer>
            <InputContainer>
              <KeyboardDatePicker
                disablePast
                autoOk
                variant="inline"
                inputVariant="outlined"
                format="dd/MM/yyyy"
                id="date-picker-inline-2"
                label={variant ? false : "Al"}
                value={toDate}
                onChange={(date) => setToDate(date.toISOString().slice(0, 10))}
                InputAdornmentProps={{ position: "start" }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </InputContainer>
          </MuiPickersUtilsProvider>
          <SelectContainer>
            <label htmlFor="people">
              <PeopleIcon />
              <select
                defaultValue={people}
                onChange={(e) => setPeople(e.target.value)}
                id="people"
              >
                {[...Array(10).keys()].map((item) => (
                  <option key={item + 1} value={item + 1}>
                    {item + 1}
                  </option>
                ))}
              </select>
            </label>
          </SelectContainer>
          <ButtonContainer>
            <button type="submit">
              <IconContainer>
                <SearchIcon />
              </IconContainer>
            </button>
          </ButtonContainer>
        </Form>
      </BookingContainer>
    </BookingWrapper>
  );
};

export default Booking;

const BookingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-shadow: 0rem 0.3rem 0.8rem -0.2rem rgba(0, 0, 0, 30%);
  background: #fff;
  margin: 0 auto 0.8rem;
  ${(props) =>
    props.variant &&
    css`
      width: 75rem;
      border-radius: 0.5rem;
      background: rgba(0, 0, 0, 70%);
      position: absolute;
      top: 82%;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0 2rem;
      max-width: 90%;
      ${Form} {
        padding: 2rem 0;
        @media screen and (max-width: 425px) {
          padding: 1rem 0;
        }
      }
      ${TextContainer} {
        display: none;
      }
      ${InputContainer} {
        padding: 0;
        margin-right: 2rem;
        border-radius: 0.4rem;
        @media screen and (max-width: 495px) {
          > div {
            padding-left: 0;
          }
        }
        @media screen and (max-width: 425px) {
          margin-right: 1rem;
        }
      }
      ${ButtonContainer} {
        padding: 0;
        button {
          padding: 1.3rem 4rem;
          @media screen and (max-width: 940px) {
            padding: 1.15rem;
          }
        }
      }
      ${SelectContainer} {
        margin: 0;
        margin-right: 2rem;
        @media screen and (max-width: 636px) {
          display: none;
        }
      }
      @media screen and (max-width: 425px) {
        padding: 0 1rem;
        max-width: 100%;
      }
    `}
`;

const BookingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  padding: 1.5rem 0;
`;

const TextContainer = styled.div`
  padding: 0 2rem;
  border-radius: 0.5rem;
  p {
    font-size: calc(1.1rem + 0.4vw);
    font-weight: 500;
    color: #5b7083;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
  @media screen and (max-width: 825px) {
    padding: 0 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: #fff;
  label {
    font-size: calc(1.3rem + 0.4vw);
  }
  div {
    font-size: calc(1.2rem + 0.35vw);
    @media screen and (max-width: 495px) {
      padding-left: 0.2rem;
    }
  }
  button {
    padding: 1rem;
    @media screen and (max-width: 495px) {
      padding: 1rem 0rem;
    }
  }
  svg {
    font-size: 2.4rem;
  }
  input {
    padding: 1.4rem;
    padding-left: 0;
  }
  @media screen and (max-width: 825px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 540px) {
    padding: 0 0.5rem;
  }
`;

const SelectContainer = styled.div`
  border-radius: 4px;
  border: 0.1rem solid rgba(0, 0, 0, 0.23);
  margin: 0 2rem;
  background: #fff;
  label {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
  }
  select {
    border: none;
    outline: none;
    padding: 1.25rem 0;
    font-size: calc(1.2rem + 0.35vw);
    margin-right: 1rem;
    @media screen and (max-width: 495px) {
      margin-right: 0 0.5rem;
    }
  }
  @media screen and (max-width: 825px) {
    margin: 0 1rem;
  }
  @media screen and (max-width: 540px) {
    margin: 0 0.5rem;
  }
  @media screen and (max-width: 415px) {
    display: none;
  }
`;

const PeopleIcon = styled(BsFillPeopleFill)`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.54);
  margin: 0 1.5rem;
  @media screen and (max-width: 495px) {
    margin: 0 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 6rem;
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    background: #5da9ad;
    cursor: pointer;
    transition: opacity 0.15s;
    :hover {
      opacity: 0.85;
    }
    @media screen and (max-width: 940px) {
      padding: 1rem;
      border-radius: 50%;
    }
  }
  @media screen and (max-width: 825px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 540px) {
    padding: 0 0.5rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(BiSearch)`
  font-size: calc(2rem + 0.35vw);
  color: #fff;
`;
