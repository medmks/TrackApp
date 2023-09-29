import Activity from "./assets/Acivities";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HobbitSection = ({ element, index }) => {
  return (
    <div className=" flex flex-row items-center justify-between   ">
      <div>
        <p className="text-[19px] ">{element}</p>
      </div>
      <div className="w-[10em]  bg-slate-800 h-3  flex items-end  ">
        <div
          className={` bg-gradient-to-r from-violet-800 items-center justify-center to-violet-300 h-3 w-[${index}em]`}
        />
      </div>
    </div>
  );
};
HobbitSection.propTypes = {
  element: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
const Habbits = () => {
  const [Activites, setActivites] = useState([]);

  useEffect(() => {
    const Fetchcsv = async () => {
      const Avt = new Activity();
      let Donne = await Avt.GetactivityName();
      setActivites(Donne.filtedArray);
    };
    Fetchcsv();
  }, []);

  return (
    <div className="  w-[40em] m-8 ">
      <div className=" bg-transparent border border-slate-600  rounded-xl ">
        <div className="bg-neutral-800  rounded-t-xl p-2  ">
          <h1 className=" text-white text-[25px] ">Habbits Progression</h1>
        </div>
        <div className="p-4">
          {Activites &&
            Activites?.map((e, i) => (
              <HobbitSection key={i} index={i + 1} element={e} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Habbits;
