import React from "react";
import tick from "../assets/blacktick.png";
import not_tick from "../assets/not_tick.png";
import deleteIcon from "../assets/delete.png";

const TodoItem = ({ text, id, isComplete, deleteTodo, toggleComplete }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={() => {toggleComplete(id)}} className="flex flex-1 items-center cursore-pointer">
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={deleteIcon}
        alt=""
        className="w-4 cursor-pointer"
      />
    </div>
  );
};

export default TodoItem;
