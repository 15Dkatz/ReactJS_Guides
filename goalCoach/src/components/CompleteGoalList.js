import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearCompleted } from '../actions'
import CompleteGoalItem from './CompleteGoalItem'
import { completeGoalRef } from '../firebase'

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
        {this.state.completeGoals.map((completeGoal, index) =>
          <CompleteGoalItem
            key={index}
            title={completeGoal.title}
            email={completeGoal.email}
          />
        )}
        {
          this.state.completeGoals.length > 0 ?
          <button
            onClick={() => this.props.clearCompleted()}
            className="btn btn-primary"
          >
            Clear All
          </button> :
          <span style={{display: 'none'}}></span>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    completeGoals: state.reducer.completeGoals
  }
}

export default connect(mapStateToProps, { clearCompleted })(CompleteGoalList)
