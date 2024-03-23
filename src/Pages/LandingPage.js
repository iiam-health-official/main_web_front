import { useEffect } from "react";
import Navbar from "../Components/Navbar";
import BackgroundImage from "../Components/Background";
import { Tilt } from "react-tilt";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";

const LandingPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]",
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
      },
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
    <div className="inset-0 bg-cover bg-top text-center bg-[url('Background.svg')] bg-repeat ">
      <Navbar />
      <div className="w-full relative flex flex-col items-center justify-start pt-[45px] px-0 pb-[45px] box-border gap-[60px] text-center text-[36px] text-white  sm:h-auto sm:gap-[15px] tracking-[normal]">
        <section
          className="self-stretch overflow-hidden flex flex-row items-center justify-center py-10 px-10 gap-[22px] text-left text-[48px] text-white  md:h-auto md:flex-col md:gap-[20px] md:items-center md:justify-center md:pl-20 md:pr-20 md:box-border sm:gap-[0px] sm:pl-5 sm:pr-5 sm:box-border"
          id="main"
        >
          <div
            className="flex-1 flex flex-col items-center justify-center py-[45.5px] px-0 box-border gap-[31px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] min-w-[335px] max-w-full mq450:pt-[30px] mq450:pb-[30px] mq450:box-border mq450:flex-[unset] mq450:self-stretch mq675:gap-[15px_31px]"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <h1 className="m-0 flex-1 relative text-inherit font-bold font-head [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[30px]">
                The Future of New Patient Referrals is Here
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[18px] text-white font-text sm:gap-[30px]">
              <p className="m-0 self-stretch relative font-head font-semibold sm:text-[15px]">
                An intelligent patient referral system to help subspecialty
                practices grow!
              </p>
              <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-blue rounded-4xl flex flex-row items-center justify-center sm:w-[130px] sm:h-[30px] hover:bg-silver">
                <p className="m-0 relative text-sm font-semibold font-head text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0 sm:text-[12px]">
                  Learn More
                </p>
              </button>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-px px-[19px] md:self-stretch md:w-auto md:flex-[unset] md:items-center md:justify-center sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start sm:p-10 sm:box-border">
            <div>
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] mq450:flex mq450:self-stretch mq450:w-auto mq450:flex-1"
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
          <div
            className="flex-1 flex flex-col items-start justify-start px-20 gap-[40px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]  md:items-center md:justify-start md:pl-0 md:pr-0 md:box-border md:flex-[unset] md:self-stretch sm:gap-[30px]"
            data-animate-on-scroll
          >
            <div className="self-stretch flex flex-row items-center justify-start">
              <h1 className="m-0 flex-1 relative text-inherit font-bold font-head [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[30px]">
                Manage all your referrals on a Single Page
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-[18px] text-white font-head sm:gap-[30px]">
              <p className="m-0 self-stretch relative font-bold sm:text-[15px]">
                IIAM’s interface enables subspecialty practices to manage new
                patient referrals, access AI-generated insights, and track key
                performance indicators
              </p>
              <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-blue rounded-4xl flex flex-row items-center justify-center sm:w-[130px] sm:h-[30px] hover:bg-silver">
                <p className="m-0 relative text-sm font-semibold font-head text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0 sm:text-[12px]">
                  Learn More
                </p>
              </button>
            </div>
          </div>
          <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-px px-[19px] md:self-stretch md:w-auto md:flex-[unset] md:items-center md:justify-center sm:self-stretch sm:w-auto sm:h-auto sm:gap-[0px] sm:items-center sm:justify-start sm:p-10 sm:box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq450:w-[450px] mq450:h-[350px]"
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
        <section
          className="self-stretch flex flex-col items-center justify-start gap-[28px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] sm:h-auto sm:gap-[15px] sm:items-center sm:justify-between sm:p-5 sm:box-border"
          data-animate-on-scroll
        >
          <p className="m-0 self-stretch relative font-head font-bold [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[25px]">
            Our Partners
          </p>
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-20 md:px-0">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-[30px] gap-[20px] mq750:flex-wrap mq750:justify-center">
              <img
                className="h-10 w-[234px] relative object-contain"
                loading="lazy"
                alt=""
                src="/ucsf@2x.png"
              />
              <img
                className="h-[116px] w-[116px] relative object-cover"
                loading="lazy"
                alt=""
                src="/nsf@2x.png"
              />
              <img
                className="h-[93px] w-[218px] relative object-contain"
                loading="lazy"
                alt=""
                src="/kki@2x.png"
              />
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[50px] box-border max-w-full text-center text-17xl text-white font-head mq675:pb-8 mq675:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit [text-shadow:-2px_4px_0px_#19a8bd] mq450:text-3xl mq750:text-10xl">
              What healthcare professionals think of IIAM
            </h1>
            <div className="w-full flex flex-row flex-wrap items-start justify-center py-0 px-2 box-border gap-[28px_26px] max-w-full lg:self-stretch lg:w-auto lg:items-center lg:justify-center">
              <Testimonial Title = "Arizona-Based Neurosurgeon" Content = "If patients came in with complete records, I’d probably be able to see an additional 5 new patients a day."/>
              <Testimonial Title = "Bay Area Insight Manager" Content = "You’ve identified a MASSIVE pain point. How can I write you a check?"/>
              <Testimonial Title = "Bay Area Surgeon" Content = "Only 50% of new patient referrals have complete records. For complex cases, it can take up to an hour per patient to obtain the outside records"/>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
