import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      firm: file(relativePath: { eq: "firm.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920)
        }
      }
    }
  `)

  const firm = getImage(data.firm)

  return (
    <Container>
      <PaddingWrapper>
        <TextWrapper>
          <TextDescription>
            Lorem ipsum dolor sit amet consectetur adipiscing elit donec aliquam
            nisi magnis bibendum, diam duis per orci posuere massa facilisis
            habitant vehicula non aenean. Rhoncus nisl metus dictumst
            condimentum magna lacinia sed aenean class, proin eros ornare
            natoque fames accumsan commodo posuere iaculis euismod, fringilla ad
            duis tortor dignissim ac faucibus volutpat.
          </TextDescription>
          <ButtonToMaps>Ver Maps</ButtonToMaps>
        </TextWrapper>
      </PaddingWrapper>
      <ImageWrapper>
        <CustomGatsbyImage image={firm} alt="firm" />
      </ImageWrapper>
    </Container>
  )
}

export default Location

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    padding: 0 2rem;
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 375px) {
    padding: 0;
  }
`

const PaddingWrapper = styled.div`
  padding-left: 8rem;

  @media (max-width: 768px) {
    padding: 0;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  row-gap: 2rem;
  background-color: #333333;
  color: #d7dee0;

  @media (max-width: 375px) {
    padding: 2rem 2rem;
  }
`

const TextDescription = styled.p`
  font-size: 1rem;
`

const ButtonToMaps = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  width: max-content;
  background-color: #333333;
  color: #d7dee0;
  border: 2px solid #d7dee0;
  cursor: pointer;
  margin-left: auto;
`

const ImageWrapper = styled.div`
  position: relative;
  min-height: 200px;
`

const CustomGatsbyImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
