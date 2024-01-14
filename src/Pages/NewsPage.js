import { useEffect } from "react";
import NewsArticle from "../Components/NewsArticle";
import Navbar from "../Components/Navbar";
import BackgroundImage from "../Components/Background"; 

const NewsPage = () => {
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
    <section
      className="relative w-full overflow-hidden flex flex-col items-center justify-start py-6 px-0 box-border text-center text-17xl text-white font-arial"
      id="News"
      >
      <div className="self-stretch flex flex-col items-center justify-start py-[30px] px-10 gap-[57px] sm:items-center sm:justify-start sm:pl-0 sm:pr-[15px] sm:box-border">
        <h1
          className="m-0 self-stretch relative text-inherit font-bold font-inherit [text-shadow:-2px_4px_0px_#2f6d8c] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] sm:text-17xl"
          data-animate-on-scroll
          >
          News
        </h1>
        <ul className="m-0 self-stretch flex flex-row flex-wrap items-center justify-center gap-[90px] sm:self-stretch sm:w-auto sm:flex-row sm:flex-wrap sm:gap-[30px] sm:items-center sm:justify-center">
          <NewsArticle />
          <NewsArticle />
          <NewsArticle />
        </ul>
        <div className="self-stretch flex flex-row items-end justify-center">
          <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-cadetblue-100 rounded-4xl flex flex-row items-center justify-start gap-[10px] hover:bg-darkcyan-100 active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]">
            <p className="m-0 relative text-sm font-semibold font-montserrat text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0">
              Show More
            </p>
            <img
              className="relative w-[30px] h-[30px] object-contain"
              alt=""
              src="/leftarrow@2x.png"
              />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default NewsPage;
