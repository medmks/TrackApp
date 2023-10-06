import BarChart from "./ChartBar";
import Habbits from "./habbits";
const Mainpage = () => {
  return (
    <div className=" w-3/4 h-fit border border-stone-500  ">
      <div className="border-b h-1/3  border-stone-500   ">
        <h3 className="font-medium text-secondary  p-3   ">Salam Mohamed </h3>

        <div className="flex flex-row  gap-3 pl-3">
          <div className="bg-green-500 w-fit p-1 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <span>You are almost there</span>
        </div>

        <div className=" h-[10em] w-full p-3 flex flex-row ml-5   gap-7 ">
        <div className="h-full w-5/12 bg-violet-500   border border-neutral-50   rounded-2xl">
            <div className="inline-flex p-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mt-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>

              <h2 className="text-white font-medium  text-[28px]">
                Start Tracking
              </h2>
              
            </div>
        
          </div>
          <div className="h-full w-5/12 bg-indigo-600 border  border-neutral-50   rounded-2xl">
            <div className="inline-flex p-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mt-1 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>

              <h2 className="text-white font-medium  text-[28px]">
                Make planner 
              </h2>
              
            </div>
        
          </div>
        </div>
      </div>
      <Habbits  />
       
        
       
    </div>
  );
};
export default Mainpage;
