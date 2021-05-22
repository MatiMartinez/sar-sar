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
      {/** Image */}
      <CustomGatsbyImage image={desktop} alt="desktop" />
      {/** Wrapper */}
      <TextWrapper>
        <TextInfo>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dui ornare ac
          bibendum
        </TextInfo>
      </TextWrapper>
    </Container>
  )
}

export default ImageContact

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`

const CustomGatsbyImage = styled(GatsbyImage)`
  width: 90%;
  height: 300px;
`

const TextWrapper = styled.div`
  padding: 3rem;
  background-color: #698c95;
  color: #ffffff;
  position: absolute;
  right: 8rem;
  bottom: 225px;
  width: 25%;
`

const TextInfo = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`
