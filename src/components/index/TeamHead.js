import React from "react"
import styled from "styled-components"
import { MdLocationOn } from "react-icons/md"

const TeamHead = () => {
  return (
    <Container>
      <MdLocationOn color="#698c95" size="2rem" />
      <TextTitle>Nuestra ubicación</TextTitle>
    </Container>
  )
}

export default TeamHead

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`

const TextTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`
