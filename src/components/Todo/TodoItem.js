import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, index }) {
	return (
		<form action="#">
		<p>
      <label>
        <input type="checkbox" />
        <span>
				<strong>{index + 1}</strong>
				{todo.title}
				</span>
      </label>
    </p>
		<button>&times;</button>
		</form>
		
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number
}

export default TodoItem
