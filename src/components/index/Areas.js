import React from "react"
import styled from "styled-components"
import Area from "./Area"

const Areas = () => {
  return (
    <Container id="services">
      <TextTitle>Lorem ipsum dolor sit</TextTitle>
      <AreaWrapper>
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
        <Area
          title="Lorem ipsum"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit felis, ac aenean vel torquent fusce aliquam luctus aptent est, cum facilisi sed molestie lacinia ridiculus rhoncus."
        />
      </AreaWrapper>
    </Container>
  )
}

export default Areas

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  padding: 4rem 8rem 8rem 8rem;
  background-color: #333333;
  color: #d7dee0;

  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 375px) {
    padding: 4rem 2rem;
  }
`

const TextTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`

const AreaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`
