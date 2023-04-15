import React from "react";
import AddTodo from "./AddTodo";
import ShowCategory from "./ShowCategory";
import CategorizeTask from "./CategorizeTask";
import Button from "./Button";

const Container = () => {
  return (
    <div className="w-3/5 h-4/5 rounded-lg border-4 border-white grid grid-cols-10 ">
      <ShowCategory />
      <AddTodo />
      {/* <CategorizeTask /> */}
      {/* <Button></Button> */}
    </div>
  );
};
export default Container;
