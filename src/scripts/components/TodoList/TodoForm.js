import React from 'react'

export default (props) => {
    return (
        <div className="todo-form">
            <form onSubmit={ props.onSubmit }>
                <input
                    type = "text"
                    value = { props.value }
                    onChange = { props.onChange }
                    placeholder = "Add your first task!"
                />
                <button type="submit" />
            </form>
        </div>
    )
}