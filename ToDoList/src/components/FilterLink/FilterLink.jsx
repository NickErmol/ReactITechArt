import React from 'react';
import PropTypes from 'prop-types';
import style from './FilterLink.module.css';
import { StatusFilters } from '../../features/filterSlice';

function FilterLink({ value, status, onChange }) {
  const key = StatusFilters[value];
  const handleClick = () => onChange(key);
  const className = key === status ? style.selected : '';

  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

FilterLink.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterLink;
