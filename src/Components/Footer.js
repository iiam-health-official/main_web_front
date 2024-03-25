import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const onLinkContainer1Click = useCallback(() => {
    window.open("https://www.linkedin.com/company/iiam-health/");
  }, []);

  const onLinkContainer2Click = useCallback(() => {
    window.open("https://twitter.com/IIAMhealth");
  }, []);
  const navigate = useNavigate();
  const onProductClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onNewsClick = useCallback(() => {
    navigate("/news-page");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  const onBookDemoClick = useCallback(() => {
    navigate("/demo-page");
  }, [navigate]);

  const onNSFFoundationClick = useCallback(() => {
    window.open("https://www.ucsfhealth.org/");

  }, []);
  const onUCSFHealthClick = useCallback(() => {
    window.open("https://www.nsf.gov/");

  }, []);
  const onKennedyKriegerClick = useCallback(() => {
    window.open("https://www.kennedykrieger.org/");

  }, []);
  const onOurCompanyClick = useCallback(() => {
    
  }, []);

  const onEmailClick = useCallback(() => {
    window.location.href = "mailto:contact@iiamhealth.com";
  }, []);
  return (
    <footer className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-center text-sm text-darkslategray-200 font-head mq450:flex-col mq450:items-center mq450:justify-center">
      <div className="flex-1 flex flex-col items-start justify-start gap-[30px] max-w-full mq450:flex-[unset] mq450:self-stretch">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 px-[60px]  box-border max-w-full mq450:flex-col mq450:gap-[5px_212.1px] mq450:items-center mq450:justify-center mq675:gap-[212.1px_18px]">
          <div className="h-[188px] w-[157px] flex flex-col items-start justify-start px-0 pb-0 box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-center bg-[url('/public/Logo_SQ_Trans.png@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="h-[132px] flex-1 relative max-w-full overflow-hidden object-cover hidden"
                alt=""
                src="/Logo_SQ_Trans.png@2x.png"
              />
            </div>
          </div>
          <div className="w-60 flex flex-col items-start justify-start pt-[30px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[37.8] pl-[38.2] gap-[52px]">
              <div className="self-stretch flex flex-col items-center justify-center gap-[44px]">
                <div className="flex flex-row items-start justify-center py-0 ">
                  <div className="w-[130px] relative leading-[20px] flex items-center justify-center">
                    San Fransisco, USA
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start gap-[4px] text-darkslateblue">
                  <div className="flex flex-row items-start justify-end py-0">
                    <div className="w-[76px] relative leading-[20px] font-semibold flex items-center justify-center min-w-[76px]">
                      Contact Us
                    </div>
                  </div>
                  <div className="cursor-pointer self-stretch relative leading-[20px] text-black whitespace-nowrap" onClick={onEmailClick}>
                    contact@iiamhealth.com
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[34px] pl-[34px]">
                <div className="flex-1 flex flex-row items-start justify-center gap-[12px]">
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
          <div className="flex rounded-[36px] flex-row  justify-start py-0 pr-0 pl-[35px] box-border relative gap-[82px] min-w-[335px] min-h-[244px]  text-black mq450:flex-col mq450:gap-[20px_82px] mq450:items-center mq450:justify-center mq450:flex-[unset] mq450:self-stretch mq675:flex-wrap mq675:gap-[82px_41px]">
            <img
              className="h-[275px] w-[664px] absolute !m-[0] top-[-11px] left-[3px] overflow-hidden shrink-0 mq450:hidden mq450:w-[400px] mq450:h-[550px] mq450:flex-col mq450:items-center mq450:justify-center"
              loading="lazy"
              alt=""
              src="/glass.svg"
            />
            <div className="w-[120px] flex flex-col items-center justify-start py-5 px-0 box-border z-[1]">
              <div className="w-[42px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-darkslateblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[20px] font-semibold inline-block min-w-[42px]">
                      Pages
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-[34px]">
                <div className="cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[52px]" onClick={onProductClick}>
                  Product
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-[41px]">
                <div className="cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[38px]"onClick={onNewsClick}>
                  News
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-[29px]">
                <div className="cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[62px]"onClick={onAboutUsClick}>
                  About Us
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-4">
                <div className=" cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[88px]"onClick={onBookDemoClick}>
                  Book a Demo
                </div>
              </div>
            </div>
            <div className="w-[200px] flex flex-col items-center justify-start py-5 px-0 box-border z-[1]">
              <div className="w-[59px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border text-darkslateblue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[20px] font-semibold inline-block min-w-[59px]">
                      Partners
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[178px] rounded-lg flex flex-col items-center justify-start py-2 px-9 box-border">
                <div className="cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[106px]" onClick={onNSFFoundationClick}>
                  NSF Foundation
                </div>
              </div>
              <div className="w-[117px] rounded-lg flex flex-col items-center justify-start py-2 px-4 box-border">
                <div className="cursor-pointer self-stretch relative leading-[20px] inline-block min-w-[85px]" onClick={onUCSFHealthClick}>
                  UCSF Health
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-4">
                <div className="cursor-pointer self-stretch relative leading-[20px]" onClick={onKennedyKriegerClick}>
                  Kennedy Krieger Institute
                </div>
              </div>
            </div>
            <div className="w-[123px] flex flex-col items-center justify-start py-5 px-0 box-border z-[1] text-darkslateblue">
              <div className="w-[42px] flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch relative leading-[20px] font-semibold inline-block min-w-[42px]">
                      About
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-center justify-start py-2 px-4 text-black">
                <p
                  className="cursor-pointer self-stretch relative leading-[20px] text-[inherit] inline-block [text-decoration:none] min-w-[91px]"
                  onClick={onOurCompanyClick}
                >
                  Our Company
                </p>
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
          <div className="flex flex-row items-center justify-center gap-[24px] text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[20px] inline-block min-w-[92px]">
                Privacy Policy
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[20px] inline-block min-w-[112px]">
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
