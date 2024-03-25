import { useEffect } from "react";
import Navbar from "../Components/Navbar";

const ProductPage = () => {
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
      <div className="w-full relative flex flex-row items-start justify-center pt-[100px] pb-[219px] text-center text-[36px] text-white font-head  pr-1 pl-0 box-border tracking-[normal]">
        <main className="flex-1 flex flex-col items-start justify-start max-w-full">
          <section className="self-stretch flex flex-col items-center justify-start gap-[65px] max-w-full text-center text-17xl text-white font-arial">
            <h1
              className="m-0 self-stretch h-[41px] relative text-inherit font-bold font-inherit flex items-center justify-center [text-shadow:-2px_4px_0px_#2f6d8c] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] mq450:text-3xl mq900:text-10xl"
              data-animate-on-scroll
            >
              Problem
            </h1>
            <h2
            style={{
              fontSize: "20px",
              padding: "5% 20%",
              lineHeight: "35px"
            }}
            className=" self-stretch h-[16px] relative font-bold font-inherit flex items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] leading-[20px]"
            data-animate-on-scroll>
            Nearly 1 in 3 new patient referrals to specialty physicians are never completed. Oftentimes, this is a result of incomplete medical records, delays in scheduling, and overall lack of transparency. As a result many patients with potentially serious conditions are not receiving the medical care they need. 
            </h2>
            <h1
              className="m-0 self-stretch h-[41px] relative text-inherit font-bold font-inherit flex items-center justify-center [text-shadow:-2px_4px_0px_#2f6d8c] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] mq450:text-3xl mq900:text-10xl"
              data-animate-on-scroll
            >
              One stop solution
            </h1>
            
            <h2
            style={{
              fontSize: "20px",
              padding: "5% 20%",
              lineHeight: "35px"
            }}
            className=" self-stretch h-[16px] relative font-bold font-inherit flex items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] leading-[20px]"
            data-animate-on-scroll>
            IIAM (Important Information About Me) is a cloud-based software enabling: <br />

            Patient self-scheduling and evidence-based referral routing<br />
            Practice coordinators to keep track of their requests to ensure a closed-loop referral process<br />
            Operation managers to gain insights on their referral patterns and network<br />
            Physicians to have more appropriately scheduled and triaged clinics<br />
            Patients to see their doctors quicker and receive better quality care


            </h2>
            
            
            
            
            <section className="w-[1082px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full">
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/clip-path-group@2x.png"
              />
            </section>

            <h2
            style={{
              fontSize: "20px",
              padding: "5% 20%",
              lineHeight: "35px"
            }}
            className=" self-stretch h-[16px] relative font-bold font-inherit flex items-center justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] leading-[20px]"
            data-animate-on-scroll>
            In addition, IIAM has built-in analytics offering insights on individual patients, practice, referring providers, and competitors. 

            The IIAM software will also enable efficient transfer of official medical documentation and imaging among healthcare providers in a predominantly fax-based drive system, saving an immense amount of time, finances, and energy.

            IIAM will be used most commonly in the case of patients with complex medical conditions, who often receive care from multiple healthcare centers and receive referrals to specialists. The use of IIAM in such situations improves resource allocation and expenditures both within the community and at tertiary healthcare centers. 


            </h2>


            <div className="self-stretch flex flex-col items-center justify-center">
              <img
                className="w-[171px] h-[15px] relative object-contain"
                loading="lazy"
                alt=""
                src="/line1@2x.png"
              />
            </div>
            <div
              className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[30px] px-10 box-border [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]opacity-[0] max-w-full text-lg font-bahnschrift"
              data-animate-on-scroll
            >
              <div
                className="self-stretch flex flex-col items-center justify-center max-w-full  mq900:items-start mq900:justify-center [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
                data-animate-on-scroll
              >
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq675:gap-[24px]">
                  <div className="flex-1 flex flex-col items-center justify-start text-[20px] gap-[25px] min-w-[276px] max-w-full">
                    <img
                      className="w-[50px] h-[50px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/charmgitrequest.svg"
                    />
                    <b className="self-stretch relative leading-[32px]">
                      Request Information
                    </b>
                    <b className="self-stretch h-16 relative  leading-[32px] inline-block font-arial mix-blend-normal">
                      Request medical information from other healthcare
                      providers
                    </b>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start text-[20px] gap-[25px] min-w-[276px] max-w-full">
                    <img
                      className="w-[50px] h-[50px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/materialsymbolsmonitoroutline.svg"
                    />
                    <b className="self-stretch relative leading-[32px]">
                      Keep Track
                    </b>
                    <b className="self-stretch h-16 relative leading-[32px] inline-block font-arial mix-blend-normal">
                      Keep track of their requests to ensure a closed-loop
                      referral process
                    </b>
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start text-[20px] gap-[25px] min-w-[276px] max-w-full">
                    <img
                      className="w-[50px] h-[50px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/materialsymbolsupload.svg"
                    />
                    <b className="self-stretch relative leading-[32px]">
                      Upload Information
                    </b>
                    <b className="self-stretch h-16 relative leading-[32px] inline-block font-arial mix-blend-normal">
                      Upload information to complete requests made by other
                      providers
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch overflow-hidden flex flex-row items-start justify-between py-5 px-[70px] box-border gap-[20px] max-w-full text-[20px] mq675:pl-[35px] mq675:pr-[35px] mq675:box-border">
              <div
                className="flex flex-col items-center justify-start gap-[25px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] max-w-full"
                data-animate-on-scroll
              >
                <b className="self-stretch h-[46px] relative inline-block mq450:text-base mq900:flex-1">
                  The IIAM software will enable the efficient transfer of
                  official medical documentation and imaging among healthcare
                  providers, saving an immense amount of time, finances, and
                  energy.
                </b>
                {/* <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-blue w-[186px] rounded-4xl flex flex-row items-center justify-between box-border gap-[10px] whitespace-nowrap hover:bg-slategray">
                  <div className="h-[23px] w-[119px] relative text-sm font-semibold font-montserrat text-white text-center inline-block shrink-0">
                    Learn More
                  </div>
                </button> */}
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-start py-[15px] px-0 gap-[70px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in]"
              data-animate-on-scroll
            >
              <h1 className="m-0 self-stretch h-[41px] relative text-inherit font-bold font-inherit inline-block [text-shadow:-2px_4px_0px_#19a8bd] sm:text-[25px]">
                What makes IIAM a No-Brainer!
              </h1>
              <div className="self-stretch flex flex-col items-center justify-start text-6xl-4 font-paragraph-p2-regular">
                <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[100px]">
                  <div className="w-[316px] rounded-[16.94px] h-[583px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px]">
                    <h2 className=" m-0 self-stretch relative text-bold font-fixed w-[316px] h-[62px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[25.4px] text-center tracking-[0] leading-[normal]">
                      Office Management Software
                    </h2>
                    <img
                      className="w-[269px] relative h-[468px] object-cover"
                      alt=""
                      src="/oms@2x.png"
                    />
                  </div>
                  <div className="w-[316px] rounded-[16.94px] h-[583px] overflow-hidden shrink-0 flex flex-col items-center justify-start pt-2.5 px-0 pb-0 box-border gap-[20px] text-left text-[30px]">
                    <h2 className="m-0 relative text-inherit font-semibold font-inherit [text-shadow:-2px_2px_4px_#19a8bd]">
                      IIAM Health
                    </h2>
                    <img
                      className="w-[283px] relative h-[493px] object-cover"
                      alt=""
                      src="/iiam@2x.png"
                    />
                  </div>
                  <div className="w-[316px] rounded-[16.94px] h-[583px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[20px]">
                    <h2 className="m-0 self-stretch relative text-bold font-fixed w-[316px] h-[62px] top-0 left-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[25.4px] text-center tracking-[0] leading-[normal] ">
                      Electronic Medical Record Systems
                    </h2>
                    <img
                      className="w-[269px] relative h-[468px] object-cover"
                      alt=""
                      src="/emrs@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
