import { useState, useRef } from "react";
import { csv } from "./assets";

import BarChart from "./ChartBar";
// import Habbits from "./habbits";
import Activity from "./assets/Acivities";
import Timer from "./Components/Timer";
const SideBar = () => {
  const [FetchedData, setFetchedData] = useState(null);
  const buttonRef = useRef(null);

  const CallfileUpload = (file) => {
    let InitialClass = new Activity();

    let reader = new FileReader();
    reader.onload = (e) => {
      var text = e.target.result;
      const infos = InitialClass.GetactivityName(text);

      setFetchedData(infos);
    };

    reader.readAsText(file);
    return FetchedData;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setTimeout(() => {
        CallfileUpload(file);
      });
    }
  };
  const Handelclick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  return (
    <div className="w-1/4  h-screen border flex justify-center  rounded-xl border-stone-600 ">
      <div className=" flex justify-start items-start">
        <Timer/>
      </div>
      
    </div>
  );
};
export default SideBar;
