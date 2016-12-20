import React from 'react'

const TodoItem = (item) => (
  <div>
    {item.title} | submitted by: {item.email}
  </div>
)

export default TodoItem
