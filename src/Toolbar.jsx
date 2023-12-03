import { Home, TaskIcon, Infos, TableauIcon } from "./utility/Extra";
import {motion} from "framer-motion"
// import { Link } from "react-router-dom";
import { useState } from "react";
const tabs = [
  { id: "home", label: "Home", Icon: Home },
  { id: "Task", label: "ts", Icon: TaskIcon },
  { id: "Tableau", label: "Tableau", Icon: TableauIcon},
  { id: "info", label: "infos", Icon: Infos },
];
const Toolbar = () => {
  const [activeTab,setActiveTab]=useState(tabs[0].id)

  return (
    <div  className="flex items-center m-2">
      <div className="w-fit flex flex-col bg-transparent  border border-gray-700  justify-center p-3 drop-shadow-2xl shadow-lg shadow-black  gap-14 rounded-full  ">
      {/* // style={{background:"radial-gradient (rgb(),transparent 80%) ",opacity:"0.5"}} */}
      {
        tabs.map((tab,i)=>{
          return(
            <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/60"
            } relative rounded-full p-2  outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10  bg-white  mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {tab.Icon}
          </button>
          )
        })
      }

      
        {/* <button to="/myBoard" className={`     `}>
          {Home}
        </button>
        <button className={`    `}>
          <div className=" ">{TableauIcon}</div>
        </button>
        <button

          className={`    `}
        >
          <div className=" ">{TaskIcon}</div>
        </button>
        <button className={`  `}>
          <div className="">{Infos}</div>
        </button> */}
      </div>
    </div>
  );
};
export default Toolbar;
