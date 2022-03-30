import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import style from './App.module.css';
import { StatusFilters } from './slicers/filterSlice';
import selectStatus from './selectors/filterSelectors';
import ToDoItem from './components/ToDoItem/ToDoItem';
import { AddToDo } from './slicers/toDoSlice';
import { selectFilteredTodos } from './selectors/toDoSelectors';
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

  const addToDo = input => {
    dispatch(AddToDo(input));
  };

  const handleRegistration = data => {
    resetField('toDoValue');
    addToDo(data.toDoValue);
  };

  const filteredToDo = useMemo(
    () =>
      filteredToDoList.map(item => (
        <ToDoItem
          key={item.id}
          name={item.item}
          done={item.done}
          id={item.id}
        />
      )),
    [filteredToDoList],
  );

  const statusFilters = useMemo(
    () =>
      Object.keys(StatusFilters).map(key => (
        <FilterLink key={key} value={key} selectedStatus={status} />
      )),
    [status],
  );

  return (
    <div className={style.app}>
      <div className={style.app__container}>
        <div className={style.app__toDoContainer}>{filteredToDo}</div>
        <span className={style.error}>
          {errors.toDoValue?.type === 'required' && 'ToDo text is required'}
        </span>
        <form
          className={style.app__form}
          onSubmit={handleSubmit(handleRegistration)}
        >
          <input type="text" {...register('toDoValue', { required: true })} />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={style.app__filterContainer}>{statusFilters}</div>
    </div>
  );
}

export default App;
