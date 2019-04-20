import React from 'react'

export default function TodoForm(props) {
    return (
        <form onSubmit = { props.onSubmit }>
            <input
                type = "text"
                value = { props.value }
                onChange = { props.onChange }
                placeholder = "Add your first task!"
            />
            <button type = "submit">Add Todo</button>
        </form>
    )
}