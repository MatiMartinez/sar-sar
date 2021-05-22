import React from "react"
import styled from "styled-components"
import { FaBehance } from "react-icons/fa"

const Area = () => {
  return (
    <Container>
      <FaBehance />
    </Container>
  )
}

export default Area

const Container = styled.div`
  display: flex;
  padding: 1rem;
  border: 1px solid #d7dee0;
`
