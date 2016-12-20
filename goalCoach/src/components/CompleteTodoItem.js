import React, { Component } from 'react'

class CompleteTodoItem extends Component {
  render() {
    let {title, email} = this.props
    return (
      <div>
        {title} | completed by: {email}
      </div>
    )
  }

}

export default CompleteTodoItem
