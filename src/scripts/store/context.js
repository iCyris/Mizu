import React from 'react'

const Store = React.createContext({
   todos: [
       "Buy milks",
       "Buy eggs",
       "Go to work"
   ]
})

export default Store