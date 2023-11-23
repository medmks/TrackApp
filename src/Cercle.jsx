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

  return (
    <div
      className="flex flex-wrap gap-14  max-w-sm min-w-fit   px-10  drop-shadow-lg      rounded-2xl "
      style={{ backgroundColor: `${BackColor}` }}
    >
      <div
        className="flex flex-shrink-0 items-center justify-center -m-6 overflow-hidden  rounded-full "
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
            className={`${color} progress-circle flex flex-wrap  `}
            style={{ color: `${color}` }}
            strokeWidth="10"
            stroke="currentColor"
            strokeDasharray={circumference}
            data-percent="100"
            strokeDashoffset={circumference - (percent / 100) * circumference}
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

      <div className=" flex flex-col justify-center   items-center  text-center ">
        <p className=" font-medium text-gray-500 sm:text-xl">{title}</p>
        <span
          className=" text-xl font-medium    sm:block"
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
    <div className=" m-3 mt-10 mb-10">
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
        <PerformanceCard
          percent={35}
          color="text-red-500"
          title="Focus Time"
          extra="+30 min"
          BackColor="#222222"
          TextColor="#FC2947"
          CirleColor="#1c1b22"
        />

        <PerformanceCard
          percent={84}
          color="text-red-500"
          title="Focus time"
          extra="+30 min"
          BackColor="#222222"
          TextColor="#FC2947"
          CirleColor="#1c1b22"
        />

        <PerformanceCard
          percent={18}
          color="text-red-500"
          title="Project "
          extra="+25%"
          BackColor="#222222"
          TextColor="#FC2947"
          CirleColor="#1c1b22"
        />
        <PerformanceCard
          percent={58}
          color="text-red-500"
          title="Project "
          extra="+25%"
          BackColor="#222222"
          TextColor="#FC2947"
          CirleColor="#1c1b22"
        />
      </div>
    </div>
  );
};

export default CercleProgress;
