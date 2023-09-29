// import BarChart from "./ChartBar";
// import Habbits from "./habbits";
import { notion } from "./assets";
import { useRef, useState } from "react";

const App = () => {
  const [CsvPath, setCsvPath] = useState('');
  const buttonRef = useRef(null);

  
  // const handleFileChange = (event) => {
  //   setCsvPath(event.target.value);
  //   console.log(event.target.value);
  

  // };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Use FileReader to read the selected file
      const reader = new FileReader();
      reader.onload = (e) => {
        const csvText = e.target.result;
        
        console.log(csvText);
        
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
        {CsvPath && (
          <div>
            <h1 className="text-white text-[24px]">{CsvPath}</h1>{" "}
            <img src={CsvPath} alt="edf" />
          </div>
        )}
      </div>
      {/* <BarChart />  
      <Habbits /> */}
    </div>
  );
};
export default App;
