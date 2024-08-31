import { useState } from 'react'

export default function AddTodoForm({ addTodo }) {
  const [newTodo, setNewTodo] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button type="submit">Add</button>  
    </form>
  )
}
