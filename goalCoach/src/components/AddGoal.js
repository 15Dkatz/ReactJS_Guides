import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  addGoal(email, title) {
    goalRef.push({email, title})
  }

  render() {
    const { email } = this.props.user;
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text" placeholder="Add a goal"
            onChange={event => this.setState({title: event.target.value})}
            className="form-control"
            style={{marginRight: '5px'}}
          />
          <button
            onClick={() => this.addGoal(email, this.state.title)}
            className="btn btn-success"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(AddGoal)
