import React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const ImageContact = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "desktop.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1920)
        }
      }
    }
  `)

  const desktop = getImage(data.desktop)

  return (
    <Container>
      {/** Wrapper */}
      <TextWrapper>
        <TextInfo>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dui ornare ac
          bibendum
        </TextInfo>
      </TextWrapper>
      {/** Image */}
      <CustomGatsbyImage image={desktop} alt="desktop" />
      <BackImage />
    </Container>
  )
}

export default ImageContact

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BackImage = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  top: calc(50% + 1px);
  background-color: #333333;
`

const CustomGatsbyImage = styled(GatsbyImage)`
  width: 90%;
  height: 300px;
  z-index: 9;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`

const TextWrapper = styled.div`
  padding: 3rem;
  background-color: #698c95;
  color: #ffffff;
  position: absolute;
  right: 10rem;
  bottom: 225px;
  width: 25%;
  z-index: 99;

  @media (max-width: 1024px) {
    right: 6rem;
    width: 30%;
  }

  @media (max-width: 768px) {
    right: 4rem;
    bottom: 150px;
    width: 40%;
  }

  @media (max-width: 576px) {
    position: unset;
    width: 100%;
  }
`

const TextInfo = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`
