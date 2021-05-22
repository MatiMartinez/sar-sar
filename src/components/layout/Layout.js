import React from "react"
import styled from "styled-components"
import "./layout.css"
import Navegation from "./Navegation"

const Layout = ({ children }) => {
  return (
    <>
      <Navegation />
      <Main>{children}</Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  padding-top: 80px;
`
