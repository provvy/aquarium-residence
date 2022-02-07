import React from "react";
import styled from "styled-components";

const SelectComponent = ({ id, label, value, onChange, options }) => {
  return (
    <SelectContainer>
      <label htmlFor={id}>{label}</label>
      <select defaultValue={value} id={id} onChange={onChange}>
        {options.map((item, index) => (
          <option
            value={value}
            disabled={item === "Scegli una sistemazione"}
            key={index}
          >
            {item}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default SelectComponent;

const SelectContainer = styled.div`
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
  select {
    border: 0.1rem solid #ccc;
    padding: 1rem;
    font-size: calc(1.3rem + 0.3vw);
    border-radius: 0.3rem;
    color: #5b7083;
  }
`;
