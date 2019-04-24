import React from 'react'
import { Icon } from 'antd'

export default (props) => {
    const { name, done } = props.todo
    const _dataState = done ? "done" : "todo"

    return (
        <li data-state={ _dataState } key={ name }>
            <div className="li-content" onClick={ !done ? props.completed : props.reset } >
                { name }
            </div>
            <div className="li-remove" onClick={ props.remove }>
                <Icon type="delete" theme="filled" />
            </div>
        </li>
    )
}