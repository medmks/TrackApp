// import BarChart from "./ChartBar";
// import Habbits from "./habbits";
import { notion } from "./assets";
import { useRef, useState } from "react";
import Activity from "./assets/Acivities";

const App = () => {
  const [Csvtext, setCsvtext] = useState();
  const buttonRef = useRef(null);

  
  const handleFileChange = (event) => {
    const InitialAct=new Activity
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const csvText = e.target.result;
        const Text= await InitialAct.GetactivityName(csvText)
        setCsvtext(Text)
        console.log(Csvtext);
        // Use PapaParse to parse the CSV data
        // Papa.parse(csvText, {
        //   complete: (result) => {
        //     // result.data contains the parsed CSV data as an array of arrays
        //     setCsvData(result.data);
        //   },
        //   header: true, // Set this to true if your CSV file has a header row
        // });
      };
      reader.readAsText(file);
    }
  };
  const Handelclick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div className=" w-full bg-stone-900  flex flex-col items-end justify-end flex-wrap   ">
      <div className="  flex flex-row m-10  ">
        <button
          className="text-black  bg-white  flex flex-row items-center p-1 hover:bg-stone-200   "
          onClick={() => Handelclick()}
        >
          <img src={notion} alt="notion" className="w-10 h-10 " />
          {" Import table from Notion"}
        </button>
        <input
          ref={buttonRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <br />
        {Csvtext && (
          <div>
            <h1 className="text-white text-[24px]">{''}</h1>{" "}
          </div>
        )}
      </div>
      {/* <BarChart />  
      <Habbits /> */}
    </div>
  );
};
export default App;
