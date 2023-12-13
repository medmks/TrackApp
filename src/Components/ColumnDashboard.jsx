import propTypes from "prop-types"

const ProjectBoardCard=({mission})=>{
          return(
                    
          <section className="  h-48 bg-mainsBckground   flex flex-col    shadow-lg shadow-black justify-between p-5">
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
          )
}
ProjectBoardCard.propTypes={
          mission:propTypes.object.isRequired
        }
const ColumnDashboard = ({columns,mission}) => {
  return (
    <div className="bg-transparent   w-full   rounded-md flex flex-col  ">
          <div className=" flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    <h2 className=" font-semibold">{columns.Title}</h2>

          </div>
          
          <div className="h-[2px]  mt-5 mb-5 bg-gradient-to-r from-indigo-500 to-sky-400  " />

          <div className="flex flex-grow   flex-col overflow-y-auto overflow-x-hidden gap-5   ">
          {
                              mission.map((miss,i)=>{
                                        return (
                                                            <ProjectBoardCard key={i} mission={miss}/>
          
                                        )
                              })
                    }
          </div>

                 
    </div>
  )
}

ColumnDashboard.propTypes={
          columns:propTypes.object.isRequired,
          mission:propTypes.array.isRequired
}
export default ColumnDashboard