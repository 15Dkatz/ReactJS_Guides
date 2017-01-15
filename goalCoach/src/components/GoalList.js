import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

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
        const { email, title } = goal.val();
        const { key } = goal;
        goals.push({email, title, key});
      })
      this.props.setGoals(goals);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.goals.map(goal => {
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
  const { goals } = state;
  return {
    goals
  }
}

export default connect(mapStateToProps, { setGoals })(GoalList);
