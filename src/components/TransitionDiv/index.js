import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const TransitionDiv = () => {
  return (
    <Container
      initial={{ top: 0 }}
      animate={{ top: "100%" }}
      exit={{ top: 0 }}
      transition={{ duration: 1 }}
    ></Container>
  );
};

export default TransitionDiv;

const Container = styled(motion.div)`
  position: fixed;
  z-index: 99999;
  bottom: 0;
  left: 0;
  right: 0;
  background: #5da9ad;
  height: 100vh;
`;
