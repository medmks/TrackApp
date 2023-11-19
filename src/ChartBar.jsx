import { useEffect, useRef, useState } from "react";
// import Activity from "./assets/Acivities";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { colors } from "./constances/";

Chart.register(...registerables);

const BarChart = (getdata) => {
  const chartRef = useRef(null);
  const [numbers, setnumbers] = useState(null);
  const [days, setdays] = useState(null);

  const [step, setstep] = useState(0);
  useEffect(() => {
    const ApplyNumers = () => {
      console.log("This is from barchar ");
      const data = getdata?.getdata.subArrayCollection;

      if (data !== null) {
        let min = data.map((e) => e.map((e) => e.numbers));
        let days = data.map((e) => e.map((e) => e.date));
        console.log(days);

        setdays(days);
        setnumbers(min);
        setstep(min.length - 1);
        console.log(numbers);
      }
    };
    ApplyNumers();
  }, []);

  const options = {
    scales: {
      y: {
        title: {
          color: "white",
          display: true,
          // text: "Minutes",
        },

        grid: {
          color: colors.indigo.quarter,
        },
        ticks: {
          beginAtZero: false,
          max: 63,
          min: 57,
          padding: 10,
        },
      },
    },

    layout: {
      padding: 10,
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      // title: {
      //   display: true,
      //   text: "<h1> Time Spent on phone each week </h1>",
      // },
    },
  };
  console.log(step);
  const onUpdate = (symb) => {
    if (symb === "+" && days?.length - 1 > step) {
      setstep((prevstep) => prevstep + 1);
    }
    if (symb === "-" && step > 0) {
      setstep((prevstep) => prevstep - 1);
    }
  };
  const data = () => {
    return {
      // labels: days ? days[step] : null,
      labels: ["Mon", "Tur", "wed", "Tue", "Fri", "sat", "sun"],
      datasets: [
        {
          // data: [33, 53, 85, 41, 44, 65],
          // fill: "start",
          label: "Minutes",
          type: "line",
          data: numbers ? numbers[step] : null,
          fill: true,
          pointBackgroundColor: colors.Red.default,
          borderColor: colors.Red.default,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            var gradient = ctx.createLinearGradient(0, 25, 0, 360);
            gradient.addColorStop(0, colors.Red.half);
            gradient.addColorStop(0.35, colors.Red.quarter);
            gradient.addColorStop(1, colors.Red.zero);
            return gradient;
          },
        },
      ],
    };
  };
  //  shadow-2xl  shadow-indigo-500/50

  return (
    <div className=" ">
      <div className="flex justify-center flex-col flex-wrap rounded-3xl items-center    ">
        <h1 className="text-[23px] text-center ">Time on phone each week</h1>
        <Bar ref={chartRef} className=" " data={data()} options={options} />
        <div className=" flex flex-row justify-center  w-full rounded-2xl ">
          <button
            className={` rounded-l-lg  `}
            onClick={() => {
              onUpdate("-");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill=" white"
              className="w-8 h-8  rounded-lg "
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <span className=" bg-zinc-900  min-w-[17em] text-center rounded-xl  ">
            <h2 className="  text-rose-500 text-[20px]  ">
              {days && days[step][0]}{" "}
              {/* {days && days[step][6] ? days[step][6] : "Today"} */}
            </h2>
          </span>

          <button
            className={`${
              null
              // numbers[numbers.length - 1] && !numbers == numbers[step] ? null : null
            } rounded-r-lg   `}
            onClick={() => {
              onUpdate("+");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8  rounded-lg"
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
    </div>
  );
};
// BarChart.propTypes = {
//   props: PropTypes.array.isRequired,
//   // index: PropTypes.number.isRequired,
// };
export default BarChart;
