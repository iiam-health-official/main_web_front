import { useEffect } from "react";
import  Navbar  from "../Components/Navbar";
import BackgroundImage from "../Components/Background";
import { Tilt } from 'react-tilt'
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";



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
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <div className="inset-0 bg-cover bg-top text-center bg-[url('Background.svg')] bg-repeat "> 
        <Navbar />
        <div className="w-full relative flex flex-col items-center justify-start pt-[45px] px-0 pb-[45px] box-border gap-[60px] text-center text-[36px] text-white  sm:h-auto sm:gap-[15px] tracking-[normal]">
        <section
            className="self-stretch overflow-hidden flex flex-row items-center justify-center py-10 px-10 gap-[22px] text-left text-[48px] text-white  md:h-auto md:flex-col md:gap-[20px] md:items-center md:justify-center md:pl-20 md:pr-20 md:box-border sm:gap-[0px] sm:pl-5 sm:pr-5 sm:box-border"
            id="main"
            >
            <div className="flex-1 flex flex-col items-start justify-start px-20 gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]  md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:gap-[30px]" data-animate-on-scroll >
            <div className="self-stretch flex flex-row items-center justify-start" >
                <h1 className="m-0 flex-1 relative text-inherit font-bold font-head [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[30px]">
                The Future of New Patient Referrals is Here
                </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[18px] text-white font-text sm:gap-[30px]">
                <p className="m-0 self-stretch relative font-head font-semibold sm:text-[15px]">
                An intelligent patient referral system to help subspecialty practices grow!
                </p>
                <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-darkslategray rounded-4xl flex flex-row items-center justify-center sm:w-[130px] sm:h-[30px] hover:bg-slate-500">
                <p className="m-0 relative text-sm font-semibold font-head text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0 sm:text-[12px]">
                    Learn More
                </p>
                </button>
            </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-px px-[19px] md:self-stretch md:w-auto md:flex-[unset] md:items-center md:justify-center sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start sm:p-10 sm:box-border">
              <div>
                <img
                className="relative w-[520px] h-[370px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] sm:self-stretch sm:w-auto"
                alt="Laptop"
                src="/Laptop.png"
                data-animate-on-scroll
                />
              </div>
            </div>
        </section>
        <section
            className="self-stretch overflow-hidden flex flex-row-reverse items-center justify-center py-10 px-10 gap-[22px] text-left text-[48px] text-white md:h-auto md:flex-col md:gap-[50px] md:items-center md:justify-center md:pl-20 md:pr-20 md:box-border sm:gap-[0px] sm:pl-5 sm:pr-5 sm:box-border"
            id="main"
            >
            <div className="flex-1 flex flex-col items-start justify-start px-20 gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]  md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:gap-[30px]" data-animate-on-scroll >
            <div className="self-stretch flex flex-row items-center justify-start" >
                <h1 className="m-0 flex-1 relative text-inherit font-bold font-head [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[30px]">
                Manage all your referrals on a Single Page
                </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[18px] text-white font-head sm:gap-[30px]">
                <p className="m-0 self-stretch relative font-bold sm:text-[15px]">
                IIAM’s interface enables subspecialty practices to manage new patient referrals, access AI-generated insights, and track key performance indicators
                </p>
                <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-darkslategray rounded-4xl flex flex-row items-center justify-center sm:w-[130px] sm:h-[30px] hover:bg-slate-500">
                <p className="m-0 relative text-sm font-semibold font-head text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0 sm:text-[12px]">
                    Learn More
                </p>
                </button>
            </div>
            </div>
            <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-px px-[19px] md:self-stretch md:w-auto md:flex-[unset] md:items-center md:justify-center sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start sm:p-10 sm:box-border">
            <img
                className="relative w-[572px] h-[400px] object-fit [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] sm:self-stretch sm:w-auto"
                alt="Laptop"
                src="/Dashboard image.png"
                data-animate-on-scroll
                />
            </div>
            
        </section>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <img
          className="h-[15px] w-[171px] relative"
          loading="lazy"
          alt=""
          src="/line.svg"
        />
      </div>
        <section className="self-stretch flex flex-col items-center justify-start gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:h-auto sm:gap-[15px] sm:items-center sm:justify-between sm:p-5 sm:box-border" data-animate-on-scroll>
            <p className="m-0 self-stretch relative font-head font-bold [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[25px]">
            Our Partners
            </p>
            <div className="self-stretch flex flex-col items-center justify-start py-0 px-20 md:px-0">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-[30px] sm:flex-col sm:p-5 sm:box-border">
                <div className="mx-[50px]">
                  <img
                    className="relative w-[200px] h-15 overflow-hidden shrink-0"
                    alt=""
                    src="/kki-black-2-removebg-preview.png"
                  />
                </div>
                <div className="mx-[50px]">
                  <img
                    className="relative w-[140px] h-[140px] overflow-hidden shrink-0"
                    alt=""
                    src="/nsf_logo_ba604992-ed6d-46a7-8f5b-151b1c3e17e3-removebg-preview.png"
                  />
                </div>
                <div className="mx-[50px]">
                  <img
                    className="relative w-[280px] h-13 overflow-hidden shrink-0"
                    alt=""
                    src="/UCSF_Health_Logo_21_no_tag_Black_300dpi_RGB.png"
                  />
                </div>
            </div>
            </div>
        </section>
        <Testimonial />
      </div>
        <Footer />
    </div>
  );
};

export default LandingPage;
