import React from "react";
import NewTodo from "../NewTodo/NewTodo";

const AddedTodos = () => {
  return (
    <ul className="flex justify-center items-start col-span-7 col-start-4 row-start-3 row-span-4 pt-4">
      <NewTodo />
    </ul>
  );
};

export default AddedTodos;
