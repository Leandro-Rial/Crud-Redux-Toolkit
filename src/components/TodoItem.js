import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/slice/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteChecked = () => {
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
      })
    );
  };

  const handleDelete = () => {
	  dispatch(deleteTodo({ id }))
  }

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onClick={handleCompleteChecked}
          />
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;