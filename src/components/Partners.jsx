function Partners(props) {
  return (
    <div className="m-auto w-full sm:mt-14">
      <div className="m-auto text-center text-3xl font-bold mt-8 sm:-mt-10 sm:mb-5 mb-8 sm:w-5/12 w-3/4 sm:m-auto">
        Working with world class partners. We`re partner first!
      </div>
      <div className="h-24 m-auto w-auto bg-black flex flex-row  sm:gap-8 sm:px-32 px-5 gap-2 items-center">
        {sponsors.map((item, index) => {
          return <Sponsors sponsor={item.pic} />;
        })}
      </div>
    </div>
  );
}

function Sponsors(props) {
  return (
    <div>
      <img src={props.sponsor} alt="" />
    </div>
  );
}

const sponsors = [
  {
    pic: "./images/cambrian.svg",
  },
  {
    pic: "./images/commvault.svg",
  },
  {
    pic: "./images/crompton.svg",
  },
  {
    pic: "./images/seclock.svg",
  },
  {
    pic: "./images/software.svg",
  },
  {
    pic: "./images/aumni.svg",
  },
];

export default Partners;
