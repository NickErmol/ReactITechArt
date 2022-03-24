import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import style from './ToDoItem.module.css';
import { toggleCheck, todoDeleted } from '../../features/toDoSlice';

function ToDoItem({ name, done, id }) {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(toggleCheck(id));
  };
  const onDelete = () => {
    dispatch(todoDeleted(id));
  };

  return (
    <div className={style.toDoItem}>
      <Checkbox checked={done} color="primary" onChange={handleCheck} />
      <p className={done ? style.toDoItem__done : undefined}>{name}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

ToDoItem.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default ToDoItem;
