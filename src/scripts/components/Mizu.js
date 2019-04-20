import React from 'react'
import Search from "./SearchBar/SearchBar"
import SiteList from "./SiteList/SiteList"
import TodoList from "./TodoList/TodoList"

export default function Mizu() {
    return (
        <div id="Mizu">
            <Search />
            <SiteList />
            <TodoList />
        </div>
    )
}