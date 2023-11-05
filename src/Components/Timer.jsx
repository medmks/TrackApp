// import { useEffect,useState } from "react";
import "./APe.js"
import "./sty.css"
const Timer = () => {
          // const [timeBetweenDates, setTimeBetweenDates] = useState();



  return (
  <div className="container">
    <div className="container-segment">
      <div className="segment-title"> </div>
      <div className="segment">
        <div className="flip-card" data-hours-tens>
          <div className="top min-w-[50px]">2</div>
          <div className="bottom min-w-[50px]">2</div>
        </div>
        <div className="flip-card" data-hours-ones>
          <div className="top min-w-[50px]">4</div>
          <div className="bottom min-w-[50px]">4</div>
        </div>
      </div>
    </div>
    
    <div className="container-segment">
      <div className="segment-title"></div>
      <div className="segment">
        <div className="flip-card" data-minutes-tens>
          <div className="top  min-w-[50px]"><p>0</p></div>
          <div className="bottom  min-w-[50px]"><p>0</p></div>
        </div> 
        <div className="flip-card" data-minutes-ones>
          <div className="top min-w-[50px]"><p>0</p></div>
          <div className="bottom min-w-[50px]"><p>0</p></div>
        </div>
      </div>
    </div>
    <div className="container-segment">
      <div className="segment-title"></div>
      <div className="segment">
        <div className="flip-card" data-seconds-tens>
          <div className="top  min-w-[50px] ">0</div>
          <div className="bottom  min-w-[50px] ">0</div>
        </div>
        <div className="flip-card" data-seconds-ones>
          <div className="top min-w-[50px]  ">0</div>
          <div className="bottom min-w-[50px]  ">0</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Timer