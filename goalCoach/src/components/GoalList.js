import React, { Component } from 'react'
import { goalRef } from '../firebase'
import GoalItem from './GoalItem'

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

export default GoalList;
