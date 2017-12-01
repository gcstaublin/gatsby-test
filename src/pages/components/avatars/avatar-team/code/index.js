import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';
import ExampleComponent from '../../../../../components/example-item-component/example-item-component';




const IndexPage = () => (
  <div className="uni-env--dark">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar Team Code">
        <p className="uni-text uni-margin--one--btm">Avatars code is great!</p>
      </ExamplePageHeader>

      <ExampleComponent
        text="The team avatar is used to represent teams within Hudl. By default a team's sport will be displayed."
        idLink="avatar-team"
        title="Avatar Team"
        status="stable">
        Removed
      </ExampleComponent>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-team/design">Go to Avatar Team Design</Link>
    </div>
  </div>
)

export default IndexPage
