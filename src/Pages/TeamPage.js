import { useEffect } from "react";
import TeamPerson from "../Components/TeamPerson";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
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
      <div className="w-full relative h-[1885px] flex flex-col items-center justify-start p-[30px]  pt-[100px] box-border gap-[65px] text-center  text-white  font-head">
        <p className="m-0 w-[730px] relative font-bold flex items-center justify-center text-center text-[36px] text-white font-head [text-shadow:-2px_4px_0px_#2f6d8c] ">
          People who made it Successful
        </p>

        <section className="self-stretch flex flex-row items-start justify-start py-0 pr-[51px] pl-[51.5px] box-border max-w-full text-center text-white font-paragraph-p2-regular mq675:pl-[25px] mq675:pr-[25px] mq675:box-border">
          <div className="h-[370px] flex-1 rounded-xl overflow-hidden flex flex-row items-start justify-start pt-[27px] px-[20.5px] pb-[43px] box-border relative max-w-full">
            <div className="w-[1025.5px] !m-[0] absolute top-[calc(50%_-_158px)] left-[calc(50%_-_528px)] rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-start justify-start py-[60px] px-[19px] max-w-full border-[1px] border-solid border-white">
              <div className="h-[300px] w-[1025px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
              <img
                className="h-full w-[1025px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-xl max-h-full object-cover mix-blend-overlay z-[1]"
                loading="lazy"
                alt=""
                src="/rectangle@2x.png"
              />
              <h2 className="m-0 flex-1 relative leading-[120%] font-head text-[23px] inline-block max-w-full z-[2] mq450:text-lg mq450:leading-[22px] mq750:text-5xl mq750:leading-[29px]">
              At IIAM Corporation, we are driven by our unwavering commitment to efficient, accurate, and transparent patient care. We envision a world where all patients are able to access the care that they need. Our mission is to use technology to address primarily fax-driven approaches towards medical information exchange and to use machine learning to support patient referral processing and triaging.
              </h2>
            </div>
          </div>
        </section>

        <div className="self-stretch flex flex-col items-center justify-start gap-[0px] max-w-full text-center text-17xl text-white font-arial">

        <p className="m-0 w-[730px] relative font-bold flex items-center justify-center text-center text-[36px] text-white font-head [text-shadow:-2px_4px_0px_#2f6d8c] ">
          Our Values
        </p>

        <h2
            style={{
              fontSize: "20px",
              padding: "5% 20%",
              lineHeight: "35px"
            }}
            className=" self-stretch  relative font-bold font-inherit flex items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] leading-[20px]"
            data-animate-on-scroll>
            Customer-Centricity: Our customers are at the heart of everything we do. We relentlessly seek to understand their needs, provide exceptional and financial value, and foster long-lasting relationships. <br />
            Innovation: We are dedicated to pushing the boundaries of what's possible. We embrace change, encourage creativity, and continuously strive to develop cutting-edge solutions that transform industries.<br />
            Integrity: Honesty, transparency, and ethical conduct are the cornerstones of our business. We act with the utmost integrity in all our interactions with customers, partners, and team members.<br />
            Collaboration: We believe in the power of teamwork. We cultivate a culture of inclusivity, diversity, and mutual support, knowing that our collective intelligence is greater than the sum of individual efforts.<br />
            Patient Care: Integrity and social responsibility are integral to our identity. We are committed to putting patients first and positively contributing to the communities in which we operate.
 
            </h2>

          </div>
        <div className="self-stretch flex flex-col items-center justify-center ">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[170px]">
            <TeamPerson
              Image="/Max.png"
              Name="Max Jiam"
              Position="Co-Founder & Co-CTO"
              Description="Max Jiam is a graduate from Carnegie Mellon University, with a major in computer science with a machine learning/AI concentration. Prior to joining IIAM, he has worked on several mobile user interfaces as side projects, such as the dashboard for the TartanHacks hackathon and the Mites.io mobile interface. In his free time, he hangs out with friends, goes on walks, and satiates his obsession with boba tea.
              "
            />
            <TeamPerson
              Image="/Nicole.jpeg"
              Name="Nicole Jiam"
              Position="Co-Founder & CEO"
              Description="Dr. Nicole Jiam, a neurotologist and skull base surgeon at UCSF and executive director of the UCSF Otolaryngology Innovation Center, graduated from JHU with a neuroscience degree and received her medical degree from its School of Medicine. Post-residency in Otolaryngology - Head and Neck Surgery at UCSF, she pursued a two-year Neurotology fellowship at Harvard Medical School. Her work at IIAM has earned her the 2021 UCSF Catalyst Award and a 2021 Blackstone LaunchPad fellowship."
            />
            <TeamPerson
              Image="/Kevin.png"
              Name="Kevin Xin"
              Position="Co-Founder & Co-CTO"
              Description="Dr. Kevin Xin is a diagnostic radiology resident at the University of California, Irvine. He completed his undergraduate degree in biomedical engineering at the Johns Hopkins University. Afterwards, he attended medical school at the Johns Hopkins University School of Medicine. His interests include machine learning and technology transfer. Since joining the IIAM team, Kevin has helped develop the software's machine learning algorithms and front end."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

<div className="self-stretch rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-center justify-center pt-[75px] px-[75px] pb-[77px] relative max-w-full text-left text-[24px] text-gray-300 font-bahnschrift border-[1px] border-solid border-white mq450:pt-[49px] mq450:pb-[50px] mq450:box-border mq950:pl-[37px] mq950:pr-[37px] mq950:box-border">
  <div className="h-[420px] w-[1000px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
  <img
    className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay z-[1]"
    alt=""
    src="/rectangle@2x.png"
  />
  <div className="self-stretch flex flex-row items-center justify-center p-[50px] gap-[50px]">
    <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
      <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[2px]">
        <b className="w-60 relative leading-[32px] inline-block">Our Goals</b>
        <b className="w-[443.4px] relative text-11xl leading-[120%] inline-block">
          Heading 3
        </b>
      </div>
      <div className="w-[443.4px] flex-1 relative leading-[150%] font-head text-black inline-block">
        Text 1
      </div>
    </div>
    <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
      <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[2px]">
        <b className="w-[243px] relative leading-[32px] inline-block">
          Our Vision
        </b>
        <b className="w-[443.4px] relative text-11xl leading-[120%] inline-block">
          Heading 4
        </b>
      </div>
      <div className="w-[443.4px] flex-1 relative leading-[150%] font-head text-black inline-block">
        Text 2
      </div>
    </div>
  </div>
</div>;
