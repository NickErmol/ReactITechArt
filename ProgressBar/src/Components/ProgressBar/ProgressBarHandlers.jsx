/* eslint-disable react/prop-types */
import React from 'react';
import s from './ProgressBarHandlers.module.css';

function ProgressBarHandlers({ setValue, value }) {
  const minValue = 0;
  const maxValue = 100;
  const eventInputHandler = event => {
    const inputValue = Math.max(
      minValue,
      Math.min(maxValue, event.target.value),
    );
    setValue(inputValue);
  };

  const eventBtnInc = () => {
    if (value < maxValue) setValue(value + 1);
  };

  const eventBtnDec = () => {
    if (value > minValue) setValue(value - 1);
  };

  return (
    <div className={s.container}>
      <button type="button" onClick={eventBtnDec}>
        -
      </button>
      <input type="number" value={value} onChange={eventInputHandler} />
      <button type="button" onClick={eventBtnInc}>
        +
      </button>
    </div>
  );
}

export default ProgressBarHandlers;
