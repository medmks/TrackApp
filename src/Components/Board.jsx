import { useMemo, useState } from "react";
import { PlusIcon } from "../Icons/PlusIcon";
import ColomnContainer from "./ColomnContainer";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import Task from "./Task";
export const Board = () => {
  const [Tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState([
    { Id: 1, Title: "Technical Skills" },
    { Id: 2, Title: "Communication" },
    { Id: 3, Title: "Languages" },
    { Id: 4, Title: "Self-Improving" },
  ]);
  console.log(Tasks);
  const [Activecolumn, setActiveColumns] = useState();
  const [ActiveTask, setActiveTask] = useState();

  const columnsId = useMemo(() => columns.map((col) => col.Id), [columns]);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    }),
  );

  return (
    <div className=" mt-10  flex min-h-[420px]  items-start overflow-x-auto overflow-y-hidden px[40px]  border border-stone-700 p-5  rounded-xl mr-2  ">
      <DndContext
        sensors={sensors}
        onDragStart={OnDragStart}
        onDragEnd={OnDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4 bg-black">
          <div className="flex gap-4 ">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColomnContainer
                  key={col.Title}
                  column={col}
                  DeleteID={DeleteID}
                  UpadateTitle={UpadateTitle}
                  CreatenewTask={CreatenewTask}
                  tasks={Tasks.filter((Task) => Task.columnsId == col.Id)}
                  DeleteTask={DeleteTask}
                  updateTask={updateTask}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => {
              CreateNewColumns();
            }}
            className=" m-1 w-[360px] h-[60px] cursor-pointer min-w-[360px] rounded-lg bg-[mainsBckground] border-ColumnBckground ring-rose-500 border-2 p-4   hover:ring-2 flex gap-2"
          >
            <PlusIcon /> Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {Activecolumn ? (
              <ColomnContainer
                column={Activecolumn}
                DeleteID={DeleteID}
                UpadateTitle={UpadateTitle}
                tasks={Tasks}
                CreatenewTask={CreatenewTask}
                DeleteTask={DeleteTask}
                updateTask={updateTask}
              />
            ) : null}
            {ActiveTask ? (
              <Task
                task={ActiveTask}
                DeleteTask={DeleteTask}
                updateTask={updateTask}
              />
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );
  function CreatenewTask(columnsId) {
    const newTask = {
      id: generateId(),
      columnsId,
      content: `task ${Tasks.length + 1}`,
    };
    setTasks([...Tasks, newTask]);
  }
  function DeleteTask(id) {
    const RestOfTasks = Tasks.filter((task) => task.id !== id);
    setTasks(RestOfTasks);
  }

  function CreateNewColumns() {
    const NewColumn = {
      Id: generateId(),
      Title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, NewColumn]);
  }
  function DeleteID(Id) {
    const FiltredArr = columns.filter((col) => col.Id !== Id);
    setColumns(FiltredArr);
  }
  function UpadateTitle(id, Title) {
    const EditedCol = columns.map((col) => {
      if (col.Id !== id) return col;
      return { ...col, Title };
    });
    setColumns(EditedCol);
  }
  function updateTask(id, content) {
    const newTasks = Tasks.map((task) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });

    setTasks(newTasks);
  }
  function OnDragStart(ev) {
    console.log(ev);
    if (ev.active.data.current?.type === "column") {
      setActiveColumns(ev.active.data.current.column);
      console.log(Activecolumn);
      return;
    }
    if (ev.active.data.current?.type === "Task") {
      setActiveTask(ev.active.data.current.task);
      console.log(Activecolumn);
      return;
    }
  }
  function OnDragEnd(e) {
    setActiveColumns(null);
    setActiveTask(null);

    const { active, over } = e;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveAColumn = active.data.current.type === "column";
    if (!isActiveAColumn) return;

    console.log("DRAG END");

    setColumns((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.Id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.Id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }
  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveATask = active.data.current.type === "Task";
    const isOverATask = over.data.current.type === "Task";

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        if (tasks[activeIndex].columnsId != tasks[overIndex].columnsId) {
          tasks[activeIndex].columnsId = tasks[overIndex].columnsId;
          return arrayMove(tasks, activeIndex, overIndex - 1);
        }

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current.type === "column";

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      setTasks((Tasks) => {
        const activeIndex = Tasks.findIndex((t) => t.id === activeId);
        Tasks[activeIndex].columnsId = overId;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(Tasks, activeIndex, activeIndex);
      });
    }
  }
};
function generateId() {
  return Math.floor(Math.random() * 10001);
}
