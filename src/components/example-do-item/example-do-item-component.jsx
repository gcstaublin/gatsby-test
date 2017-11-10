import React from "react";
import PropTypes from 'prop-types'


import styles from './style.module.scss';



const DoItemComponent = ({ children, type, text }) => {
  const typeHead = type;
  return (
    <div className={ `${styles.container} ${styles.another}` }>
      <h4 className={`uni-subhead uni-margin--half--btm ${styles.headline}` }>{typeHead}</h4>
      <p className="uni-text--micro uni-margin--one--btm">{text}</p>
      <div className={ styles.contentContainer }>
        {children}
      </div>
    </div>

  );

};




DoItemComponent.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'yep',
    'nope',
  ]),
};

DoItemComponent.defaultProps = {
  type: 'yep',
  text: 'This is text right here, yo'
};





export default DoItemComponent;






