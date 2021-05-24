import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <Container>
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
  row-gap: 0.5rem;
  padding: 8rem;
  width: 60%;
`

const TextHead = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #698c95;
`

const TextTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  font-family: "IBM Plex Serif", serif;
`

const TextDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
`
