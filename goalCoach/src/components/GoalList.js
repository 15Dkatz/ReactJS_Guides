import React, { Component } from 'react'
import { connect } from 'react-redux'

import GoalItem from './GoalItem'
import { goalRef } from '../firebase'

class GoalList extends Component {
  constructor(props) {
    super(props)
    this.state = {goals: []}
  }

  componentDidMount() {
    this.listenForItems(goalRef)
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        let { email, title } = goal.val();
        let { key } = goal;
        goals.push({
          email,
          title,
          key
        })
      })
      this.setState({goals})
    })
  }

  render() {
    // TODO show a loader
    return (
      <div>
        {
          this.state.goals.map(goal => {
            let {key, title, email} = goal;
            return (
              <GoalItem
                key={key}
                serverKey={key}
                title={title}
                email={email}
              />
            )
          }
        )
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {user, goals} = state.reducer;
  return {user, goals}
}

export default connect(mapStateToProps, null)(GoalList)
