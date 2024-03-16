import { useCallback } from "react";



const Footer = () => {
    const onLinkContainerClick = useCallback(() => {
        window.open("https://www.facebook.com/");
      }, []);
    
      const onLinkContainer1Click = useCallback(() => {
        window.open("https://www.linkedin.com/company/");
      }, []);
    
      const onLinkContainer2Click = useCallback(() => {
        window.open("https://twitter.com/");
      }, []);
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-[30px] px-[30px] box-border max-w-full text-center text-sm text-white font-head">
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px_0px] max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-5 pl-5 box-border gap-[280px] max-w-full mq750:gap-[0px_19px] mq1150:gap-[0px_38px]">
            <div className="h-[188px] w-[157px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
              <div className="self-stretch flex-1 flex flex-row items-center justify-center  bg-cover bg-no-repeat bg-[top]">
                <img
                  className="h-[132px] flex-1 relative max-w-full overflow-hidden object-cover "
                  alt=""
                  src="/Logo_SQ_Trans.png@2x.png"
                />
              </div>
            </div>
            <div className="w-[154.4px] flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
              <div className="w-28 flex flex-col items-start justify-start gap-[32px_0px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-3">
                  <div className="flex-1 relative leading-[20px] ">
                    IIAM @ ADDRESS
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-[9.900000000000093px] text-darkslateblue">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-[11.200000000000044px]">
                      <div className="flex-1 relative leading-[20px] font-head">
                        Contact Us
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-white">
                      <div className="self-stretch relative leading-[20px]">
                        IIAM@PHONE
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px]">
                        <div className="flex-1 relative leading-[20px]">
                          IIAM@EMAIL
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-2 pl-[7.7px]">
                  <div className="flex flex-row items-start justify-start gap-[0px_12px]">
                    <div
                      className="h-6 w-6 relative max-w-[200px] cursor-pointer"
                      onClick={onLinkContainerClick}
                    >
                      <img
                        className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                        loading="lazy"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                    <div
                      className="h-6 w-6 relative max-w-[200px] cursor-pointer"
                      onClick={onLinkContainer1Click}
                    >
                      <img
                        className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                        loading="lazy"
                        alt=""
                        src="/svg-1.svg"
                      />
                    </div>
                    <div
                      className="h-6 w-6 relative max-w-[200px] cursor-pointer"
                      onClick={onLinkContainer2Click}
                    >
                      <img
                        className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
                        loading="lazy"
                        alt=""
                        src="/svg-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[656px] rounded-[36px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full text-white mq750:gap-[0px_41px] mq450:gap-[0px_20px]">
              <div className="flex-1 rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-start justify-between pt-8 pb-[33px] pr-[31px] pl-[29px] relative max-w-full gap-[20px] border-[1px] border-solid border-white mq750:flex-wrap">
                <div className="h-[245px] w-[655.7px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
                <img
                  className="h-full w-[655.7px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] rounded-xl max-h-full object-cover mix-blend-overlay z-[1]"
                  loading="lazy"
                  alt=""
                  src="/rectangle@2x.png"
                />
                <div className="w-[116px] flex flex-col items-center justify-start z-[2]">
                  <div className="w-[38px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-darkslateblue">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch relative text-center leading-[20px] font-head text-[18px] font-bold">
                          Pages
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[82px] rounded-lg flex flex-col items-center justify-start py-2 px-[15px] box-border">
                    <div className="self-stretch relative leading-[20px]">
                      Product
                    </div>
                  </div>
                  <div className="w-[68px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <div className="self-stretch relative leading-[20px]">
                      News
                    </div>
                  </div>
                  <div className="w-[90px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <div className="self-stretch relative leading-[20px]">
                      About Us
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-4">
                    <div className="self-stretch relative leading-[20px]">
                      Book a Demo
                    </div>
                  </div>
                </div>
                <div className="w-[190px] flex flex-col items-center justify-start z-[2]">
                  <div className="w-[54px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-darkslateblue">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch relative leading-[20px] font-head text-[18px] font-bold">
                          Partners
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[148px] rounded-lg flex flex-col items-center justify-start py-2 px-[15px] box-border">
                    <a
                      className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                      href=""
                      target="_blank"
                    >
                      Partners Overview
                    </a>
                  </div>
                  <div className="w-[132px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <div className="self-stretch relative leading-[20px]">
                      NSF Foundation
                    </div>
                  </div>
                  <div className="w-28 rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <div className="self-stretch relative leading-[20px]">
                      UCSF Health
                    </div>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-[15px]">
                    <div className="self-stretch relative leading-[20px]">
                      Kennedy Krieger Institute
                    </div>
                  </div>
                </div>
                <div className="w-[126px] flex flex-col items-center justify-start z-[2]">
                  <div className="w-10 flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-darkslateblue">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="self-stretch relative leading-[20px] font-head text-[18px] font-bold">
                          About
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[118px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <a
                      className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                      href=""
                      target="_blank"
                    >
                      Our Company
                    </a>
                  </div>
                  <div className="rounded-lg flex flex-col items-center justify-start py-2 px-[15px]">
                    <a
                      className="w-[49px] relative leading-[20px] text-[inherit] flex items-center justify-center [text-decoration:none]"
                      href=""
                      target="_blank"
                    >
                      Careers
                    </a>
                  </div>
                  <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-4">
                    <a
                      className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                      href=""
                      target="_blank"
                    >
                      Open Positions
                    </a>
                  </div>
                  <div className="w-[124px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                    <a
                      className="self-stretch relative leading-[20px] text-[inherit] [text-decoration:none]"
                      href=""
                      target="_blank"
                    >
                      Request Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-[20px] text-left mq750:flex-wrap">
            <div className="flex flex-col items-start justify-start max-w-full">
              <div className="relative leading-[20px]">
                Copyright © 2024  |  IIAM Health Solutions  |  All rights
                reserved.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0px_23px] text-white">
              <div className="flex flex-col items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                  href=""
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex flex-col items-start justify-start">
                <a
                  className="relative [text-decoration:underline] leading-[20px] text-[inherit]"
                  href=""
                  target="_blank"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Footer;