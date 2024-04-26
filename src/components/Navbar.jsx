import { useEffect, useState } from "react";

function Navbar(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1000px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1000px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [bar, toggleBar] = useState(false);

  function setBar() {
    // props.setOptions(bar);
    return toggleBar((prev) => {
      return !prev;
    });
  }

  return (
    <div className="bg-back text-white font-normal font-['inter']">
      {matches ? (
        <div className="h-24 sm:w-11/12 flex flex-row justify-between mr-4 ml-4 items-center">
          <div className=" flex flex-row items-center text-xl gap-2">
            <div>
              <img src="./images/logo.svg" alt="" className="h-10" />
            </div>
            <div>Crypt Land</div>
          </div>
          <div onClick={setBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div style={{visibility:bar? "visible":"hidden"}} className="absolute right-40 top-30">
            <div>About us</div>
            <div>Platform</div>
            <div>Solution</div>
            <div>Customer</div>
          </div>
        </div>
      ) : (
        <div className="h-20 sm:w-11/12 flex flex-row justify-between mr-4 ml-9 items-center">
          <div className="flex flex-row justify-between gap-4 text-lg">
            <div>About us</div>
            <div>Platform</div>
            <div>Solution</div>
            <div>Customer</div>
          </div>
          <div className=" flex flex-row items-center text-xl gap-2">
            <div>
              <img src="./images/logo.svg" alt="" className="h-10" />
            </div>
            <div>Crypt Land</div>
          </div>
          <div className=" flex flex-row text-lg justify-between gap-4 text-center align-middle">
            <div className="p-1">Price</div>
            <div className="p-1">Contact</div>
            <div className="p-1">Login</div>
            <div className="bg-[#A3DC2F] w-28 text-center text-black leading-3 rounded-3xl h-9 p-3">
              Sign up
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
