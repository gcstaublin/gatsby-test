import React from "react";
import PropTypes from 'prop-types'

import ExampleTheme from '../example-theme-controls/example-theme-controls'

import styles from './style.module.scss';



const ExampleSection = ({ children, title }) => {
  return (
    <article className={ styles.section }>
      { title !== '' ?
        <h2 className="uni-headline--2 uni-margin--two--btm">{title}</h2> : null
      }


      {children}
    </article>

  );

};




ExampleSection.propTypes = {
  title: PropTypes.string,
};

ExampleSection.defaultProps = {
  title: '',
};





export default ExampleSection;






