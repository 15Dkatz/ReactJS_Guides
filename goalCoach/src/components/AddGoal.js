import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../actions'

class AddGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    const { email } = this.props.user;
    return (
      <form className="form-inline">
        <div className="form-group">
          <input
            type="text" placeholder="Add a goal"
            onChange={event => this.setState({text: event.target.value})}
            className="form-control"
            style={{marginRight: '5px'}}
          />
          <button
            onClick={() => this.props.addGoal(email, this.state.text)}
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
  const { user } = state.reducer;
  return {
    user
  }
}

export default connect(mapStateToProps, { addGoal })(AddGoal)
