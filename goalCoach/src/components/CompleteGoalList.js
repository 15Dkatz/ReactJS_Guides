import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
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
        // add the Goal key for later removal
        completeGoals.push({
          email,
          title
        })
      })
      this.setState({completeGoals})
    })
  }

  render() {
    return (
      <div>
        {
          this.state.completeGoals.map((completeGoal, index) => {
            const { title, email } = completeGoal;
            return (
              <div key={index}>
                <strong>{title}</strong> completed by <em>{email}</em>
              </div>
            )
          })
        }
        <button
          onClick={() => this.props.clearCompleted()}
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

export default connect(mapStateToProps, { clearCompleted })(CompleteGoalList)
