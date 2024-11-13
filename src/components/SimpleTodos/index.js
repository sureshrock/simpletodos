const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
import {Component} from 'react'
import UserTodo from '../TodoItem'

import './index.css'

class SimpleTodos extends Component {
  state = {
    initialTodosList: initialTodosList,
  }

  deleteUser = id => {
    const {initialTodosList} = this.state
    const updatedTodosList = initialTodosList.filter(todo => todo.id !== id)
    this.setState({initialTodosList: updatedTodosList})
  }

  render() {
    const {initialTodosList} = this.state

    return (
      <div className="app-container">
        <div className="app_card">
          <h1 className="title">Simple Todos</h1>
          <ul className="list-container">
            {initialTodosList.map(todo => (
              <UserTodo
                key={todo.id}
                userDetails={todo}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
