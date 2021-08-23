import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
    <h1>About me</h1>
      <p>Hello world! I’m a professional with ten- year marketing experience and is now taking a new journey towards web design and development. Here’s my portfolio! For more in-depth information on my development projects visit my github.
      </p>
      <p>Personal <a href="www.danischwarz.com" target="_blank" rel="noreferrer">Portfolio</a></p>
    </Layout>
  )
}

export default aboutPage