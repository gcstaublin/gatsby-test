import React from "react";
import PropTypes from 'prop-types'


const ButtonRow = ({ children, space }) => {
  return (
    <div className={"uni-btn__row--" + space}>
      {children}
    </div>
  );
};


ButtonRow.propTypes = {
  space: PropTypes.oneOf([
    'eighth',
    'quarter',
    'half',
    'one',
    'one-and-half',
    'two',
    'three',
    'four',
  ]),
  children: PropTypes.node,
};

ButtonRow.defaultProps = {
  space: 'half',
};



export default ButtonRow;