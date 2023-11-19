import { useState, useRef } from "react";
import "./chart.css";
import BarChart from "./ChartBar";
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
    <div className="w-2/4  h-screen border border-stone-700 rounded-md flex flex-col gap-16  ">
      {/* <div className=" flex justify-start mt-4 items-start"> */}
      <Timer />
      {/* </div */}

      <div className="  m-0 w-full    ">
        <input
          className=" hidden"
          type="file"
          ref={buttonRef}
          onChange={(e) => handleFileChange(e)}
        />
        {!FetchedData ? (
          <div className="gg cursor-pointer" onClick={() => Handelclick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#222222"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <p className="text-zinc-800    ">Extract Csv File</p>
            {/* Your content goes here */}
          </div>
        ) : null}
        {FetchedData ? <BarChart getdata={FetchedData} /> : null}
      </div>
    </div>
  );
};
export default SideBar;
