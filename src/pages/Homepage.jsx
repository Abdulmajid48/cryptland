import Body from "../components/Body";
import Partners from "../components/Partners";
import Navbar from "../components/Navbar";
import Business, { business } from "../components/Business";
import Profile from "../components/Profile";
import Plan from "../components/Plan";
import Testimonies from "../components/Testimonies";
import Upgrade from "../components/Upgrade";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="font-[inter]">
      <Navbar />
      <Body />
      <Partners />
      {business.map((item, index) => {
        return (
          <Business
            optimise={item.optimise}
            bring={item.bring}
            explore={item.btn}
            img2={item.img2}
            img3={item.img3}
            realtimediv={item.realtimediv}
          />
        );
      })}
      <Profile />
      <Plan />
      <Testimonies />
      <Upgrade />
      <Footer />
    </div>
  );
}

export default Homepage;
