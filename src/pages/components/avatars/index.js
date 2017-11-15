import React from 'react'
import Link from 'gatsby-link'

import ExamplePageHeader from '../../../components/example-page-header/example-page-header';


const IndexPage = () => (
  <div>
    <ExamplePageHeader pageTitle="Avatars Overview">
      <p>Avatars are great!</p>
    </ExamplePageHeader>


    {/* Avatar User */}
    <div className="uni-margin--two--top">
      <h4 className="uni-subhead uni-margin--quarter--btm">Avatar User</h4>
      <Link className="uni-link" to="/components/avatars/avatar-user/code/">Avatar User Code</Link>
      <span className="uni-pad--one--horiz">|</span>
      <Link className="uni-link" to="/components/avatars/avatar-user/design/">Avatar User Design</Link>
    </div>


    {/* Avatar Team */}
    <div className="uni-margin--two--top">
      <h4 className="uni-subhead uni-margin--quarter--btm">Avatar Team</h4>
      <Link className="uni-link" to="/components/avatars/avatar-team/code/">Avatar Team Code</Link>
      <span className="uni-pad--one--horiz">|</span>
      <Link className="uni-link" to="/components/avatars/avatar-team/design/">Avatar Team Design</Link>
    </div>


    {/* Avatar Org */}
    <div className="uni-margin--two--top">
      <h4 className="uni-subhead uni-margin--quarter--btm">Avatar Org</h4>
      <Link className="uni-link" to="/components/avatars/avatar-org/code/">Avatar Org Code</Link>
      <span className="uni-pad--one--horiz">|</span>
      <Link className="uni-link" to="/components/avatars/avatar-org/design/">Avatar Org Design</Link>
    </div>


    {/* Avatar Group */}
    <div className="uni-margin--two--top">
      <h4 className="uni-subhead uni-margin--quarter--btm">Avatar Group</h4>
      <Link className="uni-link" to="/components/avatars/avatar-group/code/">Avatar Group Code</Link>
      <span className="uni-pad--one--horiz">|</span>
      <Link className="uni-link" to="/components/avatars/avatar-group/design/">Avatar Group Design</Link>
    </div>

  </div>
)

export default IndexPage
