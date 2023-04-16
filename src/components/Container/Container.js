import React from "react";
import AddTodo from "../NewTodo/AddTodo";

import AddedTodos from "../AddedTodos/AddedTodos";
import ShowCategory from "../AddedTodos/ShowCategory";

const Container = () => {
  return (
    <div className="w-3/5 h-4/5 rounded-lg border-4 border-white grid grid-cols-10 grid-rows-6">
      <ShowCategory />
      <AddTodo />
      <AddedTodos />
    </div>
  );
};
export default Container;
