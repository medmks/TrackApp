import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HabbitTable = ({ element, index }) => {
  return (
    <div className=" flex flex-row items-center justify-between   ">
      <div>
        <p className="text-[19px] ">{element}</p>
      </div>
      <div className="w-[10em]  bg-slate-800 h-3  flex items-end  ">
        <div
          className={` bg-gradient-to-r from-violet-800 items-center justify-center to-violet-300 h-3 ]`}
          style={{ width: `${index}em` }}
        />
      </div>
    </div>
  );
};
HabbitTable.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Habbits = (acivitiesNames) => {
  const [Taskes, setTaskes] = useState(["Gym", "Jogging", "Coding"]);

  useEffect(() => {
    const Getnames =  () => {
      const data= acivitiesNames.acivitiesNames.filtedArray
      setTaskes(data);
      console.log(Taskes);
    };
    Getnames();
  }, [acivitiesNames]);

  return (
    <div className="  w-[35em] m-8 ">
      <div className=" bg-transparent border rounded-xl">
        <div className="bg-neutral-800  rounded-t-xl p-2 border ">
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
