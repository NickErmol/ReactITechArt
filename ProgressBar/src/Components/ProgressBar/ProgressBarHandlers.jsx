import React from 'react';
import PropTypes from 'prop-types';
import style from './ProgressBarHandlers.module.css';

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

  const handleIncreaseValue = () => {
    if (value < maxValue) setValue(value + 1);
  };

  const handleDecreaseValue = () => {
    if (value > minValue) setValue(value - 1);
  };

  return (
    <div className={style.container}>
      <button type="button" onClick={handleDecreaseValue}>
        -
      </button>
      <input type="number" value={value} onChange={eventInputHandler} />
      <button type="button" onClick={handleIncreaseValue}>
        +
      </button>
    </div>
  );
}

ProgressBarHandlers.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default ProgressBarHandlers;
