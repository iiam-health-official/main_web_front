import { useEffect } from "react";
import  Navbar  from "../Components/Navbar";
import BackgroundImage from "../Components/Background";

const LandingPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div> 
        <BackgroundImage />
        <Navbar />
        <div className="relative w-full h-[879px] flex flex-col items-center justify-start pt-0 px-0 pb-[30px] box-border gap-[30px] text-center text-[36px] text-white font-arial sm:h-auto sm:gap-[15px]">
        <section
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-10 px-10 gap-[22px] text-left text-[48px] text-whitesmoke font-arial-black md:h-auto md:flex-col md:gap-[20px] md:items-center md:justify-center md:pl-20 md:pr-20 md:box-border sm:gap-[0px] sm:pl-5 sm:pr-5 sm:box-border"
            id="main"
            >
            <div className="flex-1 flex flex-col items-start justify-start px-20 gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]  md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:gap-[30px]" data-animate-on-scroll >
            <div className="self-stretch flex flex-row items-center justify-start" >
                <h1 className="m-0 flex-1 relative text-inherit font-normal font-inherit [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[30px]">
                Revolutionizing the US Healthcare
                </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[18px] text-white font-arial sm:gap-[30px]">
                <p className="m-0 self-stretch relative font-bold sm:text-[15px]">
                Improve Efficiency and decrease patient delays with our new
                patient referral and predictive analytics software platform
                </p>
                <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-darkslategray rounded-4xl flex flex-row items-center justify-center sm:w-[130px] sm:h-[30px] hover:bg-slate-500">
                <p className="m-0 relative text-sm font-semibold font-montserrat text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0 sm:text-[12px]">
                    Learn More
                </p>
                </button>
            </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-px px-[19px] md:self-stretch md:w-auto md:flex-[unset] md:items-center md:justify-center sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start sm:p-10 sm:box-border">
            <img
                className="relative w-[452px] h-[263px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] sm:self-stretch sm:w-auto"
                alt="Laptop"
                src="/Laptop.png"
                data-animate-on-scroll
                />
            </div>
        </section>
        <div className="self-stretch flex flex-col items-center justify-start gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:h-auto sm:gap-[15px] sm:items-center sm:justify-between sm:p-5 sm:box-border" data-animate-on-scroll>
            <p className="m-0 self-stretch relative font-bold [text-shadow:-2px_4px_0px_#2f6d8c] sm:text-[25px]">
            Our Partners
            </p>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-20 md:px-0">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-[30px] sm:flex-col sm:p-5 sm:box-border">
                <img
                className="relative w-[140px] h-7 overflow-hidden shrink-0"
                alt=""
                src="/frame.svg"
                />
                <img
                className="relative w-[140px] h-[63px] overflow-hidden shrink-0"
                alt=""
                src="frame1.svg"
                />
                <img
                className="relative w-[150px] h-9 overflow-hidden shrink-0"
                alt=""
                src="frame2.svg"
                />
                <img
                className="relative w-[120px] h-[52px] overflow-hidden shrink-0"
                alt=""
                src="frame3.svg"
                />
                <img
                className="relative w-40 h-10 overflow-hidden shrink-0"
                alt=""
                src="frame4.svg"
                />
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default LandingPage;
