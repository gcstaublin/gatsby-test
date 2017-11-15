import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../../../components/example-page-header/example-page-header';
import ExampleComponent from '../../../../../components/example-item-component/example-item-component';

import { AvatarGroup } from 'hudl-uniform-ui-components';



const IndexPage = () => (
  <div className="uni-env--dark">
    <div className="uni-bg--level0 uni-pad--two">
      <ExamplePageHeader pageTitle="Avatar Group Code">
        <p className="uni-text uni-margin--one--btm">Avatars code is great!</p>
      </ExamplePageHeader>

      <ExampleComponent
        text="The group avatar is used for a collection of individuals within a team or organization, such as Coaches or Quarterbacks."
        idLink="avatar-group"
        title="Avatar Group"
        status="stable">
        <AvatarGroup size="profile" />
        <AvatarGroup size="profile"  />
      </ExampleComponent>

      <br /> <br />
      <Link className="uni-link" to="/components/avatars/">Avatars</Link>
      <br /> <br />
      <Link className="uni-link" to="/components/avatars/avatar-group/design">Go to Avatar Group Design</Link>
    </div>
  </div>
)

export default IndexPage
