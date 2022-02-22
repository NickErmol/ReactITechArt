/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

export default function SearchBar({ setQuery, mode }) {
  let timeout = 0;

  const immediateSearchHandler = event => {
    setQuery(event.target.value);
  };

  const timeOutSearchHandler = event => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      setQuery(event.target.value);
    }, 3000);
  };

  const onEnterSearchHandler = event => {
    if (event.key === 'Enter') {
      setQuery(event.target.value);
    }
  };

  const switchMode = modeOption => {
    switch (modeOption) {
      case 'afterEnter':
        return (
          <SearchInput
            placeholder="Search"
            mode={mode}
            onKeyPress={onEnterSearchHandler}
          />
        );
      case 'afterTimeOut':
        return (
          <SearchInput
            placeholder="Search"
            mode={mode}
            onSearch={timeOutSearchHandler}
          />
        );
      default:
        return (
          <SearchInput
            placeholder="Search"
            mode={mode}
            onSearch={immediateSearchHandler}
          />
        );
    }
  };

  return <div>{switchMode(mode)}</div>;
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
