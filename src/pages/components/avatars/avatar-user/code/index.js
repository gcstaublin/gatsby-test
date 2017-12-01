import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';
import ExampleComponent from '../../../../../components/example-item-component/example-item-component';




const IndexPage = () => (
  <div className="uni-env--dark">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar User Code">
        <p className="uni-text uni-margin--one--btm">Avatars code is great!</p>
      </ExamplePageHeader>

      <ExampleComponent
        text="The user avatar is used to represent individuals across Hudl."
        idLink="avatar-user"
        title="Avatar User"
        status="stable">
        Removed
      </ExampleComponent>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-user/design">Go to Avatar User Design</Link>
    </div>
  </div>
)

export default IndexPage
