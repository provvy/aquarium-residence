import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BsChatDots } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";

const ContactButtons = ({ history }) => {
  const [show, setShow] = useState(+false);
  const [closed, setClosed] = useState(true);
  const clickHandler = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=393664048048&text&app_absent=0"
    );
  };
  useEffect(() => {
    const scrollDetection = () => {
      if (window.scrollY > 50) {
        setShow(+true);
      } else {
        setShow(+false);
      }
    };
    window.addEventListener("scroll", scrollDetection);
    return () => window.removeEventListener("scroll", scrollDetection);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <AnimatePresence>
                {!closed && (
                  <>
                    <motion.div
                      initial={{ y: 150, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 150, opacity: 0 }}
                    >
                      <IconContainer
                        onClick={() => history.push("/contatti")}
                        mail
                      >
                        <MailIcon />
                      </IconContainer>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                    >
                      <IconContainer
                        onClick={() =>
                          window.open("https://m.me/aquariumresidence")
                        }
                        fb
                      >
                        <MessengerIcon />
                      </IconContainer>
                    </motion.div>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 50, opacity: 0 }}
                    >
                      <IconContainer onClick={clickHandler} wa>
                        <WhatsappIcon />
                      </IconContainer>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
              <IconContainer
                onClick={() => setClosed((closed) => !closed)}
                chat
              >
                {closed ? <ChatIcon /> : <CloseIcon />}
              </IconContainer>
              {window.innerWidth >= 576 && (
                <TextContainer>
                  <span>Ciao, come possiamo aiutarti? Scrivici!</span>
                </TextContainer>
              )}
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactButtons;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 3%;
  right: 2%;
  z-index: 999;
`;
const IconContainer = styled.div`
  border-radius: 50%;
  box-shadow: 0rem 0rem 0.8rem -0.1rem rgba(0, 0, 0, 40%);
  padding: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem 0;
  background: ${(props) =>
    props.chat
      ? "#5da9ad"
      : props.fb
      ? "#0084ff"
      : props.wa
      ? "#4dc247"
      : "#5b7083"};
  color: #fff;
  transition: all 0.3s;
  :hover {
    opacity: 0.9;
    box-shadow: 0rem 0rem 1.2rem 0rem rgba(0, 0, 0, 40%);
  }
`;
const ChatIcon = styled(BsChatDots)`
  font-size: calc(2rem + 0.5vw);
`;
const CloseIcon = styled(VscClose)`
  font-size: calc(2rem + 0.5vw);
`;
const MailIcon = styled(IoMailOutline)`
  font-size: calc(2rem + 0.5vw);
`;
const MessengerIcon = styled(SiMessenger)`
  font-size: calc(2rem + 0.5vw);
`;
const WhatsappIcon = styled(FaWhatsapp)`
  font-size: calc(2rem + 0.5vw);
`;
const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20rem;
  left: -22rem;
  background: #fff;
  border: 0.1rem solid rgb(226, 226, 226);
  box-shadow: 0rem 0rem 0.8rem -0.2rem rgba(0, 0, 0, 30%);
  border-radius: 0.5rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.8rem;
  span {
    color: #000;
    font-size: calc(1.1rem + 0.2vw);
  }
`;
