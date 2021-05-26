import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <Container id="index">
      {/** Text hero */}
      <TextHead>Lorem ipsum dolor sit amet</TextHead>
      <TextTitle>Lorem ipsum dolor sitamet</TextTitle>
      <TextDescription>
        Lorem ipsum dolor sit amet consectetur adipiscing elit dui ornare ac
        bibendum, quisque arcu fusce pulvinar integer taciti vestibulum dapibus
        praesent conubia.
      </TextDescription>
    </Container>
  )
}

export default Hero

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.75rem;
  padding: 0 10rem;
  width: 60%;
  min-height: calc(100vh - 230px);

  @media (max-width: 1024px) {
    padding: 0 6rem;
  }

  @media (max-width: 768px) {
    padding: 0 4rem;
    width: 80%;
    min-height: calc(90vh - 180px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    padding: 0 2rem;
  }
`

const TextHead = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #698c95;
`

const TextTitle = styled.h1`
  font-size: 3.25rem;
  font-weight: 700;
  font-family: "IBM Plex Serif", serif;
`

const TextDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`
