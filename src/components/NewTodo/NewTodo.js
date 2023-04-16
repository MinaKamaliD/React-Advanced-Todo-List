import React from "react";
import RemoveButton from "../Buttons/RemoveButton";
import CompletedButton from "../Buttons/CompletedButton";
import EditButton from "../Buttons/EditButton";

const NewTodo = () => {
  return (
    <div className=" flex items-center  justify-center w-full">
      <li className="flex items-center  border-2 w-2/4 h-9 pl-3 rounded-s-xl">
        Go Running
      </li>
      <EditButton />
      <CompletedButton />
      <RemoveButton />
    </div>
  );
};

export default NewTodo;
