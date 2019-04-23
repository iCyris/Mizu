import React from 'react'

export default function ListItem(props) {
    const { name, done } = props.todo
    const _dataState = done ? "done" : "todo"

    return (
        <li data-state={ _dataState } key={ name }>
            <div className="li-content"
                 //style={{ textDecoration: done ? "line-through" : "" }}
                 onClick={ !done ? props.completed : props.reset } >
                { name }
            </div>
            <div className="li-remove fas fa-trash" onClick={ props.remove } />
        </li>
    )
}