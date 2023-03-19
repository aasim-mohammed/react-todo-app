import React from "react";
import { FaTrash } from "react-icons/fa";

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons ">
        <FaTrash
          className="icon-delete "
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        />
      </span>
    </li>
  );
}

export default TodoList;
