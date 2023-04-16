import React from "react";

const AddTodoButton = () => {
  return (
    <div className=" col-start-4 col-span-7 flex items-center">
      <button className="h-9 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9 stroke-gray-400 hover:stroke-rose-300 duration-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddTodoButton;
