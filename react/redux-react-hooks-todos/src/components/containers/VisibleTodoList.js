import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../../redux/actions';
import TodoList from '../presentational/TodoList';

export default () => {
  const dispatch = useDispatch();
  const todos = useSelector( store => {
    switch (store.visibilityFilter) {
      case VisibilityFilters.SHOW_ALL: return store.todos
      case VisibilityFilters.SHOW_COMPLETED: return store.todos.filter(todo => todo.completed)
      case VisibilityFilters.SHOW_ACTIVE: return store.todos.filter(todo => !todo.completed)
      default:  throw new Error('Unknown filter: ' + store.visibilityFilter)
    } 
  });
  return <TodoList todos={todos} onTodoClick={id => dispatch(toggleTodo(id))} />;
}