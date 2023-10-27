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

        <div className=" h-fit w-full p-3 flex flex-row ml-5   gap-7 ">
          <div className="h-full flex justify-center items-center w-5/12 bg-white border border-violet-500 rounded-2xl">

          {/* bg-violet-500  */}
          <div className="inline-flex p-4  ">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="rgb(139 92 246)"
                className="w-7 h-7 mt-2  "
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
              <h2 className="text-violet-500 font-medium  text-[28px]">
                Start Tracking
              </h2>
          </div>
          </div>
          <div className="h-full flex justify-center items-center w-5/12 bg-indigo-600 border   border-neutral-50   rounded-2xl">
          <div className="inline-flex p-4  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7  mt-2 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>

              <h2 className="text-white font-medium  text-[28px] ">
                Make planner
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Habbits acivitiesNames={7} />
    </div>
  );
};
export default Mainpage;
