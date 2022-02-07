import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BsGeo } from "react-icons/bs";
import logo49 from "../../assets/images/logo49.png";
import logo49x2 from "../../assets/images/logo49x2.png";

const Footer = () => {
  const socialHandler = (social) => {
    if (social === "instagram") {
      window.open("https://www.instagram.com/residenceaquarium/");
    } else {
      window.open("https://www.facebook.com/aquariumresidence");
    }
  };
  const date = new Date().toISOString().slice(0, 4);
  return (
    <Container>
      <Div up>
        <Ul>
          <li>
            <a
              rel="noreferrer"
              href="https://www.iubenda.com/privacy-policy/51189642"
              target="_blank"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <RouterLink target="_blank" to="/cookie-policy">
              Cookie Policy
            </RouterLink>
          </li>
          <li>
            <RouterLink
              target="_blank"
              to="/termini-condizioni-prenotazione-cancellazione"
            >
              Termini e condizioni
            </RouterLink>
          </li>
          <li>
            <RouterLink target="_blank" to="/vacanze-sicure">
              Vacanze sicure
            </RouterLink>
          </li>
        </Ul>
      </Div>
      <Div>
        <Up top>
          <p>
            <img
              src={window.devicePixelRatio >= 1.5 ? logo49x2 : logo49}
              alt="Logo Aquarium Residence"
            />
          </p>
          <p>
            <span>
              <PhoneIcon /> <a href={"tel:+393664048048"}>366 4048048</a>
            </span>
            <span>
              <a
                rel="noreferrer"
                target="_blank"
                href={"https://goo.gl/maps/h122enGvfby"}
              >
                <MapIcon /> Via degli Olmi, 18 - 74024 S. Pietro in Bevagna (Ta)
              </a>
            </span>
          </p>
        </Up>
        <Up>
          <p>
            <span>
              <MailIcon /> info@aquariumresidence.com
            </span>
          </p>
          <p>
            <InstaIcon onClick={() => socialHandler("instagram")} />{" "}
            <FacebookIcon onClick={socialHandler} />
          </p>
          <p>
            <span>P. IVA 03114670734</span>
          </p>
        </Up>
        <Down>
          <p>
            <span>
              <CopyIcon /> {date} Aquarium Residence. All rights reserved.
            </span>
          </p>
        </Down>
      </Div>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
`;
const Div = styled.div`
  width: 100%;
  background: ${(props) => (props.up ? "#333" : "#444")};
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 1rem 0;
  li {
    padding: 1rem 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 0.9);
    font-size: calc(1.2rem + 0.2vw);
    font-weight: 300;
    a {
      text-decoration: none;
      height: 100%;
      color: inherit;
      &:hover {
        color: #fff;
      }
    }
  }
`;
const RouterLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  color: inherit;
`;
const Up = styled.div`
  width: 100rem;
  max-width: 90%;
  display: flex;
  margin: 0 auto;
  padding: 2rem 0;
  border-bottom: ${(props) =>
    props.top && "0.1rem solid rgba(255, 255, 255, 0.1)"};
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  p {
    margin: 0 1rem;
    color: rgba(255, 255, 255, 0.9);
    transition: color 0.15s;
    display: flex;
    align-items: center;
    font-weight: 300;
    font-size: calc(1.2rem + 0.2vw);
    a {
      color: #5da9ad;
      font-weight: 400;
      text-decoration: none;
      &:hover {
        color: #4b8b8f;
        text-decoration: underline;
      }
    }
    span {
      color: rgba(255, 255, 255, 0.9);
      font-weight: 300;
      cursor: default;
      font-size: calc(1.2rem + 0.2vw);
      display: flex;
      align-items: center;
      margin: 0.3rem 0;
    }
    img {
      max-height: 4.9rem;
    }
  }
  > p:last-child {
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (max-width: 663px) {
    ${(props) =>
      props.top &&
      css`
        justify-content: center;
        p:first-child {
          margin-bottom: 1.5rem;
        }
        p:last-child {
          align-items: center;
          text-align: center;
        }
      `}
  }
  @media screen and (max-width: 483px) {
    ${(props) =>
      !props.top &&
      css`
        justify-content: center;
        p:last-child {
          margin-top: 0.5rem;
        }
      `}
  }
`;
const PhoneIcon = styled(AiOutlinePhone)`
  font-size: calc(1.4rem + 0.2vw);
  margin-right: 0.7rem;
  cursor: pointer;
`;
const MailIcon = styled(AiOutlineMail)`
  font-size: calc(1.4rem + 0.2vw);
  margin-right: 0.7rem;
`;
const InstaIcon = styled(AiOutlineInstagram)`
  font-size: calc(2.3rem + 0.2vw);
  color: rgba(255, 255, 255, 0.9);
  margin-left: 0.8rem;
  cursor: pointer;
  transition: color 0.15s;
  :hover {
    color: #4b8b8f;
  }
`;
const FacebookIcon = styled(FaFacebookF)`
  font-size: calc(1.9rem + 0.2vw);
  color: rgba(255, 255, 255, 0.9);
  margin-left: 0.2rem;
  cursor: pointer;
  transition: color 0.15s;
  :hover {
    color: #4b8b8f;
  }
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  padding: 2.5rem 0;
  justify-content: center;
  border-top: 0.1rem solid rgba(255, 255, 255, 0.1);
  background: #555;
  p {
    font-weight: 300;
    span {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: calc(1.15rem + 0.2vw);
      margin-bottom: 0.2rem;
    }
  }
`;
const CopyIcon = styled(BiCopyright)`
  margin-right: 0.3rem;
  font-size: calc(1rem + 0.2vw);
`;
const MapIcon = styled(BsGeo)`
  font-size: calc(1.2rem + 0.2vw);
  margin-right: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
`;
