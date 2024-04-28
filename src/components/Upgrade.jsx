function Upgrade(props) {
  return (
    <div className="bg-white flex justify-center items-center min-h-80 w-full mb-20">
      <div className="bg-[#003FDB] flex sm:flex-row flex-col-reverse justify-center items-center text-white gap-10 w-5/6 h-5/6 rounded-xl p-2 sm:pl-5">
        <div className="flex flex-col gap-12 sm:px-3">
          <div className="text-3xl font-bold sm:w-2/3 w-5/6 m-auto sm:m-0 ">
            Let`s Upgrade your finances experience by using Cryptland
          </div>
          <div className="text-white sm:m-0 m-auto flex flex-row mb-8">
            <button className=" rounded-full text-xs mr-4 bg-[#A3DC2F] sm:px-5 px-3">
              Request Demo
            </button>
            <button className="rounded-full p-2 text-xs bg-black sm:px-5 px-3 ">
              Watch Demo
            </button>
          </div>
        </div>
        <div>
          <img src="./images/upgrade.svg" alt="" className="h-5/6" />
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
