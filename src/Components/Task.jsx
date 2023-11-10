import propTypes from "prop-types";
import React from "react";
import { Delete } from "../Icons/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
function Task({ task, DeleteTask,updateTask }) {
  const [editModeTask,seteditModeTask]=useState(false);
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
  const toggleEditMode = () => { seteditModeTask((prev) => !prev);}
    // setMouseIsOver(false);


  if(editModeTask){
    
      return (
        <div
          ref={setNodeRef}
          style={Style}
          {...attributes}
          {...listeners}
          className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
        >
          <textarea
            className="
          h-[90%]
          w-full resize-none border-none rounded bg-transparent text-white focus:outline-none
          "
            value={task.content}
            autoFocus
            placeholder="Task content here"
            onBlur={toggleEditMode}
                        onKeyDown={(e) => {
              if (e.key === "Enter") {
                seteditModeTask(false);
              }
            }}
            onChange={(e) => updateTask(task.id, e.target.value)}
          />
        </div>
      );
    
    
  }
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
    <React.Fragment   >   
      <div
     onClick={toggleEditMode}
    ref={setNodeRef} {...attributes}{...listeners} style={Style} className="flex items-center mx-2 hover:ring-inset border-2 border-ColumnBckground h-[100px] min-h-[100px]  rounded-md p-4  bg-mainsBckground m-1 justify-between">
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">
        {task.content}
      </p>     
        <button
        onClick={() => {
          DeleteTask(task.id);
        }}
        className="stroke-gray-500 hover:stroke-cyan-50 hover:bg-ColumnBckground rounded p-2 px-1 py-2    "
      >
        <Delete />
      </button>{" "}     
      </div>

    </React.Fragment   >
  );
}

Task.propTypes = {
  task: propTypes.object.isRequired,
  DeleteTask: propTypes.func.isRequired,
  updateTask: propTypes.func.isRequired,

};

export default Task;
