import propTypes from "prop-types";
import { Delete } from "../Icons/Delete";
import { useState } from "react";
function Task({ task, DeleteTask }) {
  const [editModeTask,seteditModeTask]=useState(false);
  return (
    <div className="flex items-center mx-2 hover:ring-inset border-2 border-ColumnBckground h-[100px] min-h-[100px]  rounded-md p-4  bg-mainsBckground m-1 justify-between">
      {task.content}
      <button
        onClick={() => {
          DeleteTask(task.id);
        }}
        className="stroke-gray-500 hover:stroke-cyan-50 hover:bg-ColumnBckground rounded p-2 px-1 py-2   "
      >
        <Delete />
      </button>{" "}
    </div>
  );
}

Task.propTypes = {
  task: propTypes.array.isRequired,
  DeleteTask: propTypes.func.isRequired,
};

export default Task;
