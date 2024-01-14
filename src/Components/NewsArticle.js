import { useEffect } from "react";

const NewsArticle = () => {
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
    <div
      className="relative rounded-3xs bg-white shadow-[10px_10px_50px_rgba(0,_0,_0,_0.08)] w-[390px] h-[371px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-left text-sm text-gray-100 font-paragraph-p2-regular hover:bg-aliceblue sm:w-[390px]"
      data-animate-on-scroll
    >
      <div className="absolute top-[20px] left-[20px] w-[350px] h-[285px]">
        <img
          className="absolute top-[0px] left-[0px] rounded-[50%] w-[70px] h-[70px] object-cover"
          alt=""
          src="/avater-02@2x.png"
        />
        <div className="absolute top-[94px] left-[0px] tracking-[-0.02em] leading-[30px] inline-block w-[350px] sm:text-sm sm:w-[350px]">
          <p className="m-0">An Overview of IIAM</p>
          <p className="m-0">
            Founded in 2021, IIAM (Important Information About Me) is a desktop
            software enabling physicians to 1) request medical information from
            other healthcare providers, 2)
          </p>
        </div>
      </div>
      <div className="absolute top-[273px] left-[0px] rounded-3xs bg-cadetblue-200 shadow-[10px_10px_50px_rgba(0,_0,_0,_0.08)] w-[390px] h-[98px] sm:w-[365px]" />
      <div className="absolute top-[294px] left-[20px] w-[194px] h-14 text-lg">
        <div className="absolute top-[0px] left-[0px] w-[194px] h-14">
          <p className="m-0 absolute top-[0px] left-[0px] tracking-[-0.02em] font-bold inline-block w-[137px]">
            Dec 2021
          </p>
          <p className="m-0 absolute top-[26px] left-[0px] tracking-[-0.02em] leading-[30px] inline-block w-[194px]">
            Learn More
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;
