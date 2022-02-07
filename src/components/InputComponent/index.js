import React from "react";
import styled from "styled-components";

const InputComponent = ({ id, type, label, required, onChange, value }) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        type={type}
        id={id}
        required={required}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default InputComponent;

const InputContainer = styled.div`
  flex: 1 1 35rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  label {
    font-size: calc(1.3rem + 0.3vw);
    margin-bottom: 1rem;
    color: #5da9ad;
    font-weight: 500;
  }
  input {
    border: 0.1rem solid #ccc;
    padding: 1rem;
    font-size: calc(1.3rem + 0.3vw);
    border-radius: 0.3rem;
    color: #5b7083;
  }
`;
