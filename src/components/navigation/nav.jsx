import React from "react";
import Link from 'gatsby-link'

import styles from './nav.module.css';

console.log(styles);



const Nav = ({ children }) => {

  return (
    <nav className="unidocs-subnav">

      <h4 className="unidocs-subnav__header">Information</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link selected">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      </ul>

      <h4 className="unidocs-subnav__header">Configuration</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      </ul>

      <h4 className="unidocs-subnav__header">Element Styling</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <Link to="/components/avatars">xxxxxx</Link>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/" className="uni-text--small unidocs-subnav__link ">xxxxxx</a>
      </li>

      </ul>

</nav>
  );
};



export default Nav;