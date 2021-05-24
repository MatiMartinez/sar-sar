import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Navegation = () => {
  return (
    <Container>
      <div></div>
      <Nav>
        <NavLink
          activeStyle={{
            color: "#698c95",
          }}
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#698c95",
          }}
          to="/a"
        >
          Nosotros
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#698c95",
          }}
          to="/b"
        >
          Servicios
        </NavLink>
        <NavLink
          activeStyle={{
            color: "#698c95",
          }}
          to="/c"
        >
          Contacto
        </NavLink>
      </Nav>
    </Container>
  )
}

export default Navegation

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  border-bottom: 1px solid #d7dee0;
  background-color: #ffffff;
  z-index: 999;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 3rem;
`

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: #777a7c;

  :hover {
    color: #698c95;
  }
`
