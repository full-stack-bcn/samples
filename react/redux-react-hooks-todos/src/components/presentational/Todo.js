import React from 'react'

export default ({ onClick, completed, text }) => (
  <li  onClick={onClick}  style={{ textDecoration: completed ? 'line-through' : 'none' }} >
    {text}
  </li>
)