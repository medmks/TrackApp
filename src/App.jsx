// import './App.css'
// import "./index.css
import { useEffect,useRef,useState } from "react";
import Activity from "./assets/Acivities";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// import PropTypes from "prop-types";
    const colors = {
              purple: {
                default: "rgba(149, 76, 233, 1)",
                half: "rgba(149, 76, 233, 0.5)",
                quarter: "rgba(149, 76, 233, 0.25)",
                zero: "rgba(149, 76, 233, 0)"
              },
              indigo: {
                default: "rgba(80, 102, 120, 1)",
                quarter: "rgba(80, 102, 120, 0.25)"
              },
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
          borderColor:'rgb(88, 55, 208)',
 
      };

const  BarChart = () => {
  const chartRef = useRef(null);


            const [testate,settestate]=useState([]);
            const [days,setdays]=useState([[]]);
            const [step,setstep]=useState(0);

// const options={ 
//   scales: {
//   x: {
//     beginAtZero: true,

//      time: {
//     displayFormats: {
//       quarter: 'MMM YYYY'
//          }
//                   },
// grid: {
// color: 'rgba(246, 246, 246, 0.429)',
// borderColor: 'grey',
// tickColor: 'grey',

// }
// },
// y: {title: {
//   color: 'white',
//   display: true,
//   text: 'Minutes'
// },
// grid: {
// color: 'rgba(246, 246, 246, 0.429)',
// borderColor: 'grey',
// tickColor: 'grey',


// }
// }
// }

// }
const options = {
scales:{
  y: {
  title: {
  color: 'white',
  display: true,
  text: 'Minutes',
},

grid: {
  color: colors.indigo.quarter,


},
ticks: {
  beginAtZero: false,
  max: 63,
  min: 57,
  padding: 10
}
},
},

layout: {
  padding: 10
},
  responsive: true,
  plugins: {
    legend: {
      position: 'top'  ,
    },
    title: {
      display: true,
      text: 'Time Spent on phone each week',
    },
  },
};

useEffect(()=>{
  const  fet= async()=>{
      const Avt=new Activity;
      let Donne=await Avt.GetactivityName()
      console.log(Donne);
      settestate(Donne.TimeOn);
      setdays(Donne.Weeks)
      const lastIndex=(Donne.Weeks.length)-1
      setstep(lastIndex)
  }
fet()
},[])

const onUpdate = (symb)=>{
          if(symb ==='+' && (days?.length)-1 > step   ){
            
            setstep(prevstep => prevstep + 1)  
             console.log(step);
          }
          if (symb==='-'&& step>0) {
            setstep(prevstep => prevstep - 1)  
            console.log(step);
          } 
}



const data = () => {
  return {
    labels:['Mon','Tur','Wed','Thu','Fri','Sat','Sun'],
    datasets: [{
      // data: [33, 53, 85, 41, 44, 65],
      // fill: "start",
                    label:'labels',
              type:'line',
              data:(testate?testate[step]: null),
              fill: true,
              pointBackgroundColor: colors.purple.default,
              borderColor: colors.purple.default,
              lineTension: 0.2,
              borderWidth: 2,
              pointRadius: 3,
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
            var gradient = ctx.createLinearGradient(0, 25, 0, 360);
            gradient.addColorStop(0, colors.purple.half);
            gradient.addColorStop(0.35, colors.purple.quarter);
            gradient.addColorStop(1, colors.purple.zero);
        return gradient;
      },
    }]
  };
};

  return (

      <div className="w-full flex justify-center flex-col flex-nowrap items-center">
        <div className="w-[60em] p-4 rounded-2xlw-20 shadow-2xl shadow-black   ">
          <Bar ref={chartRef} className=" " data={data()}  options={options} />
            <div className=" flex flex-row justify-center">

              <button className={` rounded-r-lg `} onClick={()=>{onUpdate('-')}}> 
              <img src="https://cdn.icon-icons.com/icons2/1339/PNG/512/arrowpointingleft_87473.png"className="w-5 h-5 object-contain" />
              </button>    
              <h2 className=" flex items-center text-secondary text-[24px] p-5 ">{days[step][0]}</h2>  
              <button  className={`${(testate[testate.length-1]==testate[step]?null : null )}    rounded-l-lg`}  onClick={()=>{onUpdate('+')}}>
              <img src="https://cdn.icon-icons.com/icons2/1339/PNG/512/arrowpointingleft_87473.png" className="w-5 h-5 rotate-180  object-contain   "/>
              </button>
            </div>

        </div>
      </div>
  );
};


export default BarChart;
