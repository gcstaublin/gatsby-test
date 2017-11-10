import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../components/example-page-header/example-page-header';



const IndexPage = () => (
  <div>
    <ExamplePageHeader pageTitle="This is a Gatsby test, yo">
      <p>This site is an experiment in testing how well Gatsby might work for the Uniform squad as we rebuild and merge our documentation sites.</p>
      <p>The first phase of this test, accomplishes two tasks: recreate a component heavy documentation page and create a page largely feed from a data source. These prototypes are not an exact 1-1 recreation. Some of the functionality and features are absent. This proof of concept to test whether we can figure out and use Gatsby to build our sites.</p>
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
