import React from "react";
import PropTypes from 'prop-types'


import styles from './style.module.scss';



const DoContainer = ({ children, gridNum }) => {
  return (
    <div className={ styles.container }>
      {children}
    </div>

  );

};




DoContainer.propTypes = {
  gridNum: PropTypes.number,
};

DoContainer.defaultProps = {
  gridNum: '',
};





export default DoContainer;






