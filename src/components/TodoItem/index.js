// Write your code here
import './index.css'

const UserTodo = props => {
  const {userDetails, deleteUser} = props
  const {title, id} = userDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="todo-card-container">
      <div className="user-todos-container">
        <p className="todo-title">{title}</p>
        <div>
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default UserTodo
