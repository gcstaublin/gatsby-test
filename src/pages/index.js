import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../components/example-page-header/example-page-header';



const IndexPage = () => (
  <div>
    <ExamplePageHeader pageTitle="This is a Gatsby test, yo">
      <p>This site is an experiment in testing how well Gatsby might work for documentation sites.</p>
    </ExamplePageHeader>

    <br /> <br />
    <Link className="uni-link" to="/page-2/">Go to page 2</Link>
    <br /> <br />
    <Link className="uni-link" to="/buttons/buttons/">Go to Buttons Page</Link>
    <br /> <br />
    <Link className="uni-link" to="/tokens/color/">Go to Color Page</Link>
    <br /> <br />
    <Link className="uni-link" to="/links/links/">Go to Links Page</Link>
    <br /> <br />
    <Link className="uni-link" to="/color/color/">Go to Color page created in code</Link>
  </div>
)

export default IndexPage
