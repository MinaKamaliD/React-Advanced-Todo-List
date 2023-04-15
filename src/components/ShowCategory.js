import React from "react";
import Image from "./Image";

const ShowCategory = () => {
  return (
    <div className="flex flex-col row-span-2 bg-white col-span-3">
      <Image />
      <div className="flex ml-10">
        <input type="radio" name="category" id="all" value="all" />
        <label htmlFor="all" className="ml-3 font-medium text-gray-800">
          All
        </label>
      </div>

      <div className="flex mt-3 ml-10">
        <input type="radio" name="category" id="urgent" value="urgent" />
        <label htmlFor="urgent" className="ml-3 font-medium text-gray-800">
          Urgent
        </label>
      </div>
      <div className="flex mt-3 ml-10">
        <input
          type="radio"
          name="category"
          id="not urgent"
          value="not urgent"
        />
        <label htmlFor="not urgent" className="ml-3 font-medium text-gray-800">
          Not Urgent
        </label>
      </div>

      <div className="flex mt-3 ml-10">
        <input type="radio" name="category" id="due today" value="due today" />
        <label htmlFor="due today" className="ml-3 font-medium text-gray-800">
          Due Today
        </label>
      </div>

      <div className="flex mt-3 ml-10">
        <input
          type="radio"
          name="category"
          id="assigned to me"
          value="assigned to me"
        />
        <label
          htmlFor="assigned to me"
          className="ml-3 font-medium text-gray-800"
        >
          Assined To Me
        </label>
      </div>
      <div className="flex mt-3 ml-10">
        <input
          type="radio"
          name="category"
          id="completed"
          value="completed"
          className="accent-rose-800"
        />
        <label htmlFor="completed" className="ml-3 font-medium text-gray-800">
          Completed
        </label>
      </div>

      <div className="flex mt-3 ml-10">
        <input
          type="radio"
          name="category"
          id="incomplete"
          value="incomplete"
        />
        <label htmlFor="incomplete" className="ml-3 font-medium text-gray-800">
          Incomplete
        </label>
      </div>
    </div>
  );
};

export default ShowCategory;
