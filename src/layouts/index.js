import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Nav from '../components/navigation/nav';

import './index.css'

const Header = () => (
<header className="uni-grid__row unidocs-primaryheader">
  <nav className="u-float--left">
    <h2 className="unidocs-primaryheader__title">
      <a className="unidocs-primaryheader__link" href="/">xxxxxx</a>
    </h2>
    <ul className="unidocs-primarynav">
      <li className="unidocs-primarynav__item">
        <a href="/" className="unidocs-primarynav__link">xxxx</a>
      </li>
    </ul>
  </nav>

  <nav className="u-float--right">
    <ul className="unidocs-primarynav">
      <li className="unidocs-primarynav__item">
        <a href="/" className="unidocs-primarynav__link ">xxxx</a>
      </li>
    </ul>
  </nav>
</header>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <section className="unidocs-content l-web uni-margin--three--top">
      <div className="l-web-secondary">
        <Nav />
      </div>

      <div className="l-web-main fade-in">
        <div className="l-web-inner">
          {children()}
        </div>
      </div>

    </section>

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
