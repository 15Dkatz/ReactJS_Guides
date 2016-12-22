import React, { Component } from 'react'

class CompleteGoalItem extends Component {
  render() {
    let {title, email} = this.props
    return (
      <div>
        <strong>{title}</strong> completed by <em>{email}</em>
      </div>
    )
  }
 }

export default CompleteGoalItem
