const getSet = () => {
  return (
    <div>
      S!:button to IMPORT NOTON TABLE
      <div className="flex w-full justify-end ">
        <div className="  w-fit flex flex-col border border-stone-600  m-10 h-screen ">
          <div className="">
            <button
              className="text-black  bg-white w-36 rounded-md  flex flex-row items-center p-1 hover:bg-stone-200   "
              onClick={() => Handelclick()}
            >
              <img src={notion} alt="notion" className="w-10 h-10 " />
              {/* {" Import table from Notion"} */}
            </button>

            <input
              ref={buttonRef}
              type="file"
              // onChange={handleFileChange}
              className="hidden"
            />
          </div>{" "}
          {FetchedData && (
            <div>
              <Habbits acivitiesNames={callbackfile} />
            </div>
          )}
        </div>
        <button onClick={() => testing(obj)}>Test</button>
      </div>
    </div>
  );
};
