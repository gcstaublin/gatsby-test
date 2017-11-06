import React from "react";
import PropTypes from 'prop-types'

import ExampleTheme from '../example-theme-controls/example-theme-controls'

import styles from './style.module.scss';



const ExampleComponent = ({ children, idLink, title, status, text, hasTheme }) => {
  return (
    <article className="unidocs-example__container">
      <h3 id={ idLink } className="unidocs-example__hdr">
        <a className="unidocs-example__hdr-link" href={"#" + idLink }>#</a>
        {title}
        <span className={"unidocs-example__status unidocs-example__status--" + status}></span>
      </h3>


      <div className={"uni-text unidocs-example__text " + styles.test }>
        {text}
      </div>


      <div className="unidocs-example__section unidocs-example__section--has-theme-btns uni-env--light">
        <div className="unidocs-example__section-inner js-section__inner uni-bg--level0">
          { hasTheme !== 'false' ? <ExampleTheme id={idLink} /> : null }

          {children}
        </div>
      </div>
    </article>

  );

};




ExampleComponent.propTypes = {
  title: PropTypes.string,
  idLink: PropTypes.string,
  status: PropTypes.oneOf([
    'stable',
    'prototype',
    'deprecated',
    'removed',
  ]),
  text: PropTypes.string,
  hasTheme: PropTypes.boolean,
};

ExampleComponent.defaultProps = {
  title: 'Default Title Props',
  idLink: 'default-id-link',
  status: 'prototype',
  text: 'This is text about this example component',
  hasTheme: true,
};





export default ExampleComponent;






