import React from 'react'
import AddGoal from '../components/AddGoal'
import GoalList from '../components/GoalList'
import CompleteGoalList from '../components/CompleteGoalList'
import { firebaseApp } from '../firebase'
import { browserHistory } from 'react-router'

function signOut() {
  firebaseApp.auth().signOut().then(() => {
    browserHistory.replace('/signin')
  }, error => {
    console.log('error', error)
  })
}

const GoalDashboard = () => (
    <div>
      <h3>Goals</h3>
      <AddGoal/>
      <GoalList/>
      <hr/>
      <h3>Completed Goals</h3>
      <CompleteGoalList/>
      <hr/>
      <div>
        <button onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </div>
)

export default GoalDashboard
