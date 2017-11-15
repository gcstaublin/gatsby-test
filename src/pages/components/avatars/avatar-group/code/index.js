import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';

import { AvatarGroup } from 'hudl-uniform-ui-components';



const IndexPage = () => (
  <div className="uni-env--dark">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar Group Code">
        <p className="uni-text uni-margin--one--btm">Avatars code is great!</p>
        <AvatarGroup size="profile" />
      </ExamplePageHeader>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-group/design">Go to Avatar Group Design</Link>
    </div>
  </div>
)

export default IndexPage
