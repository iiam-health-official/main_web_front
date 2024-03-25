import { useState, useCallback, useEffect } from "react";
import NewsPopUp from "./NewsPopUp";
import PortalPopup from "./PortalPopup";

const NewsArticle = ({ Logo, Heading, Overview, Date, LMLink, Content }) => {
  const [isNewsPopUpPopupOpen, setNewsPopUpPopupOpen] = useState(false);
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
  const openNewsPopUpPopup = useCallback(() => {
    setNewsPopUpPopupOpen(true);
  }, []);

  const onLearnMoreClick = useCallback(() => {
    if (LMLink){
      window.open(LMLink);
    }
  }, [LMLink]);

  const closeNewsPopUpPopup = useCallback(() => {
    setNewsPopUpPopupOpen(false);
  }, []);
  return (
    <>
      <div
        className="w-[440px] rounded-[10px] flex flex-col items-center justify-start py-5 px-[19px]  box-border gap-[41px] hover:bg-aliceblue  mq450:gap-[20px] bg-white shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(24px)] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] min-w-[156px] max-w-full text-left text-sm text-gray-100 font-head hover:bg-sp hover:shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.5)]"
        data-animate-on-scroll
        onClick={openNewsPopUpPopup}
      >
        <div className="self-stretch flex flex-col items-start  justify-center py-2.5 px-5 gap-[24px]">
          <img
            className="w-[70px] h-[70px] relative rounded-[50%] object-cover"
            loading="eager"
            alt=""
            src={Logo}
          />
          <div className="self-stretch h-[150px] relative tracking-[-0.02em] leading-[30px] inline-block">
            <p className="m-0 text-[18px]">{Heading}</p>
            <p className="m-0">{Overview}</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-2.5 pb-5 pr-2.5 pl-5 text-lg">
          <div className="w-[194px] flex flex-col items-start justify-start gap-[4px]">
            <b className="w-[137px] relative tracking-[-0.02em] inline-block">
              {Date}
            </b>
            <a
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch relative text-lg tracking-[-0.02em] leading-[30px] font-head text-gray-100 text-left inline-block whitespace-nowrap"
              onClick={onLearnMoreClick}>
              Learn More
            </a>
          </div>
        </div>
      </div>
      {isNewsPopUpPopupOpen && (
      <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeNewsPopUpPopup}
      >
        <NewsPopUp onClose={closeNewsPopUpPopup} Content={Content} Heading={Heading} />
      </PortalPopup>
    )}
    </>
  );
};

export default NewsArticle;
