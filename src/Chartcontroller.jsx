import propTypes from "prop-types";
const Chartcontroller = ({ date }) => {
  return (
    <div className="flex justify-center ">
      <div className=" flex flex-row justify-center w-fit bg-slate-950 rounded-2xl ">
        <button
          className={` rounded-l-lg   `}
          onClick={
            () => console.log(date)
            //         onUpdate("-");
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill=" white"
            className="w-8 h-8 "
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className=" flex items-center text-secondary text-[20px] p-5 ">
          {date}
        </h2>
        <button
          className={`   rounded-md ${
            null
            // numbers[numbers.length - 1] && !numbers == numbers[step] ? null : null
          } rounded-r-lg   `}
          onClick={() => {
            console.log(date);
            //         onUpdate("+");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

Chartcontroller.propTypes = {
  date: propTypes.string,
};

export default Chartcontroller;
