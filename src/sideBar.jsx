import { useState ,useRef} from "react";
import { notion } from "./assets";
import BarChart from "./ChartBar";
// import Habbits from "./habbits";
import Activity from "./assets/Acivities";
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
    <div className="w-2/4  h-screen border-b border-t border-stone-500 ">
      <div className=" border-b  w-full h-fit border-stone-500 p-2 ">
      <button
              className=" bg-white rounded-md w-fit flex flex-row items-center p-2 hover:bg-stone-200   "
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
        />{" "}
              {FetchedData && <BarChart  getdata={FetchedData} />}

      </div>
    </div>
  );
};
export default SideBar;
