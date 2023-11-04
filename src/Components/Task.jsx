import propTypes from "prop-types";
import { Delete } from "../Icons/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
function Task({ task, DeleteTask }) {
  // const [editModeTask,seteditModeTask]=useState(false);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    // disabled: editMode,
  });
  const Style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={Style}
        className="
        opacity-30
      bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      "
      />
    );
  }
  return (
    <div ref={setNodeRef} {...attributes}{...listeners} style={Style} className="flex items-center mx-2 hover:ring-inset border-2 border-ColumnBckground h-[100px] min-h-[100px]  rounded-md p-4  bg-mainsBckground m-1 justify-between">
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
