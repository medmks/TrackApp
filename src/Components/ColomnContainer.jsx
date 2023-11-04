import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { Delete } from "../Icons/Delete";
import { CSS } from "@dnd-kit/utilities";
import { useState,useMemo } from "react";
import { PlusIcon } from "../Icons/PlusIcon";
import Task from "./Task";
import propTypes from "prop-types";
const ColomnContainer = ({
  column,
  DeleteID,
  UpadateTitle,
  CreatenewTask,
  tasks,
  DeleteTask,
}) => {
  const [editMode, seteditMode] = useState(false);
  console.log(editMode);
  console.log("renderd");
  const TasksId = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.Id,
    data: {
      type: "column",
      column,
    },
    disabled: editMode,
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
        className=" w-[360px] h-[500px] max-h-[500px] border-2 border-rose-500 opacity-40  rounded-md flex flex-col"
      ></div>
    );
  }

  const onchangeTitle = (e) => {
    UpadateTitle(column.Id, e.target.value);
    seteditMode(false);
  };
  return (
    <div
      ref={setNodeRef}
      style={Style}
      className="bg-black w-[360px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <div
        {...attributes}
        {...listeners}
        className="bg-mainsBckground m-1  text-lg font-bold h-[60px] cursor-grab rounded-md  p-3 border-2 border-ColumnBckground flex justify-between items-center"
        onClick={() => {
          seteditMode(true);
        }}
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-ColumnBckground px-2 py-1 text-sm  ">
            {column.Id}
          </div>
          {!editMode && column.Title}
          {editMode && (
            <input
              defaultValue={column.Title}
              // on={onchangeTitle}
              autoFocus
              className="bg-ColumnBckground w-full focus:border-rose-500 border rounded-lg outline-none px-2"
              onBlur={onchangeTitle}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                UpadateTitle(column.Id, e.target.value);

                // hh
                seteditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            DeleteID(column.Id);
          }}
          className="stroke-gray-500 hover:stroke-cyan-50 hover:bg-ColumnBckground rounded p-2 px-1 py-2   "
        >
          <Delete />
        </button>
      </div>
      <div className="flex flex-grow   flex-col overflow-y-auto overflow-x-hidden">
        <SortableContext items={TasksId}>
        {tasks.map((task, i) => {
          return <Task key={i} task={task} DeleteTask={DeleteTask} />;
        })}
        </SortableContext>
      </div>
      <button
        onClick={() => {
          CreatenewTask(column.Id);
        }}
        className="flex gap-3 border-2 border-ColumnBckground bg-mainsBckground rounded-md p-4  m-1 hover:text-rose-500 hover:border-rose-400 "
      >
        <PlusIcon />
        Add Task{" "}
      </button>
    </div>
  );
};
ColomnContainer.propTypes = {
  column: propTypes.object.isRequired,
  DeleteID: propTypes.func.isRequired,
  UpadateTitle: propTypes.func.isRequired,
  CreatenewTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired,
  DeleteTask: propTypes.func.isRequired,
};

export default ColomnContainer;
