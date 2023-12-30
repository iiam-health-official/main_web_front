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
      className="w-[1280px] h-[576px] overflow-hidden text-left text-[48px] text-whitesmoke font-arial-black"
      id="main"
    >
      <div className="absolute top-[95px] left-[727px] w-[452px] h-[369px] overflow-hidden flex flex-col items-center justify-end">
        <img
          className="relative w-[452px] h-[364px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt="Laptop"
          src="./Laptop.png"
          data-animate-on-scroll
        />
      </div>
      <div
        className="absolute top-[95px] left-[88px] w-[639px] h-[200px] overflow-hidden flex flex-col items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
        data-animate-on-scroll
      >
        <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block w-[639px] h-[201px] shrink-0">
          Bringing New Patient Referrals to cloud
        </h1>
      </div>
      <div
        className="absolute top-[295px] left-[88px] w-[639px] h-[168px] flex flex-col items-start justify-start gap-[11px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] text-[20px] text-darkslategray font-arial"
        data-animate-on-scroll
      >
        <p className="m-0 relative font-bold inline-block w-[574px] h-[88px] shrink-0">
          Improve Efficiency and decrease patient delays with our new patient
          referral and predictive analytics software platform
        </p>
        <Button
          className="relative"
          sx={{ width: 186 }}
          color="primary"
          name="Learn More"
          variant="contained"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Main;
