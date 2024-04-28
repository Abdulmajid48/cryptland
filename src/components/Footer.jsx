function Footer(props) {
  const date = new Date();
  return (
    <div className="flex flex-col justify-between bg-black gap-16 text-white pt-20  h-auto">
      <div className=" flex flex-col justify-center items-center w-full sm:h-96 h-full">
        <div className="w-10/12 flex sm:flex-row flex-col gap-20">
          <div className=" flex flex-col gap-8 w-5/12">
            <div className="flex flex-row gap-2 text-center">
              <div className="flex justify-center items-center">
                <img src="./images/logo.svg" alt="" className="h-10" />
              </div>
              <div className="text-3xl">Crypt Land</div>
            </div>
            <div className="text-xs sm:w-1/2 w-5/6 leading-loose">
              Empower your finance team. The onestop plateform for all financial
              management of small and medium- sized business.
            </div>
            <div className="flex flex-row gap-5">
              <img src="./images/twitter.svg" alt="" className="h-4" />
              <img src="./images/facebook.svg" alt="" className="h-4" />
              <img src="./images/linkedin.svg" alt="" className="h-4" />
              <img src="./images/youtube.svg" alt="" className="h-4" />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-16 text-xs leading-loose">
            <div className="flex flex-col gap-7">
              <p className="text-md font-bold">Plateform</p>
              <p>Why Cloudwise</p>
              <p> Expense management</p>
              <p>Automatic bookkeeping</p>
              <p>Integeration</p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-md font-bold">Company</p>
              <p>About Us</p>
              <p> Plateform</p>
              <p> Solution</p>
              <p>Customer</p>
              <p>Pricing</p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-md font-bold">Resources</p>
              <p>Blog</p>
              <p> Help center</p>
              <p>Webinar</p>
              <p>FAQ`s</p>
              <p>Status</p>
            </div>
            <div className="flex flex-col gap-7">
              <p className="text-md font-bold">Solutions</p>
              <p>Self Employed</p>
              <p> Email Business</p>
              <p>Sms & Startups</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white w-5/6 m-auto mb-5 pt-8 text-xs text-center text-[#BCBCBC]">
        © {date.getFullYear()} Crypt Land. All rights reserved | Cookie
        Settings, Anti-Spam, Privacy, User agreement, Legal Notice and
        Responsible Disclosure
      </div>
    </div>
  );
}

export default Footer;
