// import BarChart from "./ChartBar";
import { notion } from "./assets";
import { useMemo, useRef, useState } from "react";
import Activity from "./assets/Acivities";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Mainpage from "./Mainpage";
import SideBar from "./sideBar";
// import Habbits from "./habbits";
// import BarChart from "./ChartBar";
// import Habbits from "./habbits";

const App = () => {
  const buttonRef = useRef(null);
  const [FetchedData, setFetchedData] = useState();

  // const getItems=useCallback(()=>{
  //   return [number,number+1,number+2]
  // },[number])

  const Callfile = (file) => {
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
        Callfile(file);
      });
    }
  };

  const Handelclick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div className=" ">
      <div className="  flex flex-row  bg-black ">
        <Toolbar/>
        <div className="flex flex-col w-full">
          <Header/>
          <div className="flex flex-row">
            <Mainpage/> 
            <SideBar/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
