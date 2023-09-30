// import BarChart from "./ChartBar";
import { notion } from "./assets";
import { useRef, useState } from "react";
import Activity from "./assets/Acivities";
import Habbits from "./habbits";
import BarChart from "./ChartBar";
// import Habbits from "./habbits";

const App = () => {
  const buttonRef = useRef(null);
  const [FetchedData, setFetchedData] = useState(null);

  const callfile = (file) => {
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
        callfile(file);
      }, 0);
    }
  };

  const Handelclick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div className="flex w-full justify-end ">
      <div className="  w-fit flex flex-col border border-stone-500  m-10 h-screen ">
        <div className="">
          <button
            className="text-black  bg-white w-36 rounded-md  flex flex-row items-center p-1 hover:bg-stone-200   "
            onClick={() => Handelclick()}
          >
            <img src={notion} alt="notion" className="w-10 h-10 " />
            {/* {" Import table from Notion"} */}
          </button>

          <input
            ref={buttonRef}
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>  {
        FetchedData && ( <div><Habbits acivitiesNames={FetchedData}/><BarChart getdata={FetchedData}/></div> )
      }
      </div>
    
    </div>
  );
};
export default App;
