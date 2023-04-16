import React from "react";
import AddTodoButton from "../Buttons/AddTodoButton";
import CategorizeTask from "./CategorizeTodo";

const AddTodo = () => {
  return (
    <div className="flex justify-center items-center col-start-4 col-span-7  row-start-1 row-span-2 ">
      <input
        type="text"
        placeholder="Enter your todo"
        className="w-3/5 h-9 pl-4 border-2 rounded-s-xl focus:outline-none "
      />

      <CategorizeTask />
      <AddTodoButton />
    </div>
  );
};

export default AddTodo;
