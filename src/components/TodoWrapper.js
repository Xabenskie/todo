import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
uuidv4()

export const TodoWrapper = () => {
	const [todos, setTodos] = useState([])

	const addTodo = todo => {
		setTodos([
			...todos,
			{ id: uuidv4(), task: todo, completed: false, isEditing: false },
		])
		console.log(todos)
	}

	const toggleComplete = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		)
	}

	const deleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}
	return (
		<div className='TodoWrapper'>
			<h1>Add Todo</h1>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) => (
				<Todo
					task={todo}
					key={index}
					toggleComplete={toggleComplete}
					deleteTodo={deleteTodo}
				/>
			))}
		</div>
	)
}
