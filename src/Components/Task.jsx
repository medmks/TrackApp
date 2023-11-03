import propTypes from "prop-types";
function Task({task}) {
  return (
          <div className="border-2 border-ColumnBckground h-22  rounded-md p-3  bg-mainsBckground m-1">
          {task.content}
        </div>
  )
}


Task.propTypes={
          task:propTypes.array.isRequired     
}

export default Task