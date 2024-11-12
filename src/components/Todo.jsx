import React, { useRef, useEffect, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItem from "./TodoItem";
const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText.length === 0) {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="to-do icon" className="w-8" />
        <h1 className="text-3xl font-semibold">To Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-300 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add to your list"
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-black w-14 h-14 text-white text-3xl font-medium cursor-pointer"
        >
          +
        </button>
      </div>

      <div>
        {todoList.map((item,index) => (
          <TodoItem
            key={index}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
