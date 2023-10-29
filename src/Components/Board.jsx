import { useState } from "react";
import { PlusIcon } from "../Icons/PlusIcon";
import ColomnContainer from "./ColomnContainer";

export const Board = () => {
          const [columns,setColumns]=useState([])
          console.log(columns);

  return (
    <div className=" m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px[40px]  ">
      <div className="m-auto flex gap-4">
          <div className="flex gap-4">
                    {columns.map((col)=>(
                              <ColomnContainer key={col.Title} column={col}/>
                    ))}
          </div>
        <button onClick={()=>{CreateNewColumns()}} className="w-[360px] h-[60px] cursor-pointer min-w-[360px] rounded-lg bg-mainsBckground border-ColumnBckground ring-rose-500 border-2 p-4   hover:ring-2 flex gap-2">
        <PlusIcon/> Add Column
        </button>
      </div>
    </div>
  );
  function CreateNewColumns(){
          const NewColumn={
                    Id:generateId(),
                    Title:`Column ${columns.length + 1 }`
          }
          setColumns([...columns,NewColumn])
          }
};
function generateId(){
          return Math.floor(Math.random()* 10001)
}