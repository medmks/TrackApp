const Header = () => {
  return (
    <div className=" w-full h-20 border-l  border-stone-500 ">
      <div className=" flex flex-row  items-center m-3 justify-between ">
        <h1 className=" text-[24px] font-medium ">Home</h1>
        <div className=" flex flex-row gap-5">
          <button className="bg-violet-700 p-3 w-52     rounded-3xl text-center font-normal text hover:bg-violet-600  ">

            Track You Tasks{" "}
          </button>
          <button className="bg-gray-700 w-56   p-3 rounded-3xl text-center font-normal text hover:bg-gray-600  ">
                
                Send & receive{" "}
              </button>
              <button className="bg-zinc-900  rounded-full p-3 flex justify-center items-center hover:bg-zinc-700 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
              </button>&nbsp;
              <div className="h-8  w-[1px] bg-slate-200 mt-3"/>


        </div>
      </div>
    </div>
  );
};
export default Header;
