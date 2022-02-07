import React from "react";
import styled from "styled-components";

const Main = (props) => {
  return (
    <MainWrapper>
      <MainContainer>{props.children}</MainContainer>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  background-color: #f7f7f7;
`;

const MainContainer = styled.main`
  width: 100%;
  max-width: 100%;
`;
