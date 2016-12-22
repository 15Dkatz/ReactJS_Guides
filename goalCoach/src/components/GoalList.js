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
        let {email, title} = goal.val();
        goals.push({
          email,
          title,
          key: goal.key
        })
      })
      this.setState({goals})
    })
  }

  render() {
    // goal figure out how to show a loader
    return (
      <div>
        {this.state.goals.map((goal, index) =>
          <GoalItem
            key={goal.key}
            serverKey={goal.key}
            title={goal.title}
            email={goal.email}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  let {user, goals} = state.reducer;
  return {user, goals}
}

export default connect(mapStateToProps, null)(GoalList)
