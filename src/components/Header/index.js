import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import logo70 from "../../assets/images/logo70.png";
import logo56 from "../../assets/images/logo56.png";
import logo42 from "../../assets/images/logo42.png";
import logo70x2 from "../../assets/images/logo70x2.png";
import logo56x2 from "../../assets/images/logo56x2.png";
import logo42x2 from "../../assets/images/logo42x2.png";
import { RiArrowDropDownFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(+false);
  const [active, setActive] = useState(+false);
  const [isVisible, setIsVisible] = useState(+false);
  const logoObject = {
    notScrolled:
      window.innerWidth > 400
        ? window.devicePixelRatio >= 1.5
          ? logo70x2
          : logo70
        : window.devicePixelRatio >= 1.5
        ? logo56x2
        : logo56,
    scrolled:
      window.innerWidth > 400
        ? window.devicePixelRatio >= 1.5
          ? logo56x2
          : logo56
        : window.devicePixelRatio >= 1.5
        ? logo42x2
        : logo42,
  };

  const pushHistory = () => {
    window.open("https://aquariumresidence.kross.travel/");
  };

  useEffect(() => {
    if (window.innerWidth > 1920) {
      setScrolled(+true);
    }
    const scrollDetect = () => {
      if (window.innerWidth <= 1920) {
        if (window.scrollY > 0) {
          setScrolled(+true);
        } else {
          setScrolled(+false);
        }
      }
    };
    window.addEventListener("scroll", scrollDetect);
    return () => window.removeEventListener("scroll", scrollDetect);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled || props.scrolled}>
      <HeaderElement scrolled={scrolled || props.scrolled}>
        <LogoContainer>
          <RouterLink logo="true" to="/">
            <img
              src={
                scrolled || props.scrolled
                  ? logoObject.scrolled
                  : logoObject.notScrolled
              }
              alt="Logo Aquarium Residence"
            />
          </RouterLink>
        </LogoContainer>
        <Nav>
          {!active ? (
            <MenuIcon onClick={() => setActive((active) => !active)} />
          ) : (
            <CloseIcon onClick={() => setActive((active) => !active)} />
          )}
          <Ul scrolled={scrolled} active={active}>
            <Li>
              <RouterLink
                to="/"
                exact
                activeStyle={{
                  borderBottom: "0.25rem solid #fff",
                }}
              >
                <TextContainer>
                  <span>HOME</span>
                </TextContainer>
              </RouterLink>
            </Li>
            <Li
              onMouseLeave={() => {
                window.innerWidth > 768 && setIsVisible(+false);
              }}
              onMouseEnter={() => {
                window.innerWidth > 768 && setIsVisible(+true);
              }}
              onClick={() =>
                window.innerWidth < 768 &&
                setIsVisible((isVisible) => !isVisible)
              }
            >
              <TextContainer solution>
                <span>SOLUZIONI</span>
                <IconContainer>
                  <DropdownIcon />
                </IconContainer>
              </TextContainer>
              <DropDownContainer isVisible={isVisible}>
                <RouterLink to="/camere">
                  <DropDownText>
                    <span>CAMERE B&B</span>
                  </DropDownText>
                </RouterLink>
                <RouterLink to="/camere-con-cucina">
                  <DropDownText>
                    <span>CAMERE CON CUCINA</span>
                  </DropDownText>
                </RouterLink>
              </DropDownContainer>
            </Li>
            <Li>
              <RouterLink
                to="/ristorante-sul-mare"
                exact
                activeStyle={{ borderBottom: "0.25rem solid #fff" }}
              >
                <TextContainer>
                  <span>RISTORANTE</span>
                </TextContainer>
              </RouterLink>
            </Li>
            <Li>
              <RouterLink
                to="/dehors"
                exact
                activeStyle={{ borderBottom: "0.25rem solid #fff" }}
              >
                <TextContainer>
                  <span>DEHORS</span>
                </TextContainer>
              </RouterLink>
            </Li>
            <Li>
              <RouterLink
                to="/dintorni"
                exact
                activeStyle={{
                  borderBottom: "0.25rem solid #fff",
                }}
              >
                <TextContainer>
                  <span>DINTORNI</span>
                </TextContainer>
              </RouterLink>
            </Li>
            <Li>
              <RouterLink
                to="/contatti"
                exact
                activeStyle={{ borderBottom: "0.25rem solid #fff" }}
              >
                <TextContainer>
                  <span>CONTATTI</span>
                </TextContainer>
              </RouterLink>
            </Li>
            <Li
              scrolled={scrolled || props.scrolled}
              onClick={pushHistory}
              book
            >
              <TextContainer book>
                <span>PRENOTA</span>
              </TextContainer>
            </Li>
          </Ul>
        </Nav>
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  z-index: 999 !important;
  box-shadow: ${(props) =>
    props.scrolled && "0rem 0.3rem 0.8rem -0.2rem rgba(0,0,0, 35%)"};
  background: ${(props) => (props.scrolled ? "#5DA9AD" : "transparent")};
`;

const HeaderElement = styled.header`
  width: 100%;
  max-width: 100%;
  height: ${(props) => (props.scrolled ? "8rem" : "10rem")};
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s;
  position: relative;
  @media screen and (max-width: 576px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 400px) {
    height: ${(props) => (props.scrolled ? "6rem" : "8rem")};
  }
  @media screen and (max-width: 339px) {
    height: ${(props) => (props.scrolled ? "6rem" : "7rem")};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  cursor: pointer;
  img {
    height: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIcon = styled(AiOutlineMenu)`
  font-size: calc(2.2rem + 0.9vw);
  color: #fff;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1236px) {
    display: block;
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: calc(2.2rem + 0.9vw);
  color: #fff;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1236px) {
    display: block;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  @media screen and (max-width: 1236px) {
    flex-direction: column;
    position: absolute;
    right: ${(props) => (props.active ? 0 : "-30rem")};
    top: 100%;
    background: ${(props) =>
      props.scrolled ? "#5da9ad" : "rgba(93,169,173, 90%)"};
    box-shadow: 0 0.3rem 0.8rem -0.2rem rgba(0, 0, 0, 60%);
    border-radius: ${(props) => !props.scrolled && "0.3rem"};
    transition: right 0.5s;
    padding: 0rem 4rem 1.5rem;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  position: relative;
  /* :hover {
    > div {
      opacity: 1;
      visibility: visible;
    }
  } */
  ${(props) =>
    props.book &&
    css`
      border: 0.15rem solid #fff;
      background: ${(props) =>
        props.scrolled ? "rgba(0, 0, 0, 10%)" : "rgba(0, 0, 0, 20%)"};
      transition: background 0.2s;
      :hover {
        background: ${(props) =>
          props.scrolled ? "rgba(0, 0, 0, 20%)" : "rgba(0, 0, 0, 40%)"};
      }
    `}
  @media screen and (max-width: 1400px) {
    margin-left: 1rem;
  }
  @media screen and (max-width: 1236px) {
    margin: 1rem 0;
  }
`;

const TextContainer = styled.div`
  padding: 0.8rem 2rem;
  padding-right: ${(props) => props.solution && "1rem"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease-in;
  border-radius: 0.5rem;
  border-bottom: ${(props) => props.solution && "0.25rem solid transparent"};
  font-weight: ${(props) => (props.book ? 400 : 300)};
  span {
    color: #fff;
    font-size: calc(1.15rem + 0.3vw);
    transition: color 0.3s;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  transition: transform 0.2s;
`;

const DropdownIcon = styled(RiArrowDropDownFill)`
  width: 100%;
  height: 100%;
  color: #fff;
`;

const DropDownContainer = styled.div`
  position: absolute;
  bottom: -210%;
  background: #fff;
  left: 50%;
  transform: translateX(-50%);
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0rem 0.2rem 0.6rem rgba(0, 0, 0, 30%);
  flex-direction: column;
  z-index: 999999;
  border-radius: 0.2rem;
  padding: 1rem 0;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: all 0.3s;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const DropDownText = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 1rem 0;
  text-align: center;
  color: rgba(91, 112, 131, 0.7);
  :hover {
    color: rgba(91, 112, 131, 1);
  }
  span {
    transition: color 0.2s;
    font-size: calc(0.95rem + 0.3vw);
  }
`;

const RouterLink = styled(NavLink)`
  text-decoration: none;
  height: 100%;
  color: inherit;
  width: 100%;
  border-bottom: ${(props) =>
    props.logo ? "none" : "0.25rem solid transparent"};
  position: relative;
  ::after {
    position: absolute;
    width: 0%;
    opacity: 0;
    content: "";
    border-bottom: ${(props) => (props.logo ? "none" : "0.25rem solid #fff")};
    transition: width 0.4s, opacity 0.4s;
  }
  &:hover {
    ::after {
      width: ${(props) => (props.logo ? 0 : "100%")};
      opacity: 1;
    }
  }
`;
