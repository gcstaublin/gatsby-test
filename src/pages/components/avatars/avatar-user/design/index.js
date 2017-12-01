import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';



const IndexPage = () => (
  <div className="uni-env--light">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar User Design">
        <p className="uni-text uni-margin--one--btm">Avatars design is great!</p>
        Removed
      </ExamplePageHeader>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-user/code">Go to avatar user Code</Link>
    </div>
  </div>
)

export default IndexPage
