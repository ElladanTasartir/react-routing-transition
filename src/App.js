import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BodyStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const Nav = styled.nav`
  z-index: 10;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 5px #000;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  padding: 0;
  margin: 0;
  flex-direction: column;
  justify-content: flex-start;
`;

const ContainerPages = styled.div`
  display: flex;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
`;

const PaginaCor = styled(motion.div)`
  background-color: ${(props) => props.corDaPagina};
  flex: 1;
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
`;

const navLinkStyle = {
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "20px",
};

export default function App() {
  return (
    <>
      <BodyStyle />
      <BrowserRouter>
        <Container>
          <Nav>
            <NavLink style={navLinkStyle} to="/pagina1">
              Página 1
            </NavLink>
            <NavLink style={navLinkStyle} to="/pagina2">
              Página 2
            </NavLink>
            <NavLink style={navLinkStyle} to="/pagina3">
              Página 3
            </NavLink>
          </Nav>
          <ContainerPages>
            <Paginas />
          </ContainerPages>
        </Container>
      </BrowserRouter>
    </>
  );
}

function Paginas() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path="/pagina1" component={Pagina1} />
        <Route path="/pagina2" component={Pagina2} />
        <Route path="/pagina3" component={Pagina3} />
      </Switch>
    </AnimatePresence>
  );
}

const slide = {
  mostrar: {
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
  esconder: {
    x: "-100%",
    opacity: 0,
  },
  inicial: {
    x: "100%",
  },
};

function Pagina1() {
  return (
    <PaginaCor
      corDaPagina="steelblue"
      variants={slide}
      animate="mostrar"
      initial="inicial"
      exit="esconder"
    />
  );
}
function Pagina2() {
  return (
    <PaginaCor
      corDaPagina="limegreen"
      variants={slide}
      animate="mostrar"
      initial="inicial"
      exit="esconder"
    />
  );
}
function Pagina3() {
  return (
    <PaginaCor
      corDaPagina="gold"
      variants={slide}
      animate="mostrar"
      initial="inicial"
      exit="esconder"
    />
  );
}
