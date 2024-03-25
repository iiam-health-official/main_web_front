import { useEffect } from "react";

const PersonPopUp = ({ onClose, Image, Name, Description, Position }) => {
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
    <div
      className="w-[702px] relative rounded-xl bg-white shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(24px)] box-border flex flex-col items-start justify-center p-5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full max-h-full overflow-auto text-left text-sm text-black font-head border-[1px] border-solid border-gray-400 hover:bg-aliceblue sm:w-[390px]"
      data-animate-on-scroll
    >
      <div className="w-[658px] h-[285px] flex flex-col items-center justify-center gap-[14px]">
        <img
          className="w-[115px] relative rounded-[50%] h-[115px] object-cover"
          alt=""
          src={Image}
        />
        <div className="w-[658px] relative tracking-[-0.02em] leading-[30px] inline-block h-[148px] shrink-0 sm:text-sm sm:w-[350px]">
          <p className="m-0">
            {Description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonPopUp;
