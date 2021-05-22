import React from "react"
import styled from "styled-components"
import Area from "./Area"

const Areas = () => {
  return (
    <Container>
      <Area />
    </Container>
  )
}

export default Areas

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
`
