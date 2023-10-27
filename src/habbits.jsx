import { useState } from "react";
import PropTypes from "prop-types";

const HabbitTable = ({ element, index }) => {
  const randNum = (Math.random() * 10).toFixed(0);
  return (
    <div className=" flex flex-row items-center w-full justify-start m-2 ">
      <div className="w-full flex justify-start items-center gap-4  flex-row">
        <div
          className={`w-2 h-8 ${
            randNum >= 5 ? "bg-fuchsia-300 " : "bg-indigo-400 "
          }   rounded-[1px] `}
        />
        <p className="text-[19px] ">{element}</p>
      </div>
      <div className="static flex justify-end ">
        <div className="w-fit flex items-center p-1  border border-opacity-70  justify-start border-stone-500 rounded-xl ">
          <div className="w-[10em] h-1 bg-gray-500 ">
          <div
            className={` bg-fuchsia-400 items-center justify-center  to-indigo-500 h-1 ]`}
            style={{ width: `${randNum}em` }}
          />

          </div>
        </div>
      </div>
      <p className="flex justify-center ml-5 w-full">{randNum * 10}% </p>
      {/* &nbsp;*/}
      <div className="w-full flex justify-center">
        <p>
          {index} H &nbsp;{randNum} Min
        </p>
      </div>
    </div>
  );
};
HabbitTable.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Habbits = () => {
  const [Taskes] = useState([
    "meeting",
    "Jogging",
    "Coding",
    "reading",
    "studing",
    "Coding",
    "Gym",
    "Jogging",
    "Coding",
  ]);
  return (
    <div className="  w-12/12 m-8  bg-neutral-900   rounded-2xl  ">
      <div className=" bg-transparent border border-violet-400   rounded-2xl">
        <div className="   p-4 ">
          <h1 className=" text-white text-[25px] pl-2 ">Task Progression</h1>
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
