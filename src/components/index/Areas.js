import React from "react"
import styled from "styled-components"
import Area from "./Area"

const Areas = () => {
  return (
    <Container>
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
`

const TextTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`

const AreaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`
