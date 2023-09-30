import BarChart from "./ChartBar";
// import Habbits from "./habbits";
import { notion } from "./assets";
import { useRef, useState } from "react";
import Activity from "./assets/Acivities";

const App = () => {
  const buttonRef = useRef(null);
  const [Text, settext] = useState(null);

  // const ccallfile=
  const callfile = (file) => {
    let InitialClass = new Activity();

    let reader = new FileReader();
    reader.onload = (e) => {
      var text = e.target.result;
      const infos = InitialClass.GetactivityName(text);
      // console.log(infos);
      settext(infos);
    };

    reader.readAsText(file);
    return Text;
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) return callfile(file);
  };

  const Handelclick = () => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };
  return (
    <div className=" w-full flex flex-col items-end justify-end flex-wrap   ">
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
      </div>
      {Text && <BarChart getdata={Text} />}
    </div>
  );
};
export default App;
