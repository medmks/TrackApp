import { useEffect, useState } from "react";
import PropTypes from "prop-types";


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
  const [percentage,setAnimatedPercentage] = useState();


  return (
    <div
      className="flex items-center   flex-row justify-between   max-w-md px-10  shadow-lg shadow-zinc-700/90 rounded-2xl"
      style={{ backgroundColor: `${BackColor}` }}
    >
      <div
        className="flex items-center justify-center -m-6 overflow-hidden  rounded-full "
        style={{ backgroundColor: `${CirleColor}` }}
      >
        <svg
          className="w-32 h-32 transform translate-x-1 translate-y-1"
          aria-hidden="true"
        >
          <circle
            className="text-gray-300"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
          <circle
            className={`${color} progress-circle `}
            style={{ color: `${color}` }}
            strokeWidth="10"
            stroke="currentColor"
            strokeDasharray={circumference}
            data-percent="100"
            strokeDashoffset={
              circumference - (percent / 100) * circumference
            }
            
            strokeLinecap="round"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
        </svg>
        <span className="absolute text-2xl" style={{ color: `${TextColor}` }}>
          {" "}
          {percent}%
        </span>
      </div>

      <div className=" flex flex-col items-center text-center ">
              <p className=" font-medium text-gray-600 sm:text-xl">{title}</p>
      <span
        className="ml-auto text-xl font-medium  hidden sm:block"
        style={{ color: `${TextColor}` }}
      >
        {extra}
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
  CirleColor: PropTypes.string,
};
const CercleProgress = () => {
  return (
    <div className=" py-10 px-10 ">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
        <PerformanceCard
          percent={26}
          color="text-red-500"
          title="Project "
          extra="+25%"
          BackColor="#d7d745"
          TextColor="#de3535"
          CirleColor="#1c1b22"
        />
        <PerformanceCard
          percent={50}
          color="text-blue-700"
          title="Focus Time"
          extra="+30 min"
          BackColor="#d7d745"
          TextColor="#0b5ffa"
          CirleColor="#1c1b22"
        />
      </div>
    </div>
  );
};

export default CercleProgress;
