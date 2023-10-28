import { useState } from "react";
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
  const [percentage] = useState(percent);

  return (
    <div
      className="flex items-center flex-wrap max-w-md px-10  shadow-lg shadow-zinc-700/90 rounded-2xl"
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
            className={color}
            style={{ color: `${color}` }}
            strokeWidth="10"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={
              circumference - (percentage / 100) * circumference
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
          {percentage}%
        </span>
      </div>
      <p className="ml-10 font-medium text-gray-600 sm:text-xl">{title}</p>
      <span
        className="ml-auto text-xl font-medium  hidden sm:block"
        style={{ color: `${TextColor}` }}
      >
        {extra}
      </span>
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
                percent={53}
                color="text-red-500"
                title="something"
                extra="+25%"
                BackColor="#d7d745"
                TextColor="#de3535"
                CirleColor="#1c1b22"
              />
              <PerformanceCard
                percent={80}
                color="text-blue-700"
                title="something"
                extra="+25%"
                BackColor="#d7d745"
                TextColor="#0b5ffa"
                CirleColor="#1c1b22"
              />
      </div>
    </div>
  );
};

export default CercleProgress;
