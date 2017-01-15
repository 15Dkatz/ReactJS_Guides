import React from 'react'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'
import { firebaseApp } from '../firebase'
import { browserHistory } from 'react-router'

function signOut() {
  firebaseApp.auth().signOut().then(() => {
    browserHistory.replace('/signin')
  }, error => {
    console.log('error', error)
  })
}

const App = () => (
    <div style={{padding: '5%'}}>
      <h3>Goals</h3>
      <AddGoal />
      <GoalList />
      <hr/>
      <h4>Completed Goals</h4>
      <CompleteGoalList />
      <hr/>
      <div>
        <button onClick={() => signOut()} className="btn btn-danger">
          Sign Out
        </button>
      </div>
    </div>
)

export default App
