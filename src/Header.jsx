const Header = () => {
  return (
    <div className=" w-full h-20 border-l  border-stone-500 ">
      <div className=" flex flex-row  items-center m-3 justify-between ">
        <h1 className=" text-[24px] font-medium ">Home</h1>
        <div className=" flex flex-row gap-5">
          <button className="bg-violet-700 p-3 rounded-3xl text-center font-normal text hover:bg-violet-600  ">

            Track You Tasks{" "}
          </button>
          <button className="bg-gray-700  p-3 rounded-3xl text-center font-normal text hover:bg-gray-600  ">
                
                Send & receive{" "}
              </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
