import React from "react";
import Button from "./Button";
import CategorizeTask from "./CategorizeTask";

const AddTodo = () => {
  return (
    <div className=" flex justify-center col-start-4 col-span-7 mt-14">
      <input
        type="text"
        placeholder="Enter your todo"
        className="w-3/5 h-9 pl-4 border-2 rounded-s-xl"
      />

      <CategorizeTask />
      <Button></Button>
    </div>
  );
};

export default AddTodo;
