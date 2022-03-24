/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import {
  StatusFilters,
  changeFilterStatus,
  selectStatus,
} from './features/filterSlice';
import ToDoItem from './components/ToDoItem/ToDoItem';
import {
  selectFilteredTodos,
  AddToDo,
  selectLastToDoId,
} from './features/toDoSlice';
import FilterLink from './components/FilterLink/FilterLink';

function App() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const filteredToDoList = useSelector(selectFilteredTodos);
  const status = useSelector(selectStatus);
  const onStatusChange = newStatus => dispatch(changeFilterStatus(newStatus));
  const lastId = useSelector(selectLastToDoId);

  const addToDo = (input, id) => {
    dispatch(AddToDo(input, id));
  };

  const handleRegistration = data => {
    resetField('toDoValue');
    addToDo(data.toDoValue, lastId);
  };

  return (
    <form className={style.app} onSubmit={handleSubmit(handleRegistration)}>
      <div className={style.app__container}>
        <div className={style.app__toDoContainer}>
          {filteredToDoList.map(item => (
            <ToDoItem
              key={item.id}
              name={item.item}
              done={item.done}
              id={item.id}
            />
          ))}
        </div>
        <div className={style.input}>
          <input type="text" {...register('toDoValue', { required: true })} />
          {errors.toDoValue?.type === 'required' && 'ToDoText is required'}
          <button type="submit">Add</button>
        </div>
      </div>
      <div className={style.app__filterContainer}>
        {Object.keys(StatusFilters).map(key => (
          <FilterLink
            key={key}
            value={key}
            status={status}
            onChange={onStatusChange}
          />
        ))}
      </div>
    </form>
  );
}

export default App;
