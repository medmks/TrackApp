import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { pause, play } from "./utility/Extra";
const PerformanceCard = ({
  percent,
  color,
  title,
  extra,
  BackColor,
  TextColor,
  CirleColor,
}) => {
  const circumference = 50 * 2 * Math.PI;
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  console.log(circumference);
  const FormatTime = (Seconds) => {
    const Hours = Math.floor(Seconds / 3600);
    const minutes = Math.floor((Seconds % 3600) / 60);
    const seconds = Math.floor(Seconds % 60);
    return `${String(Hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0",
    )}:${String(seconds).padStart(2, "0")}`;
  };
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying]);

  return (
    <div
      className="flex flex-wrap gap-14  max-w-sm min-w-fit flex-row justify-center   shadow-2xl shadow-black      px-10   border border-zinc-700  rounded-2xl mb-3"
      style={{ backgroundColor: `` }}
    >
      {/* <div className=" flex inset-0 top-0 left-0  ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>

      </div> */}
      <div
        className="flex flex-shrink-0 items-center justify-center w-fit -m-6 overflow-hidden  rounded-full "
        style={{ backgroundColor: `${"#18181b"}` }}
        // style={{background:"radial-gradient (circle,rgb(29, 38, 125),transparent 80%) "}}
      >
        <svg
          className="w-32 h-32   transform translate-x-1 translate-y-1"
          aria-hidden="true"
        >
          <circle
            className="text-gray-600"
            strokeWidth="5"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
          <circle
            className={`${""}  flex flex-wrap  `}
            style={{ color: `${color}` }}
            strokeWidth="5"
            stroke="#6D67E4"
            strokeDasharray={circumference}
            data-percent="100"
            strokeDashoffset={circumference - (time / 100) * circumference}
            strokeLinecap="round"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
        </svg>

        <span
          className={`absolute text-2xl  ${""}`}
          style={{ color: `${isPlaying ? "#8D9EFF" : "#7091F5"}` }}
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex   rounded-full p-3"
          >
            {isPlaying ? pause : play}
          </button>
          {/* {percent}% */}
        </span>
      </div>

      <div className=" flex flex-col items-center justify-center flex-wrap   text-center ">
        <p className=" font-normal text-gray-400 outline-0  tracking-tighter sm:text-xl">
          {title}
        </p>
        <span
          className={`text-xl font-extralight tracking-wider   sm:block`}
          style={{ color: `${isPlaying ? "#8D9EFF" : "#7091F5"}` }}
        >
          {FormatTime(time)}
        </span>
      </div>
    </div>
  );
};
PerformanceCard.propTypes = {
  percent: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  extra: PropTypes.string.isRequired,
  BackColor: PropTypes.string.isRequired,
  TextColor: PropTypes.string.isRequired,
  // setTimeUp:PropTypes.func.isRequired,
  CirleColor: PropTypes.string,
};
const CercleProgress = () => {
  return (
    <div className=" m-3 mt-10 mb-10">
      <div className=" grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
        <PerformanceCard
          percent={0}
          color="text-rose-500"
          title="Focus Time"
          extra="0 min"
          BackColor="#F4CE14"
          TextColor=""
          CirleColor="#191919"
        />

        <PerformanceCard
          percent={0}
          color="text-red-500"
          title="Reading"
          extra="0 min"
          BackColor="#F4CE14"
          TextColor=""
          CirleColor="#191919"
        />
        {/* 
        <PerformanceCard
          percent={0}
          color="text-blue-500"
          title="Project "
          extra="0 min"
          BackColor="#F4CE14"
          TextColor=""
          CirleColor="#191919"
        />
        <PerformanceCard
          percent={0}
          color="text-blue-500"
          title="study time"
          extra="0 min"
          BackColor="#F4CE14"
          TextColor=""
          CirleColor="#191919"
        /> */}
      </div>
    </div>
  );
};

export default CercleProgress;
