import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';

import { AvatarGroup } from 'hudl-uniform-ui-components';


const IndexPage = () => (
  <div className="uni-env--light">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar Group Design">
        <p className="uni-text uni-margin--one--btm">Avatars Design is great!</p>
        <AvatarGroup size="profile" />
      </ExamplePageHeader>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-group/code">Go to avatar Group Code</Link>
    </div>
  </div>
)

export default IndexPage
