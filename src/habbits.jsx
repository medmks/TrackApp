import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HabbitTable = ({ element, index }) => {
  return (
    <div className=" flex flex-row items-center w-full justify-start        ">
      <div className="w-full justify-start">
        <p className="text-[19px] ">{element}</p>
      </div> 
      <div className="w-full flex justify-center">
              <div className="w-[10em]  bg-slate-800 h-3  flex items-end  ">
        <div
          className={` bg-gradient-to-r from-violet-500 items-center justify-center to-indigo-500 h-3 ]`}
          style={{ width: `${index}em` }}
        />
      </div> 
      </div>&nbsp;{index}/10

      <div className="w-full flex justify-end">
        <p>
        13H43Min
        </p>
      </div>
    </div>
  );
};
HabbitTable.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Habbits = ({ acivitiesNames }) => {
  const [Taskes, setTaskes] = useState(["Gym", "Jogging", "Coding"]);

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
Habbits.propTypes = {
  acivitiesNames: PropTypes.func.isRequired,
};
