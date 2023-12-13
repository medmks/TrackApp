import { Missions } from "./utility/constaty";
import PropTypes from "prop-types";
import ColumnDashboard from "./Components/ColumnDashboard";
const ProjectBoard=()=>{
 const Columns=[
  { Id: 1, Title: "Technical Skills" },
  { Id: 2, Title: "Communication" },
  { Id: 3, Title: "Languages" },

]
  const ProjectBoardCard = ({mission}) => {
    return (
      <div className="container mx-auto mt-4 ">
  
        <div className="flex ">
  
          <div className="  w-full mt-20  ">
            <p className=" ">Yet to start </p>
            <div className="h-[2px]   bg-gradient-to-r from-indigo-500 to-purple-500 " />
  
  {/* S!:          All the tasks or TODOs are Here */}
  
            <section className="  h-48 bg-mainsBckground   flex flex-col   shadow-lg shadow-black justify-between p-5">
              <h1 className="text-[18px] font-semibold     ">
                {mission.Title}
              </h1>
              <span className="-mt-5  text-secondary text-[12px] font-normal">
                {mission.SubTitle}
              </span>
              <p className=" text-[14px] overflow-y-auto overflow-x-hidden whitespace-pre-wrap  ">
                {" "}
                {mission.description}
              </p>
              <span className="text-[12px]  text-secondary font-medium font-sans  ">
              {mission.Date}
              </span>
            </section>
          </div>
  
  
  
        </div>
      </div>
    );
  };

  ProjectBoardCard.propTypes={
    mission:PropTypes.object.isRequired
  }

  return (
    <div className=" mt-10  flex min-h-[420px]  items-start overflow-x-auto overflow-y-hidden px[40px]  border border-stone-700 p-5 gap-6  rounded-xl mr-2  ">
      {
        Columns.map((col,i)=>{
          return (

            <ColumnDashboard key={i} column={col} />
          )
        })
      }
    </div>
  )
}



export default ProjectBoard;
