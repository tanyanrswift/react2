import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'; //Here we are importing information from our ToDo.js file

class App extends Component {
   constructor(props) { //We need the constructor function when creating a new Class, and super when extending a class
     super(props);
      this.state = { //Here we are creating a state object (todos) which can be accessed anywhere from the class
        todos: [ //todos array w/key/value pairs
          { description: 'Walk the cat', isCompleted: true },
          { description: 'Throw the dishes away', isCompleted: false },
          { description: 'Buy new dishes', isCompleted: false }
        ],
        newTodoDescription: '' //this will be for what the user wants to call their list item
      };
   }

   handleChange(e) {
     this.setState({ newTodoDescription: e.target.value })
   }

   handleSubmit(e){
     e.preventDefault();
      if (!this.state.newTodoDescription) { return }
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
      this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' }); //Here we are creating a new item in our todo array
   } //...is JavaScript spread syntax to add an object to the end of a new array

   toggleComplete(index) { //event handler, index is selecting the index number of the array
     const todos = this.state.todos.slice(); //slice() is making a copy of the array
     const todo = todos[index];
     todo.isCompleted = todo.isCompleted ? false : true;
     this.setState({ todos: todos});
   }
   deleteTodo(index) {
         const todos = this.state.todos.slice();
         this.setState( {todos: this.state.todos.filter((todo, todoIndex) => todoIndex !== index) });
       }

      render() {
        return (
          <div className="App">
            <ul>
              { this.state.todos.map( (todo, index) => //We are using .map() to iterate over the todos array and return a new array
                <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) } />
                //we are using this line to pass the data down to our ToDo component-toggleComplete function
              )}
            </ul>
            <form onSubmit={ (e) => this.handleSubmit(e) }>
             <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
             <input type="submit" />
            </form>
          </div>
        );//e is short for event, and it contains event data passed to the function by the browser
        //props look like HTML attributes w/ a key and a value separated by an equal sign
      }
    }

   export default App;
