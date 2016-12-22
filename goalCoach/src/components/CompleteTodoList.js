import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import CompleteTodoItem from './CompleteTodoItem'
import { completeTodoRef } from '../firebase'

class CompleteTodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {completeTodos: []}
  }

  componentDidMount() {
    this.listenForItems(completeTodoRef)
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let completeTodos = [];
      snap.forEach(completeTodo => {
        let {email, title} = completeTodo.val();
        // add the todo key for later removal
        completeTodos.push({
          email,
          title
        })
      })
      this.setState({completeTodos})
    })
  }

  render() {
    return (
      <div>
        {this.state.completeTodos.map((completeTodo, index) =>
          <CompleteTodoItem
            key={index}
            title={completeTodo.title}
            email={completeTodo.email}
          />
        )}
        {
          this.state.completeTodos.length > 0 ?
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
