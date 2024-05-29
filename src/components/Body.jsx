function Body(props) {
  return (
    <div>
      <div className="h-auto bg-back flex justify-center items-center font-['inter'] text-white text-center align-middle">
        <div className="sm:w-3/5 w-3/4 h-96 px-10 flex flex-col gap-4 justify-center items-center mb-40">
          <div className="sm:text-4xl text-2xl font-bold leading-snug ">
            The Finance Solutions For Your Business
          </div>
          <div className="sm:px-16 font-normal text-xs leading-relaxed">
            Empower your finance team. The onestop plateform for all financial
            management of small and medium-sized business.
          </div>
          <div className="bg-white rounded-3xl h-9 sm:w-9/12 w-60 flex flex-row items-center justify-between sm:px-2 pl-2 pr-1 text-xs">
            <input
              type="email"
              className=" w-4/5 border-hidden text-black focus:outline-none"
              placeholder="enter your email address"
            />
            <input
              type="submit"
              className="bg-[#A3DC2F] h-6 sm:w-28 rounded-full text-black text-xs px-2"
              value={"Book a Demo"}
            />
          </div>
        </div>
      </div>
      <div className=" bg-white h-full -mb-40 w-full flex flex-row justify-center">
        {/* overlying Gridbox */}
        <Boxes />
      </div>
    </div>
  );
}

function Boxes(props) {
  return (
    <div className="w-4/5 sm:w-2/3 relative border-[#003FDB] border-8 rounded-2xl -top-40 bg-white p-3 h-auto ">
      <div className="grid sm:grid-cols-6 sm:grid-rows-3 gap-2 grid-rows-3 h-full">
        {/* first box */}
        <div className=" border-[#D8D8D8] border rounded-md sm:col-span-2 flex flex-row gap-2 p-2 justify-evenly">
          <div className="h-20 w-1/2 flex flex-col gap-6 justify-evenly">
            <p className="font-normal text-xs">Total Profit</p>
            <p className="font-bold text-2xl">$350.240</p>
          </div>
          <div className="h-20 w-1/3 flex flex-col gap-8 justify-evenly items-end pl-8">
            <p className="font-normal text-xs text-[#72A700]">+18.23</p>
            <img src="./images/graphgreen.svg" alt="" className="mb-1" />
          </div>
        </div>
        {/* second box */}
        <div className=" sm:col-span-2 border-[#D8D8D8] rounded-md border flex flex-row  gap-1 pt-2 justify-evenly">
          <div className="h-20 w-1/2 flex flex-col gap-6 justify-evenly">
            <p className="font-normal text-xs ">Total revenue</p>
            <p className="font-bold text-2xl">$400.690</p>
          </div>
          <div className="h-20 w-1/3 flex flex-col gap-8 justify-evenly items-end pl-8">
            <p className="font-normal text-xs text-[#EE1F1F]">+28.35</p>
            <img src="./images/graphred.svg" alt="" className="mb-1" />
          </div>
          {/* third box */}
        </div>
        <div className=" sm:col-span-2 border-[#D8D8D8] rounded-md border flex flex-row gap-1 pt-2 justify-evenly">
          <div className="h-20 w-1/2 flex flex-col gap-6 justify-evenly">
            <p className="font-normal text-xs">Product sold</p>
            <p className="font-bold text-2xl">$200.000</p>
          </div>
          <div className="h-20 w-1/3 flex flex-col gap-8 justify-evenly items-end pl-8">
            <p className="font-normal text-xs text-[#003FDB]">+28.35</p>
            <img src="./images/graphblue.svg" alt="" className="mb-1" />
          </div>
        </div>
        <div className="sm:row-span-2 border-[#D8D8D8] rounded-md border">
          <div className="flex flex-col justify-center ml-2 gap-1 pt-2">
            <div className="text-xs">Total Balance</div>
            <div className="text-xl">$350.0</div>
            <button className="text-xs bg-[#72A700] w-11/12 m-auto text-white rounded">
              Transfer
            </button>
          </div>
          <hr className="w-10/12 m-auto mt-2" />
          <div className="flex flex-col gap-2 ml-2">
            <div className="flex flex-row justify-between text-xs mt-1 mr-1">
              <div className="text-xs">Total income</div>
              <div className="">92%</div>
            </div>
            <div className="text-xl">$320.0</div>
          </div>
          <hr className="w-10/12 m-auto mt-2" />
          <div className="flex flex-col gap-2 ml-2">
            <div className="flex flex-row justify-between text-xs mt-1 mr-1">
              <div className="text-xs ">Expenses</div>
              <div className="">92%</div>
            </div>
            <div className="text-xl">$220.0</div>
          </div>
        </div>
        {/* fourth box */}
        <div className="sm:row-span-2 sm:col-span-4  border-[#D8D8D8] rounded-md border text-xs ">
          <div className="sm:flex hidden flex-row justify-between pt-2 px-2">
            <div>Speed overview</div>
            <div className="flex flex-row justify-between gap-2">
              <p>Daily</p>
              <p>Weekly</p>
              <p>Monthly</p>
              <p>Yearly</p>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 items-end pl-3">
            <div>
              {" "}
              <img src="./images/graphx.svg" alt="" />
            </div>
            <div className="mr-0">
              <img src="./images/graph.svg" alt="" className="mr-0" />
            </div>
          </div>
        </div>
        {/* fifth box */}
        <div className=" border-[#D8D8D8] border rounded-md sm:row-span-2 text-xs sm:pt-2 pl-2">
          <div className="flex flex-col justify-between gap-1">
            <div>Employee</div>
            <div className="mb-2 border-b-[#F6F6F6] border-b-4">
              <img src="./images/greenbox.svg" alt="" />
            </div>
          </div>
          <div>Independent Contractor</div>
          <div className="border-b-[#F6F6F6] border-b-4 mb-4 pb-2">
            <img src="./images/greenbox.svg" alt="" />
          </div>
          <div>Contracted Employee</div>
          <div className="border-b-[#F6F6F6] border-b-4 mb-4 pb-2">
            <img src="./images/greenbox.svg" alt="" />
          </div>
          <div>Stakeholders</div>
          <div className="border-b-[#F6F6F6] border-b-4 mb-4 pb-2">
            <img src="./images/greenbox.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
