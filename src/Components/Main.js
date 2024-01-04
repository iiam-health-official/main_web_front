import { useEffect } from "react";
import { Button } from "@mui/material";

const Main = () => {
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
    <section
      className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-between md:pt-[15vh] md:px-[150px] p-4 md:p-10 gap-4 md:gap-  text-left text-[3.5vw] text-whitesmoke font-arial-black"
      id="main"
    >
      <div className="flex flex-col w-[50vw] gap-8 items-center md:items-start justify-center md:justify-start">
        <div
          className="overflow-hidden w-full flex flex-col items-start justify-start [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <h1 className="m-0 relative w-full text-inherit font-normal font-inherit inline-block w-[639px] h-[201px] shrink-0">
            Revolutionizing the US Healthcare
          </h1>
        </div>
        <div
          className="shrink-0 flex w-full flex-col items-start justify-start gap-[11px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-[1.6vw] text-white font-arial"
          data-animate-on-scroll
        >
          <p className="m-0 relative w-full font-bold inline-block w-[574px] h-[88px] shrink-0">
            Improve Efficiency and decrease patient delays with our new patient
            referral and predictive analytics software platform
          </p>
          <div className="flex flex-col pt-[5vh]">
          <Button
            className="relative py-2"
            sx={{ width: 186 }}
            color="primary"
            name="Learn More"
            variant="contained"
            >
            Learn More
          </Button>
          </div>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center justify-center">
        <img
          className="relative w-full h-full max-h-[60vh] max-w-[40vw] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt="Laptop"
          src="./Laptop.png"
          data-animate-on-scroll
        />
      </div>
    </section>
  );
};

export default Main;


<section
  className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start p-4 md:p-10 gap-4 md:gap-8 text-left text-4xl text-white font-bold"
  id="main"
>
  <div className="flex flex-col items-center md:items-start justify-center md:justify-start">
    <div
      className="animate-fade-in-down opacity-0" // Replace with your animation classes
      data-animate-on-scroll
    >
      <h1 className="text-5xl md:text-6xl">
        Revolutionizing the US Healthcare
      </h1>
    </div>
    <div
      className="animate-fade-in-down opacity-0 text-base md:text-lg text-white" // Replace with your animation classes
      data-animate-on-scroll
    >
      <p className="font-normal my-2 md:my-4">
        Improve Efficiency and decrease patient delays with our new patient
        referral and predictive analytics software platform
      </p>
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        color="primary"
        name="Learn More"
        variant="contained"
      >
        Learn More
      </Button>
    </div>
  </div>
  <div className="animate-fade-in opacity-0" // Replace with your animation classes
       data-animate-on-scroll
  >
    <img
      className="w-full md:w-auto object-contain"
      alt="Laptop"
      src="./Laptop.png"
    />
  </div>
</section>


