import propTypes from "prop-types";
import {useSortable} from '@dnd-kit/sortable';
import { Delete } from "../Icons/Delete";
import {CSS} from "@dnd-kit/utilities"
import { useState } from "react";
const ColomnContainer = ({ column, DeleteID }) => {
          const [editMode,seteditMode]=useState(false)
          const {setNodeRef,attributes,listeners,transform,transition,isDragging}=useSortable({
                    id:column.Id,
                    data:{
                              type:"column",
                              column
                    }
          })
          const Style={
                    transition,
                    transform:CSS.Transform.toString(transform)
          }
          if(isDragging){
                    return(
                    <div ref={setNodeRef} style={Style} className=" w-[360px] h-[500px] max-h-[500px] border-2 border-rose-500 opacity-40  rounded-md flex flex-col">
                    </div>);

          }
          return (
    <div ref={setNodeRef} style={Style} className="bg-black w-[360px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      <div {...attributes} {...listeners} className="bg-mainsBckground  text-lg font-bold h-[60px] cursor-grab rounded-md rounded-b-none p-3 border-black border-4 flex justify-between items-center" onClick={()=>{seteditMode(true)} }>
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-ColumnBckground px-2 py-1 text-sm  ">
            {column.Id}
          </div>
           { !editMode && column.Title}
           {editMode && <input type="text" autoFocus onBlur={()=>{seteditMode(false)}} onKeyDown={(e)=>{
            if(e.key==="Entre") return;
            seteditMode(false)
           }}/>  }
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
      <div className="flex flex-grow   ">content</div>
      <div>footer</div>
    </div>
  );
};
ColomnContainer.propTypes = {
  column: propTypes.object.isRequired,
  DeleteID: propTypes.func.isRequired,
};

export default ColomnContainer;
