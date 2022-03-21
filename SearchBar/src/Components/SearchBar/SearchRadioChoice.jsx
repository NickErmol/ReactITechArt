import React from 'react';
import PropTypes from 'prop-types';

export default function SearchRadioChoice({ setMode, mode }) {
  const onValueChange = event => {
    setMode(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        value="immediate"
        name="searchChoice"
        checked={mode === 'immediate'}
        onChange={onValueChange}
      />{' '}
      Immediate reaction
      <input
        type="radio"
        value="afterEnter"
        name="searchChoice"
        checked={mode === 'afterEnter'}
        onChange={onValueChange}
      />{' '}
      Search after enter is pressed
      <input
        type="radio"
        value="afterTimeOut"
        name="searchChoice"
        checked={mode === 'afterTimeOut'}
        onChange={onValueChange}
      />{' '}
      Search after the user stopped typing
    </div>
  );
}

SearchRadioChoice.propTypes = {
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
