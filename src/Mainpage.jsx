import Habbits from "./habbits";
import React from "react";
import CercleProgress from "./Cercle";

const Mainpage = () => {
  return (
    <React.Fragment>
      <div className=" w-3/4 h-fit border border-stone-700 p-2 mt-4 rounded-xl mr-2  ">
        {/* <BackGroundBloobs/> */}

        <h2 className="font-extralight  text-secondary  p-3   ">
          Salam Mohamed{" "}
        </h2>
        <div className="flex flex-row  gap-3 pl-3">
          <div className="bg-gray-800  shadow-xl shadow-black  w-fit p-1 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#A2FF86"
              className="w-4 h-4    "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <span className="font-light   tracking-wider ">
            You are almost there
          </span>
        </div>

        <div className=" w-full ">
          <CercleProgress />
        </div>
        <Habbits acivitiesNames={7} />
      </div>
    </React.Fragment>
  );
};
export default Mainpage;
