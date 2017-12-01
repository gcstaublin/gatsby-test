import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';
import ExampleComponent from '../../../../../components/example-item-component/example-item-component';




const IndexPage = () => (
  <div className="uni-env--dark">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar Team Org">
        <p className="uni-text uni-margin--one--btm">Avatars org is great!</p>
      </ExamplePageHeader>

      <ExampleComponent
        text="An org avatar represents an organization, school or brand."
        idLink="avatar-org"
        title="Avatar Org"
        status="stable">
        Removed
      </ExampleComponent>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-org/design">Go to Avatar Org Design</Link>
    </div>
  </div>
)

export default IndexPage
