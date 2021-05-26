import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Container id="contact">
      <TopContainer>
        <TextLogo>Lorem Ipsum</TextLogo>
        <InformationWrapperRight>
          <TextTitleBold>Horarios</TextTitleBold>
          <TextText>Lunes, 9:00hs-12:30hs / 17:00hs-20:00hs</TextText>
          <TextText>Martes, 9:00hs-12:30hs / 17:00hs-20:00hs</TextText>
          <TextText>Miércoles, 9:00hs-12:30hs / 17:00hs-20:00hs</TextText>
          <TextText>Jueves, 9:00hs-12:30hs / 17:00hs-20:00hs</TextText>
          <TextText>Viernes, 9:00hs-12:30hs</TextText>
          <TextText>Sábados, Cerrado</TextText>
          <TextText>Domingos, Cerrado</TextText>
        </InformationWrapperRight>
      </TopContainer>
      <MiddleContainer>
        <TextLogo>Lorem Ipsum</TextLogo>
        <ContactWrapper>
          <InformationWrapper>
            <TextTitleBold>Contacto</TextTitleBold>
            <TextText>(0263) 442-1933</TextText>
          </InformationWrapper>
          <InformationWrapper>
            <TextTitleBold>Dirección</TextTitleBold>
            <TextText>Boulogne Sur Mer 52, San Martín - Mendoza</TextText>
          </InformationWrapper>
        </ContactWrapper>
      </MiddleContainer>
      <BotContainer>
        <TextTitleRegular>
          2010 -2021 LoremIpsum. All Rights Reserved.
        </TextTitleRegular>
        <TextText>
          Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac
          aenean vel torquent
        </TextText>
      </BotContainer>
    </Container>
  )
}

export default Footer

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: #333333;
  color: #d7dee0;
`

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem;

  @media (max-width: 425px) {
    flex-direction: column;
    row-gap: 1.5rem;
  }
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1.5rem;
  }
`

const TextLogo = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  font-style: italic;
`

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
`

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 0.25rem;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`

const InformationWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 0.25rem;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`

const TextTitleBold = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`

const BotContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 3rem 2rem;
`

const TextTitleRegular = styled.h2`
  font-size: 1.25rem;
`

const TextText = styled.span`
  font-size: 0.9rem;
`
