function Plan(props) {
  return (
    <div className="bg-[#F2F4F5] h-auto flex justify-center pt-14">
      <div className="flex flex-col justify-around items-center text-center gap-3">
        <div className="font-bold text-3xl ">Find the right plan</div>
        <div className="sm:w-7/12 w-2/3 text-sm px-4">
          "Invest in your company's future with our comprehensive financial
          solution. Contact us for pricing details and see how we can help you
          streamline your finances and reach your business goals.
        </div>
        <div className="flex sm:flex-row flex-col gap-4 justify-between items-center sm:w-4/5 w-11/12 px-3">
          {/* Plan table */}
          {plans.map((plan, index) => {
            return (
              <Plantable
                key={index}
                black={plan.black}
                backgroundcolor={plan.backgroundcolor}
                plantype={plan.plantype}
                amount={plan.amount}
                benefits={plan.benefits.map((benefit, index) => {
                  return <li key={index}>{benefit}</li>;
                })}
                button={plan.button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Each plan Table
function Plantable(props) {
  return (
    <div className="bg-white h-full py-3 flex flex-col items-start pl-5 pb-20 sm:w-1/3 w-3/4 gap-4 rounded-lg relative">
      <p
        className="font-normal text-sm"
        style={{ color: !props.black ? "#A3DC2F" : null }} //change color of "pro and enterprise" to green
      >
        {props.plantype}
      </p>
      <p className="font-bold text-lg">{props.amount}</p>
      <ul className="text-left flex flex-col gap-7 text-[#65676C] text-xs">
        {props.benefits}
      </ul>
      <button
        className="absolute bottom-4 self-center border-2 border-black p-2 px-7 rounded-full text-xs"
        style={{ backgroundColor: props.backgroundcolor ? "#A3DC2F" : null }} //change color of "contact us" to green
      >
        {props.button}
      </button>
    </div>
  );
}

// list of plan types
const plans = [
  {
    black: true,
    plantype: "Basic",
    amount: "$0",
    benefits: [
      "Get a professional website designed according to your needs.",
      "Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
    ],
    button: "select plan",
  },
  {
    plantype: "Pro",
    amount: "$499",
    benefits: [
      " Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
      "Get a fully designed Website",
      "Webflow Development",
      "24/7 Support system",
    ],
    button: "select plan",
  },
  {
    backgroundcolor: true,
    plantype: "Enterprise",
    amount: "$999",
    benefits: [
      "Get a professional website designed according to your needs.",
      "Get a fully designed Website.",
      "Webflow Development",
      "Limited Support",
      " Get a fully designed Website",
      "Limited Support",
      "Get a fully designed Website",
      "24/7 Support system",
    ],
    button: "Contact Us",
  },
];

export default Plan;
