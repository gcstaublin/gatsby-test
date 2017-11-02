import React from "react";
import PropTypes from 'prop-types'

const ExampleTheme = ({ id }) => {
  return (
    <div className="btn--theme__container">
      <div className="btn--theme__group">
      <div className="env-switch">
       <label className="env-switch__label" for="env{{item.id}}1">
         <input className="env-switch__input js-radio--environment" type="checkbox" id="env{{item.id}}1" name={"env/"+ id } />
         <span className="env-switch__indicator"></span>
         <span className="env-switch__content env-switch__content--light">Light</span>
         <span className="env-switch__content env-switch__content--dark">Dark</span>
        </label>
      </div>
      </div>


      <div className="btn--theme__group">

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}0base" data-bg="uni-bg--level0">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}0base" checked name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L0 Base
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}0accent" data-bg="uni-bg--level0--accent">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}0accent" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L0 Accent
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}1base" data-bg="uni-bg--level1">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}1base" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L1 Base
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}1accent" data-bg="uni-bg--level1--accent">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}1accent" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L1 Accent
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}2base" data-bg="uni-bg--level2">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}2base" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L2 Base
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}2accent" data-bg="uni-bg--level2--accent">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}2accent" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L2 Accent
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}3base" data-bg="uni-bg--level3">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}3base" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L3 Base
      </label>
      </div>

      <div className="uni-form__radio-item btn--theme__item">
      <label className="uni-form__label--radio js-radio--theme" for="theme{{item.id}}3accent" data-bg="uni-bg--level3--accent">
      <input className="uni-form__input--radio" type="radio" id="theme{{item.id}}3accent" name="theme{{item.id}}" />
      <span className="uni-form__indicator--radio"></span>
      L3 Accent
      </label>
      </div>

      </div>
    </div>

  );
};


export default ExampleTheme;

