import * as React from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
import Hero from "../components/index/Hero"
import ImageContact from "../components/index/ImageContact"
import Areas from "../components/index/Areas"
import Team from "../components/index/Team"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ImageContact />
    <Areas />
    <Team />
  </Layout>
)

export default IndexPage
