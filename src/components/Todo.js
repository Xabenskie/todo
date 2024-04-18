import { Trash } from 'lucide-react'
import React from 'react'

export const Todo = ({ task, toggleComplete, deleteTodo }) => {
	return (
		<div className='Todo'>
			<p
				onClick={() => toggleComplete(task.id)}
				className={`${task.completed ? 'completed' : ''}`}
			>
				{task.task}
			</p>
			<Trash className='ico' onClick={() => deleteTodo(task.id)} />
		</div>
	)
}
