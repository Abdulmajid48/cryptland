// Profiles of the CEOs
function Profile() {
  return (
    <div className=" bg-black flex justify-center sm:mt-0 pb-6">
      <div className=" w-5/6 text-white flex flex-col justify-around items-center gap-10">
        <div className="font-bold sm:w-1/3 w-4/5 m-auto text-center text-4xl mt-10">
          Modern Companies are built on Capital.
        </div>
        <div className="text-xs sm:w-1/2 w-4/5 m-auto text-center px-14">
          we provide software for the financial and operational needs of today`s
          founders so they can get back to doing what they do best-building
        </div>
        <div className="flex sm:flex-row flex-col justify-between sm:gap-5 gap-8 w-auto">
          {/* Benjamin */}
          <div>
            <img
              src="./images/benjamin.jpg"
              alt=""
              className="h-64 w-64 rounded-md mb-3"
            />
            <p>Benjamin McDonald</p>
            <p className="text-[#65676C] text-xs">Founder, CEO</p>
          </div>
          {/* Jett */}
          <div>
            <img
              src="./images/jett.jpg"
              alt=""
              className="h-64 w-64 rounded-md mb-3"
            />
            <p>Jett Yagan</p>
            <p className="text-[#65676C] text-xs">Founder, CEO</p>
          </div>
          {/* Layla */}
          <div>
            <img
              src="./images/layla.jpg"
              alt=""
              className="h-64 w-64 rounded-md mb-3"
            />
            <p>Layla Cramp</p>
            <p className="text-[#65676C] text-xs">Founder, CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
