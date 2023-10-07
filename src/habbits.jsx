import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
// import {f} from "./utility/motion"

const HabbitTable = ({ element, index }) => {
  const randNum =( Math.random() * 10).toFixed(1)
  const [progress, setProgress] = useState(0);

  // Simulate progress incrementing over time using useEffect

  return (
    <div className=" flex flex-row items-center w-full justify-start        ">
      <div className="w-full justify-start">
        <p className="text-[19px] ">{element}</p>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[10em]  bg-slate-800 h-3  flex items-end  " >
          <div
         
            className={` bg-gradient-to-r from-violet-500 items-center justify-center  to-indigo-500 h-3 ]`}

            style={{ width: `${randNum}em` }}
          />
        </div>
      </div>
      &nbsp;{randNum * 10}%
      <div className="w-full flex justify-end">
        <p>{index}H{randNum}Min</p>
      </div>
    </div>
  );
};
HabbitTable.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Habbits = ({ acivitiesNames }) => {

  
  const [Taskes, setTaskes] = useState(["meeting", "Jogging", "Coding","reading", "studing", "Coding","Gym", "Jogging", "Coding"]);

  // useEffect(() => {
  //   const Getnames = () => {
  //     const data = acivitiesNames();
  //     setTaskes(data);
  //     console.log(Taskes);
  //   };
  //   Getnames();
  // }, [acivitiesNames]);

  return (
    <div className="  w-12/12 m-8 ">
      <div className=" bg-transparent border rounded-xl">
        <div className="bg-zinc-900  rounded-t-xl p-4 border ">
          <h1 className=" text-white text-[25px] ">Habbits Progression</h1>
        </div>
        <div className="p-4">
          {Taskes &&
            Taskes?.map((e, i) => (
              <HabbitTable key={i} element={e} index={i + 4} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Habbits;
// Habbits.propTypes = {
//   acivitiesNames: PropTypes.func.isRequired,
// };
