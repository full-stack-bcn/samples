import React from 'react'
import AddTodo from '../components/containers/AddTodo'
import Footer from '../components/presentational/Footer'
import VisibleTodoList from '../components/containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App