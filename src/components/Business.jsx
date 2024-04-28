// Boosting Business

function Business(props) {
  return (
    <div className="h-auto w-full bg-[#F8F8F8] pb-9 sm:pb-0">
      <div className="w-3/4 m-auto flex flex-col justify-between sm:gap-14 gap-10">
        <div
          className="sm:w-1/2 w-4/5 m-auto font-bold text-4xl sm:px-6 text-center mb-10 sm:mb-0 mt-10"
          style={{ display: props.realtimediv ? "none" : null }}
        >
          Boosting Business. Today and Tomorrow.
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-5 sm:gap-10 sm:h-80 h-96 mb-28 sm:mb-0">
          <div
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:mt-0 mt-10 h-32"
            style={{
              order: props.realtimediv ? 1 : null, //change order of the second div
              marginBottom: !props.realtimediv ? "5rem" : null,
            }}
          >
            {props.realtimediv ? (
              <div
                className=""
                style={{
                  gridRow: props.realtimediv ? "span 2" : null,
                  marginTop: props.realtimediv ? "2rem" : null,
                }}
              >
                <img src="./images/monthlylimit.svg" alt="" />
              </div>
            ) : (
              <div className="flex flex-row bg-white sm:justify-between gap-1">
                <div className="flex flex-col sm:gap-2 p-2 h-full">
                  <div className="text-xs">Total Expense</div>
                  <div className="sm:text-xs">$350.240</div>
                </div>
                <div className="mr-3">
                  <img src="./images/circle85.svg" alt="" />
                </div>
              </div>
            )}
            <div
              className="row-span-2 mt-8"
              style={{
                order: props.realtimediv ? 1 : null,
                marginTop: props.realtimediv ? "1rem" : null,
              }}
            >
              <img src={props.img2} alt="" />
            </div>
            <div className="">
              <img src={props.img3} alt="" />
            </div>
          </div>
          <div className="text-black flex flex-col gap-5 items-start sm:mt-0">
            <p className="font-bold text-3xl">{props.optimise}</p>
            <p className="text-xs">{props.bring}</p>
            <button className="text-xs bg-[#A3DC2F] rounded-full p-2 px-5">
              {props.explore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const business = [
  {
    optimise: " Optimise expense Management as a team",
    bring:
      "Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.",
    btn: "explore",
    img2: "./images/monthlylimit.svg",
    img3: "./images/onlinepayment.svg",
  },
  {
    realtimediv: true, //change order of the second div
    optimise: "Real-time accounting at your fingertips.",
    bring:
      "Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There`s now a new way of accounting.",
    btn: "explore",
    img2: "./images/monthlyinvoice.svg",
    img3: "./images/export.svg",
  },
];

export default Business;
export { business };
