function Testimonies(props) {
  return (
    <div className="bg-[#F2F4F5] flex justify-center pt-10">
      <div className="flex flex-col gap-2 items-center w-5/6">
        <div className="text-3xl font-bold  text-center">
          What our customers say
        </div>
        <div className="text-sm text-center w-2/3">
          "Thank you for your trust in Crypt Land! We are grateful for your
          feedback and are committed to providing the best [products/services
          offered]. Read what our clients have to say about their experience
          with us.
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 text-xs my-10 ">
          {testimonies.map((item, index) => {
            return (
              <Testimony
                small={item.small}
                normal={item.normal}
                testimony={item.testimony}
                profilepic={item.profilepic}
                name={item.name}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Testimony(props) {
  return (
    <div
      className=" flex flex-col gap-4 bg-white p-4 rounded-lg justify-between"
      style={
        (props.small && { gridRow: "span 1" },
        props.normal && { gridRow: "span 3" })
      }
    >
      <div className="leading-5 text-[#707070]">{props.testimony}</div>
      <div className="flex flex-row gap-2">
        <div>
          <img src={props.profilepic} alt="" className="h-8" />
        </div>
        <div className="flex flex-col">
          <div>{props.name}</div>
          <div>
            <img src={props.rating} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
const testimonies = [
  {
    normal: true,
    testimony:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    profilepic: "./images/ashley.jpg",
    name: "Ashley Cooper",
    rating: "./images/rating.svg",
  },
  {
    small: true,
    testimony:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
    profilepic: "./images/noah.jpg",
    name: "Noah Jack",
    rating: "./images/rating.svg",
  },
  {
    normal: true,
    testimony:
      "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    profilepic: "./images/william.jpg",
    name: "Ashley Cooper",
    rating: "./images/rating.svg",
  },
  {
    normal: true,
    testimony:
      "Teamollo delivered the site with in the timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    profilepic: "./images/william.jpg",
    name: "Gabrile Jackson",
    rating: "./images/rating.svg",
  },
  {
    testimony:
      "Teamollo delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
    profilepic: "./images/noah.jpg",
    name: "Ashley Cooper",
    rating: "./images/rating.svg",
  },
  {
    testimony:
      "Teamollo delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
    profilepic: "./images/william.jpg",
    name: "William Leo",
    rating: "./images/rating.svg",
  },
];

export default Testimonies;
