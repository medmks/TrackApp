import { useState } from "react";

const Light = () => {
  const [status, setstatus] = useState("stop");

  setInterval(() => {
    switching();
  }, 10000);

  const switching = () => {
    switch (status) {
      case "stop":
        setstatus("getready");
        break;
      case "getready":
        setstatus("GO");
        break;
      // case 'GO':setstatus('stop')
      // break;
      default:
        setstatus("stop");
    }
  };
  return (
    <div className=" flex justify-center">
      <div className=" bg-black h-fit  w-28 flex flex-col items-center gap-2 p-4  rounded-xl">
        <div
          className={`${
            status === "stop"
              ? "bg-red-600 shadow-lg  shadow-red-700  "
              : "bg-red-950  "
          } w-20  h-20  rounded-full `}
        />
        <div
          className={`${
            status == "getready"
              ? "bg-yellow-600 shadow-lg  shadow-yellow-700"
              : "bg-yellow-950"
          } w-20  h-20  rounded-full `}
        />
        <div
          className={`${
            status == "GO"
              ? "bg-lime-600  shadow-lg   shadow-lime-700 "
              : "bg-lime-950  "
          } w-20  h-20  rounded-full `}
        />
      </div>
    </div>
  );
};
export default Light;
