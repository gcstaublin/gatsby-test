import React from "react";

import styles from './nav.module.css';

console.log(styles);



const Nav = ({ children }) => {

  return (
    <nav className="unidocs-subnav">

      <h4 className="unidocs-subnav__header">Information</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/" className="uni-text--small unidocs-subnav__link selected">Getting Started</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/theming" className="uni-text--small unidocs-subnav__link ">Auto Theming</a>
      </li>

      </ul>

      <h4 className="unidocs-subnav__header">Configuration</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/variables" className="uni-text--small unidocs-subnav__link ">Variables</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/variables-deprecated" className="uni-text--small unidocs-subnav__link ">Deprecated Variables</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/zindex" className="uni-text--small unidocs-subnav__link ">Z-Index + Elevation</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/mixins" className="uni-text--small unidocs-subnav__link ">Mixins</a>
      </li>

      </ul>

      <h4 className="unidocs-subnav__header">Element Styling</h4>
      <ul className="unidocs-subnav__items">

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/type" className="uni-text--small unidocs-subnav__link ">Type</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/links" className="uni-text--small unidocs-subnav__link ">Links</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/buttons" className="uni-text--small unidocs-subnav__link ">Buttons</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/forms" className="uni-text--small unidocs-subnav__link ">Forms</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/avatars" className="uni-text--small unidocs-subnav__link ">Avatars</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/selectmark" className="uni-text--small unidocs-subnav__link ">Selectmark</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/modals" className="uni-text--small unidocs-subnav__link ">Modals</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/selects" className="uni-text--small unidocs-subnav__link ">Selects</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/icons" className="uni-text--small unidocs-subnav__link ">Icons</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/space" className="uni-text--small unidocs-subnav__link ">Space classNamees</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/environment-level" className="uni-text--small unidocs-subnav__link ">Environment + Level</a>
      </li>

      <li className="unidocs-subnav__item">
        <a href="/uniform-ui-docs/web/css/toasts" className="uni-text--small unidocs-subnav__link ">Toasts</a>
      </li>

      </ul>

</nav>
  );
};



export default Nav;