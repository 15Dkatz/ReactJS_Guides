import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';

class GoalList extends Component {
  componentDidMount() {
    goalRef.on('value', snap => {
      let goals = [];
      snap.forEach(goal => {
        const { email, title } = goal.val();
        const serverKey = goal.key;
        goals.push({email, title, serverKey});
      })
      this.props.setGoals(goals);
    })
  }

  render() {
    return (
      <div>
        {
          this.props.goals.map((goal, index) => {
            let {serverKey, title, email} = goal;
            return (
              <GoalItem
                key={index}
                serverKey={serverKey}
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
