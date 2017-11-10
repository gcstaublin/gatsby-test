import React from "react";
import PropTypes from 'prop-types'


import styles from './style.module.scss';



const DoItem = ({ imgSrc, type, text }) => {
  const typeHead = type;
  return (
    <div className={ `${styles.container} ${styles.another}` }>
      <h4 className={`uni-subhead uni-margin--half--btm ${styles.headline}` }>{typeHead}</h4>
      <p className="uni-text--micro uni-margin--one--btm">{text}</p>
      <div className={ styles.imgContainer }>
        { type !== 'yep' ? <img src="http://www.screengeek.net/wp-content/uploads/2017/06/nicolas-cage.png" /> : <img src="http://cdn1-www.craveonline.com/assets/uploads/2014/10/Nicolas-Cage-Con-Air.jpg" /> }
      </div>
    </div>

  );

};




DoItem.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'yep',
    'nope',
  ]),
};

DoItem.defaultProps = {
  imgSrc: 'https://i0.wp.com/media2.slashfilm.com/slashfilm/wp/wp-content/images/nicolascage-faceoff-crazy.jpg',
  type: 'yep',
  text: 'This is text right here, yo'
};





export default DoItem;






