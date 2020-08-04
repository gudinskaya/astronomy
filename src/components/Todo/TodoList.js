import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

import './TodoList.css'

const styles = {
	ul: {
		listStyle: 'none'
	}
}

function TodoList(props) {
	return (
		<div className='list'>
			<h1>React tutorial</h1>
			<ul style={styles.ul}>
			{props.todos.map((todo, index) => {
				return <TodoItem todo={todo} key={todo.id} index={index}/>
			})}
			</ul>
		</div>
	)
}

TodoList.propTypes = {
	todos:PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList
