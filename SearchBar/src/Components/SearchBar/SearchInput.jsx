/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

export default function SearchInput({
  onSearch,
  mode,
  onKeyPress,
  placeholder,
}) {
  const handler =
    mode === 'afterEnter' ? { onKeyPress } : { onChange: onSearch };
  return (
    <div>
      <input placeholder={placeholder} {...handler} />
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
  onSearch: PropTypes.func,
  mode: PropTypes.string.isRequired,
};
