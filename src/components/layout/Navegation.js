import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { CgMenu, CgClose } from "react-icons/cg"

const Navegation = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false)
  }

  function handleCloseAfter() {
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  return (
    <Container>
      <div></div>
      <Menu>
        {isOpen ? (
          <CgClose onClick={handleClose} size="1.5rem" />
        ) : (
          <CgMenu onClick={handleOpen} size="1.5rem" />
        )}
      </Menu>
      <Nav $isOpen={isOpen}>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="index"
          onClick={handleCloseAfter}
        >
          inicio
        </NavLink>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="services"
          onClick={handleCloseAfter}
        >
          servicios
        </NavLink>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="about-us"
          onClick={handleCloseAfter}
        >
          nosotros
        </NavLink>
        <NavLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          to="contact"
          onClick={handleCloseAfter}
        >
          contacto
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

const Menu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    height: 1.5rem;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    position: fixed;
    top: 80px;
    left: ${p => (p.$isOpen ? "0" : "-100%")};
    transition: all 0.5s;
    background-color: #ffffff;
    box-shadow: ${p =>
      p.$isOpen ? "rgba(0, 0, 0, 0.24) 0px 3px 8px" : "none"};
  }
`

const NavLink = styled(Link).attrs(() => ({
  activeClass: "active",
}))`
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
  font-variant: small-caps;
  color: #777a7c;
  cursor: pointer;

  &.active {
    color: #34464a;
  }

  :hover {
    color: #698c95;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    padding: 1.5rem 0;
  }
`
