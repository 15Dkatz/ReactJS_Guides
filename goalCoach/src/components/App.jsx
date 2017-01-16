import React from 'react';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';
import { firebaseApp } from '../firebase';

function signOut() {
  firebaseApp.auth().signOut();
}

const App = () => (
    <div style={{padding: '5%'}}>
      <h3>Goal Coach</h3>
      <AddGoal />
      <hr />
      <h4>Goals</h4>
      <GoalList />
      <hr />
      <h4>Completed Goals</h4>
      <CompleteGoalList />
      <hr />
      <button onClick={() => signOut()} className="btn btn-danger">Sign Out</button>
    </div>
)

export default App
