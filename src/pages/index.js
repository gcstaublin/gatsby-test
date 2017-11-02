import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1 className="uni-headline--1 uni-margin--one--btm">Hi people</h1>
    <p className="uni-text--large">Welcome to your new Gatsby site.</p>
    <p className="uni-text--large">Now go build something great.</p>
    <Link className="uni-link" to="/page-2/">Go to page 2</Link>
    <br />
    <Link className="uni-link" to="/buttons/buttons/">Go to Buttons Page</Link>
  </div>
)

export default IndexPage
