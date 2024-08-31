import { render, screen, fireEvent } from '@testing-library/react'
import TodoList from './TodoList'

test('renders initial todos', () => {
  render(<TodoList />)
  const todoElements = screen.getAllByRole('listitem')
  expect(todoElements).toHaveLength(2)
})

test('adds a new todo', () => {
  render(<TodoList />)
  const input = screen.getByPlaceholderText('Add a todo')
  const button = screen.getByRole('button')

  fireEvent.change(input, { target: { value: 'New todo' } })
  fireEvent.click(button)

  const todoElements = screen.getAllByRole('listitem')
  expect(todoElements).toHaveLength(3)
  expect(todoElements[2].textContent).toContain('New todo')
})

// Write more tests for toggling and deleting todos
