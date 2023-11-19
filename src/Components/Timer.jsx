// import { useEffect,useState } from "react";
import "./APe.js";
import "./sty.css";
const Timer = () => {
  // const [timeBetweenDates, setTimeBetweenDates] = useState();

  return (
    <div className="container">
      <div className="container-segment">
        <div className="segment-title"> Hrs </div>
        <div className="segment">
          <div className="flip-card" data-hours-tens>
            <div className="top min-w-[57px]  ">2</div>
            <div className="bottom min-w-[57px]  ">2</div>
          </div>
          <div className="flip-card" data-hours-ones>
            <div className="top min-w-[57px]  ">4</div>
            <div className="bottom min-w-[57px]  ">4</div>
          </div>
        </div>
      </div>

      <div className="container-segment">
        <div className="segment-title">Min</div>
        <div className="segment">
          <div className="flip-card  " data-minutes-tens>
            <div className="top  min-w-[57px]  ">
              <p>0</p>
            </div>
            <div className="bottom  min-w-[57px]  ">
              <p>0</p>
            </div>
          </div>
          <div className="flip-card" data-minutes-ones>
            <div className="top min-w-[57px]  ">
              <p>0</p>
            </div>
            <div className="bottom min-w-[57px] ">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-segment">
        <div className="segment-title">Secs</div>
        <div className="segment">
          <div className="flip-card" data-seconds-tens>
            <div className="top  min-w-[57px]  ">0</div>
            <div className="bottom  min-w-[57px]  ">0</div>
          </div>
          <div className="flip-card" data-seconds-ones>
            <div className="top min-w-[57px]   ">0</div>
            <div className="bottom min-w-[57px]   ">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
