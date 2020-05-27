import React from 'react'
import Todo from './Todo'

export default ({ todos, onTodoClick }) => (
 <ul> { todos.map( (todo, index) => ( <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />))} </ul>
)