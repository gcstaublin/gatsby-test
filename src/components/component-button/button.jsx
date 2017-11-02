import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ buttonType, type, style, size, status, icon, text, disabled, isBlock, onClick, qaId }) => {
  const buttonClasses = classNames(
    'uni-btn' + (type ? '--' + type : '') + (style ? '--' + style : ''),
    {
      [`uni-btn--${size}`]: size,
      'uni-btn--icon-only': text === undefined || null || '',
      [`uni-btn--is-${status}`]: status,
      'uni-btn--block': isBlock,
    }
  );

  return (
    <button
      type={buttonType}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      data-qa-id={qaId}>
      {icon ? React.cloneElement(icon, {isButtonIcon: true}) : null}
      { status
        ? <span className="uni-btn__content-container">{text}</span>
        : text
      }
    </button>
  );
};

Button.__VIABLE_SECONDARYNAV_CONTROL = true;

Button.propTypes = {
  buttonType: PropTypes.oneOf([
    'button',
    'reset',
    'submit',
  ]),
  type: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  status: PropTypes.oneOf([
    'spinning',
    'success',
    'failure',
  ]),
  icon: PropTypes.element,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func,
  qaId: PropTypes.string,
};

Button.defaultProps = {
  size: 'medium',
};

export default Button;