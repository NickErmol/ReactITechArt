import React from 'react';
import PropTypes from 'prop-types';

export default function SearchRadioChoice({ setMode, mode }) {
  const onValueChange = event => {
    setMode({ ...mode, selectedOption: event.target.value });
  };

  return (
    <div>
      <input
        type="radio"
        value="immediate"
        name="searchChoice"
        checked={mode.selectedOption === 'immediate'}
        onChange={onValueChange}
      />{' '}
      Immediate reaction
      <input
        type="radio"
        value="afterEnter"
        name="searchChoice"
        checked={mode.selectedOption === 'afterEnter'}
        onChange={onValueChange}
      />{' '}
      Search after enter is pressed
      <input
        type="radio"
        value="afterTimeOut"
        name="searchChoice"
        checked={mode.selectedOption === 'afterTimeOut'}
        onChange={onValueChange}
      />{' '}
      Search after the user stopped typing
    </div>
  );
}

SearchRadioChoice.propTypes = {
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.shape({
    selectedOption: PropTypes.string.isRequired,
  }).isRequired,
};
