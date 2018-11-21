import React, { Component } from 'react';

class ToDo extends Component {
  render () {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
        <span>{ this.props.description }</span>
        <button onClick= { this.props.deleteTodo }>Delete</button>
      </li>
    );
  }
}
 // <span>{ this.props.description }</span> Here we are accessing props
//onChange is an event listener that will access the toggleComplete event handler
export default ToDo; //this allows us to export to another component
