import React from "react";
import { Fragment } from "react";

const CategorizeTask = () => {
  return (
    <div>
      <select
        name="categorize"
        id="categorize"
        className="h-9 border-2 rounded-e-xl pl-1 text-gray-800"
      >
        <option value="" disabled className="text-gray-800">
          Select
        </option>
        <option value="urgent" className="text-gray-800">
          Urgent
        </option>
        <option value="not urgent" className="text-gray-800">
          Not Urgent
        </option>
        <option value="due today" className="text-gray-800">
          Due Today
        </option>
        <option value="assigned to me" className="text-gray-800">
          Assigned to me
        </option>
        <option value="completed" className="text-gray-800">
          Completed
        </option>
        <option value="incomplete" className="text-gray-800 ">
          Incomplete
        </option>
      </select>
    </div>
  );
};

export default CategorizeTask;
