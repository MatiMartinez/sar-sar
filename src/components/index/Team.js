import React from "react"
import styled from "styled-components"
import Location from "./Location"
import TeamHead from "./TeamHead"

const Team = () => {
  return (
    <Container id="about-us">
      <TeamHead />
      <Location />
    </Container>
  )
}

export default Team

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8rem;
  padding: 8rem 0;
  background-color: #d7dee0;
`
