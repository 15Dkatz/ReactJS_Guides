import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {
  constructor(props) {
    super(props)
    this.state = {completeGoals: []}
  }

  componentDidMount() {
    this.listenForItems(completeGoalRef)
  }

  listenForItems(ref) {
    ref.on('value', snap => {
      let completeGoals = [];
      snap.forEach(completeGoal => {
        let {email, title} = completeGoal.val();
        completeGoals.push({
          email,
          title
        })
      })
      this.props.setCompleted(completeGoals);
    })
  }

  clearCompleted() {
    completeGoalRef.set([]);
  }

  render() {
    return (
      <div>
        {
          this.props.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          onClick={() => this.clearCompleted()}
          className="btn btn-primary"
        >
          Clear All
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList)
