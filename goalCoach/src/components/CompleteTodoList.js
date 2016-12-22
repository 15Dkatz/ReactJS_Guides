import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import CompleteTodoItem from './CompleteTodoItem'

class CompleteTodoList extends Component {
  render() {
    return (
      <div>
        {this.props.completeTodos.map((completeTodo, index) =>
          <CompleteTodoItem
            key={index}
            title={completeTodo.title}
            email={completeTodo.email}
          />
        )}
        {
          this.props.completeTodos.length > 0 ?
          <button onClick={() => this.props.clearCompleted()}>
            Clear Completed
          </button> :
          <span style={{display: 'none'}}></span>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    completeTodos: state.reducer.completeTodos
  }
}

export default connect(mapStateToProps, { clearCompleted })(CompleteTodoList)
