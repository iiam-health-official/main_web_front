import { useEffect } from "react";

const NewsPopUp = ({ onClose, Content, Heading }) => {
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
      className="w-[702px] h-[530px] rounded-xl bg-white shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(24px)] box-border flex flex-col items-center justify-start p-5 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full max-h-full overflow-auto text-center text-lg text-gray-100 font-head border-[1px] border-solid border-gray-400 hover:bg-aliceblue sm:w-[390px]"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-[14px_0px]">
        <img
          className="w-[104px] relative rounded-[50%] h-[104px] object-cover"
          alt=""
          src="/avater-02@2x.png"
        />
        <p className="m-0 self-stretch relative tracking-[-0.02em] font-bold">
          {Heading}
        </p>
        <i className="self-stretch relative text-sm tracking-[-0.02em] leading-[30px] font-head text-black text-left sm:text-sm sm:w-[350px]">
          <p className="m-0">
            {Content}
          </p>
        </i>
      </div>
    </div>
  );
};

export default NewsPopUp;
