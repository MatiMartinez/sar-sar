import React from "react"
import styled from "styled-components"
import { GoLaw } from "react-icons/go"

const Footer = () => {
  return (
    <Container>
      <ContactWrapper></ContactWrapper>
      <TextWrapper>
        <TextTitle>2010 -2021 LoremIpsum. All Rights Reserved.</TextTitle>
        <TextText>
          Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac
          aenean vel torquent
        </TextText>
      </TextWrapper>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  background-color: #d7dee0;
  color: #333333;
`

const ContactWrapper = styled.div``

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 2rem 8rem;
`

const TextTitle = styled.h2`
  font-size: 1rem;
`

const TextText = styled.span`
  font-size: 0.75rem;
`
