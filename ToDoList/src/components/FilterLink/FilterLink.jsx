import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilterStatus, StatusFilters } from '../../slicers/filterSlice';
import style from './FilterLink.module.css';

function FilterLink({ value, selectedStatus }) {
  const dispatch = useDispatch();
  const key = StatusFilters[value];
  const handleClick = useCallback(
    () => dispatch(changeFilterStatus(key)),
    [key, dispatch],
  );
  const className = useMemo(
    () => (key === selectedStatus ? style.selected : ''),
    [key, selectedStatus],
  );

  return (
    <button type="button" className={className} onClick={handleClick}>
      {value}
    </button>
  );
}

FilterLink.propTypes = {
  value: PropTypes.string.isRequired,
  selectedStatus: PropTypes.string.isRequired,
};

export default FilterLink;
