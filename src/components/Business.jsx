function Business() {
  return (
    <div className="h-auto w-full bg-[#F8F8F8]">
      <div className="w-3/4 m-auto flex flex-col justify-between sm:gap-14 gap-10">
        <div className="sm:w-1/2 w-4/5 m-auto font-bold text-4xl sm:px-6 text-center mb-10 sm:mb-0">
          Boosting Business. Today and Tomorrow.
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-36 sm:gap-10 h-96">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 sm:mt-0 mt-10 h-32">
            <div className="flex flex-row bg-white sm:justify-between gap-1">
              <div className="flex flex-col sm:gap-2 p-2 h-full">
                <div className="text-xs">Total Expense</div>
                <div className="sm:text-xs">$350.240</div>
              </div>
              <div className="mr-3">
                <img src="./images/circle85.svg" alt="" />
              </div>
            </div>
            <div className="row-span-2 mt-8">
              <img src="./images/monthlylimit.svg" alt="" />
            </div>
            <div>
              <img src="./images/onlinepayment.svg" alt="" />
            </div>
          </div>
          <div className="text-black flex flex-col gap-5 items-start sm:mt-0">
            <p className="font-bold text-3xl">
              Optimise expense Management as a team
            </p>
            <p className="text-xs">
              Bring harmony to team expenses with budget limits and real-time
              monitiring. Freedom for your staff. Peace of mind for you.
            </p>
            <button className="text-xs bg-[#A3DC2F] rounded-full p-2">
              Explore more
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Business;
