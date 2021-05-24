import React from "react"
import styled from "styled-components"
import { FaBeer } from "react-icons/fa"

const Area = ({ title, description }) => {
  return (
    <Container>
      <IconWrapper>
        <FaBeer size="1.5rem" />
      </IconWrapper>
      <TextWrapper>
        <TextTitle>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </TextWrapper>
    </Container>
  )
}

export default Area

const Container = styled.div`
  display: flex;
  column-gap: 1rem;
  padding: 2rem;
  border: 1px solid #d7dee0;
`

const IconWrapper = styled.div``

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const TextTitle = styled.h1`
  font-size: 1rem;
`

const TextDescription = styled.p`
  font-size: 0.75rem;
`
