// import { useEffect,useState } from "react";
// import BarChart from "./App";
// import Activity from "./assets/Acivities";
// const Meth = ()=>{  
//                   const [date,setdate]=useState(null)
//                   const [donnee,setdonnee]=useState(null)
//                   const [pas,setpas]=useState(0)


// //NOTE:OPTInse
// const options={ scales: {
//           x: {
//             grid: {
//               color: 'rgba(246, 246, 246, 0.429)',
//                 borderColor: 'grey',
//                 tickColor: 'grey',
//             }
//           },
//           y: {
//             grid: {
//               color: 'rgba(246, 246, 246, 0.429)',
//               borderColor: 'grey',
//               tickColor: 'grey',

//             }
//           }
//         }}
//         const onUpdate=(sym)=>{
//           // if(sym==='-'){
//           //   setdd([32, 45, 79, 40, 9, 12])}
//           // else{setdd([6, 45, 43, 43, 2, 43])}
//         }
//           useEffect(()=>{
//                     const fetchAct=async()=>{
//           try{      
//                     const Acti= new Activity
//                     let res= await Acti.GetNumbers() 
//                 setdate(res.Weeks)
//                 setdonnee(res.TimeOn)
//                 console.log(date,donnee);
//                               }
//           catch(error){
//                     console.error(error)
//           }}
//           fetchAct()
//                },[])
//  //NOTE:

//                const data= {
//                 labels: 'ssss',
//                 datasets: [{
//                     label:"testing",
//                     // type:'line',
//                     data:[22],
                    
//                     backgroundColor: [
//                       'rgba(255, 99, 132, 0.2)',
//                       'rgba(54, 162, 235, 0.2)',
//                       'rgba(255, 206, 86, 0.2)',
//                       'rgba(75, 192, 192, 0.2)',
//                       'rgba(153, 102, 255, 0.2)',
//                       'rgba(255, 159, 64, 0.2)'
//                   ],
//                     borderColor:'rgb(88, 55, 208)',
//                     borderWidth: 3
//                 }]
//             }
//           return<>
//                           <button onClick={()=>{onUpdate('-')}}>UP</button>
//                           <button onClick={()=>{onUpdate('+')}}>Down</button>

// {     date &&    <BarChart         data={data}   options={options}onUpdate={onUpdate} />}
//           </>
// }
// export default Meth