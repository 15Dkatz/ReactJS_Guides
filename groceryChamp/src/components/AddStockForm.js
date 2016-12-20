import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStock } from '../actions'

class AddStockForm extends Component {
  render() {
    console.log('props in addStockForm', this.props)
    let title, price, stock;
    return (
      <div>
        <h3>Add Stock</h3>
        <div>Add a new grocery item to the store:</div>
        <input placeholder='title' ref={node => {title = node}}/>
        <input placeholder='price' ref={node => {price = node}}/>
        <input placeholder='stock' ref={node => {stock = node}}/>
        <button onClick={() =>this.props.addStock(title.value, price.value, stock.value)}>
          Submit
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) { return state }

export default connect(mapStateToProps, { addStock })(AddStockForm)
