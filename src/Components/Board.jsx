import { useMemo, useState } from "react";
import { PlusIcon } from "../Icons/PlusIcon";
import ColomnContainer from "./ColomnContainer";
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import {SortableContext, arrayMove} from '@dnd-kit/sortable';
import { createPortal } from "react-dom";
export const Board = () => {
  const [columns, setColumns] = useState([]);
  const [Activecolumn, setActiveColumns] = useState();

  const columnsId=useMemo(()=>columns.map((col)=>col.Id)
  ,[columns])
const sensors=useSensors(useSensor(PointerSensor,{
          activationConstraint:{
                    distance:3
          }
}))

  return (
    <div className=" m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px[40px]  ">
      <DndContext sensors={sensors} onDragStart={OnDragStart} onDragEnd={OnDragEnd}>
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items ={columnsId}>
                    {columns.map((col) => (
                    <ColomnContainer
                    key={col.Title}
                    column={col}
                    DeleteID={DeleteID}
                    />
                    ))}
            </SortableContext>
          </div>
          <button
            onClick={() => {
              CreateNewColumns();
            }}
            className="w-[360px] h-[60px] cursor-pointer min-w-[360px] rounded-lg bg-mainsBckground border-ColumnBckground ring-rose-500 border-2 p-4   hover:ring-2 flex gap-2"
          >
            <PlusIcon /> Add Column
          </button>
        </div>
        {createPortal(        <DragOverlay>
          {
                    Activecolumn && <ColomnContainer column={Activecolumn} DeleteID={DeleteID}/>
          }
        </DragOverlay>,document.body)}

      </DndContext>
    </div>
  );
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
  function OnDragStart(ev){
          console.log(ev);
          if(ev.active.data.current?.type==="column"){
                    setActiveColumns(ev.active.data.current.column)


          }
console.log(Activecolumn);
return;
  }
  function OnDragEnd(e){
          const {active,over}=e
          if(!over)return;
          const activeColumnId=active.id;
          const OverColumnId=over.id
          if(activeColumnId===OverColumnId)return;
          setColumns((columns)=>{
                    const ActivecolumnIndex=columns.findIndex((col)=>col.Id=== activeColumnId)
                    const OvercolumnIndex=columns.findIndex((col)=>col.Id=== OverColumnId)
                    return arrayMove(columns,ActivecolumnIndex,OvercolumnIndex)
          })
  }
};
function generateId() {
  return Math.floor(Math.random() * 10001);
}
