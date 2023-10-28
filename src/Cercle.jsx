import  { useState } from 'react';
import PropTypes from "prop-types";

const PerformanceCard = ({ percent, color, title, extra }) => {
  const circumference = 50 * 2 * Math.PI;
  const [percentage] = useState(percent);

  return (
    <div className="flex items-center flex-wrap max-w-md px-10 bg-slate-300               shadow-xl rounded-2xl">
      <div className="flex items-center justify-center -m-6 overflow-hidden bg-black  rounded-full">
        <svg className="w-32 h-32 transform translate-x-1 translate-y-1" aria-hidden="true">
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
            strokeWidth="10"
            stroke="currentColor"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (percentage / 100) * circumference}
            strokeLinecap="round"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
          />
        </svg>
        <span className="absolute text-2xl text-blue-700" > {percentage}%</span>
      </div>
      <p className="ml-10 font-medium text-gray-600 sm:text-xl">{title}</p>
      <span className="ml-auto text-xl font-medium text-blue-600 hidden sm:block">{extra}</span>
    </div>
  );
};
PerformanceCard.propTypes ={
  percent:PropTypes.number.isRequired,
   color:PropTypes.string.isRequired,
   title:PropTypes.string.isRequired,
  extra:PropTypes.string.isRequired,

}
// const CercleProgress = () => {
//   return (
//     <div className=" py-10 px-10 ">
//       <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
//         <PerformanceCard percent={60} color="text-blue-600" title="Project" extra="+25%" />
//         <PerformanceCard percent={75} color="text-red-600" title="Focus Time" extra="20 min" />
//       </div>
//     </div>
//   );
// };


export default PerformanceCard;
