import React from "react"
import styled from "styled-components"
import Location from "./Location"
import AboutHead from "./AboutHead"

const About = () => {
  return (
    <Container id="about-us">
      <AboutHead />
      <Location />
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 4rem;
  padding: 4rem 0;
  background-color: #d7dee0;
`
