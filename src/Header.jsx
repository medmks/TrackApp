const Header = () => {
  return (
    <div className=" w-full h-16  border-l  border-stone-500  ">
      <div className=" flex flex-row  items-center  justify-between p-2 mr-16   ">
        <h1 className="ml-2 text-[26px]  font-medium ">Home</h1>
        <div className=" flex flex-row gap-3 ">
          <button className="bg-indigo-700  p-3 w-48      rounded-3xl text-center font-normal text hover:bg-indigo-600  ">
            Track You Tasks{" "}
          </button>
          <button className="bg-gray-700 w-48   p-3 rounded-3xl text-center font-normal text hover:bg-gray-600  ">
            Send & receive{" "}
          </button>
          <button className="bg-zinc-900  rounded-full p-3 flex justify-center items-center hover:bg-zinc-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>
          </button>
          &nbsp;
          <div className="h-8  w-[1px] bg-slate-700  mt-2" />
          &nbsp;
          <button className="bg-zinc-900  rounded-full p-3 flex justify-center items-center hover:bg-zinc-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
