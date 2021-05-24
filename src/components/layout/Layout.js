import React from "react"
import styled from "styled-components"
import "./layout.css"
import Navegation from "./Navegation"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navegation />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout

const Main = styled.main`
  padding-top: 80px;
`
