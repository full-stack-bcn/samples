import React from 'react'

export default ({ active, children, onClick }) => (
  <button onClick={onClick} style={active? {backgroundColor: '#DDEBF8'}: {}}>
    {children}
  </button>
)
