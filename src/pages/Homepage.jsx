import Body from "../components/Body";
import Partners from "../components/Partners";
import Navbar from "../components/Navbar";
import Business from "../components/Business";

function Homepage() {
  return (
    <div className="font-[inter]">
      <Navbar />
      <Body />
      <Partners />
      <Business/>
    </div>
  );
}

export default Homepage;
