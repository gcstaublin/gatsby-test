import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './style.module.css';


const ExamplePageHeader = ({ children, pageModified, pageTitle }) => {
  return (
    <div>
      <p className="unidocs-update">
        <span className="unidocs-update__intro">Last Modified:</span>
        { pageModified }
      </p>

      <h2 className="uni-headline--1 uni-margin--half--btm uni-margin--one-and-half--top">
        { pageTitle }
      </h2>

      <div className={styles.paragraph}>
        { children }
      </div>
    </div>
  );
};


export default ExamplePageHeader;