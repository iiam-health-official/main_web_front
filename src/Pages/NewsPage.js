import { useEffect } from "react";
import NewsArticle from "../Components/NewsArticle";
import Navbar from "../Components/Navbar";

const NewsPage = () => {
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
      <div className="w-full relative flex flex-col items-center justify-start py-[54px] text-[36px] pt-[100px] px-5 box-border gap-[57px] tracking-[normal] mq750:gap-[28px]">
        <header
          className="w-[1120px] h-[41px] relative font-bold font-head text-white text-center flex items-center justify-center [text-shadow:-2px_4px_0px_#2f6d8c] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full"
          data-animate-on-scroll
        >
          <p>Latest fom IIAM</p>
        </header>
        <section className="self-stretch overflow-hidden flex flex-row flex-wrap items-start justify-center p-[30px] box-border gap-[90px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq750:gap-[22px] mq750:pl-9 mq750:pr-9 mq750:box-border mq1125:gap-[45px] mq1125:pl-[72px] mq1125:pr-[72px] mq1125:box-border">
          <NewsArticle
            Logo="/avater-02@2x.png"
            Heading="Machine Learning Oncology"
            Overview="IIAM's study on using machine learning for predicting head and neck cancer surgery recommendations was published in the Head and Neck journal. The research showcases the model's accuracy based on extensive patient data."
            Date="Feb 12, 2024"
            LMLink="https://onlinelibrary.wiley.com/doi/10.1002/hed.27674"
          />
          <NewsArticle
            Logo="/avater-02@2x.png"
            Heading="Global Cancer Conference"
            Overview="Max Jiam, co-CTO of IIAM, presented their findings on a machine learning model for head and neck cancer surgery at the AHNS International Conference. The event was attended by leading physicians worldwide."
            Date="July 12, 2023"
          />
          <NewsArticle
            Logo="/avater-02@2x.png"
            Heading="NSF Grant Achievement"
            Overview="IIAM was awarded an NSF SBIR Phase I grant for developing predictive analytics and machine learning modeling for cancer referrals. This grant facilitates technology advancement for faster patient treatment."
            Date="Aug 10, 2023"
          />
          <NewsArticle
            Logo="/avater-02@2x.png"
            Heading="NSF Discovery Grant"
            Overview="Dr. Nicole Jiam and her team won an NSF Innovation Corporation Research Grant for translating digital health products into the marketplace. The program includes a $50,000 award."
            Date="Nov 2, 2021"
            LMLink="https://ohns.ucsf.edu/news/ohns-resident-and-team-win-50000-grant-their-healthcare-invention"
          />
          <NewsArticle
            Logo="/avater-02@2x.png"
            Heading="LaunchPad Fellowship"
            Overview="The IIAM team was selected for the Blackstone LaunchPad Fellowship, focusing on entrepreneurial skills for building successful businesses. This program supports innovative student ventures."
            Date="May 20, 2021"
          />
        </section>
        <button
          className="cursor-pointer [border:none] py-[9px] px-[29px] bg-blue w-[218px] rounded-4xl flex flex-row items-center justify-start box-border gap-[10px] whitespace-nowrap hover:bg-slategray active:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] active:opacity-[1]"
          id="Show-More"
        >
          <div className="h-[23px] flex-1 relative text-sm font-semibold font-head text-white text-center flex items-center justify-center">
            Show More
          </div>
          <div className="h-[30px] w-[30px] relative flex items-center justify-center">
            <img
              className="h-full w-full  object-contain absolute "
              alt=""
              src="/leftarrow@2x.png"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
