import Fieldset from "../Components/FieldSet";
import Navbar from "../Components/Navbar";

const BookADemo = () => {
  return (
    <div className="inset-0 bg-cover bg-top text-center bg-[url('Background.svg')] bg-repeat ">
      <Navbar />
      <div className="w-full relative flex flex-col items-start justify-start pt-[110px] px-0 pb-[600px] box-border gap-[60px] tracking-[normal] text-center text-base text-white font-head mq675:gap-[30px_60px]">
        <div className="self-stretch relative leading-[24px] font-head">
          Find out why Healthcare Professionals of tomorrow care about IIAM, and
          how it can upscale your practices
        </div>
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start max-w-[480px] mq675:gap-[32px_16px] mq675:max-w-full">
            <form className="m-0 w-[480px] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 pb-[33.5px] pr-[151px] pl-0 box-border gap-[37.19999999999999px] max-w-full mq450:pr-5 mq450:box-border mq675:gap-[19px_37.19999999999999px] mq675:pr-[75px] mq675:box-border">
              <div className="mr-[-151.30000000000018px] w-[480.3px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border shrink-0 max-w-[146%]">
                <Fieldset firstName="First name" lastName="Last name" />
                <Fieldset
                  firstName="Email"
                  lastName="Phone number"
                  lastNameMarginTop="-0.3px"
                  spanMinWidth="41px"
                  propMinWidth="unset"
                />
                <div className="w-full flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-[18px] box-border gap-[6px] max-w-[480px] shrink-0 [debug_commit:612783b] z-[2] mt-[-0.3px] mq675:max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4.3px] min-w-[152px]">
                    <div className="self-stretch relative text-sm leading-[20px] font-head-p2-regular text-left">
                      <span className="text-white">
                        Organization / Practice Name
                      </span>
                      <span className="text-red">*</span>
                    </div>
                    <input
                      className="[outline:none] bg-whitesmoke-100 self-stretch h-10 relative rounded-10xs box-border min-w-[140px] min-h-[27px] border-[1px] border-solid border-lightgray"
                      type="text"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px] min-w-[152px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.3000000000000007px]">
                      <div className="relative text-sm leading-[20px] font-head-p2-regular text-left inline-block max-w-[159.83999633789062px]">
                        <span className="text-white">
                          Primary PMS
                        </span>
                        <span className="text-red">*</span>
                      </div>
                    </div>
                    <select className="self-stretch h-[41px] rounded-10xs bg-whitesmoke-100 box-border flex flex-row items-center justify-center p-[11px] font-helvetica-neue text-base text-silver border-[1px] border-solid border-lightgray">
                      <option value="hc">Health Cloud</option>
                      <option value="epic">Epic Systems</option>
                      <option value="sp">Simple Practice</option>
                    </select>
                  </div>
                </div>
                <div className="w-[480px] overflow-x-auto flex flex-row items-start justify-center pt-0 pb-[18px] pr-[0.6000000000003638px] pl-0 box-border max-w-[480px] shrink-0 [debug_commit:612783b] z-[3] mt-[-0.3px] mq675:max-w-full">
                  <div className="w-[159.8px] shrink-0 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.29999999999999716px]">
                      <div className="relative text-sm leading-[20px] font-paragraph-p2-regular text-left inline-block max-w-[159.83999633789062px]">
                        <span className="text-white">
                          Who are you?
                        </span>
                        <span className="text-red">*</span>
                      </div>
                    </div>
                    <select className="w-full h-[41px] rounded-10xs bg-whitesmoke-100 box-border flex flex-row items-center justify-center pt-[11px] px-[11px] pb-[11.000000000000014px] font-helvetica-neue text-base text-silver max-w-[152px] border-[1px] border-solid border-lightgray">
                      <option value="pc">Primary Care Practitioner</option>
                      <option value="ps">Physician</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </div>
                  <div className="w-[159.8px] shrink-0 flex flex-col items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start pt-0 pb-[0.29999999999999716px] pr-[29px] pl-0">
                      <div className="relative text-sm leading-[20px] font-head-p2-regular text-left inline-block max-w-[159.83999633789062px] whitespace-nowrap">
                        <span className="text-white">
                          Number of practices
                        </span>
                        <span className="text-red">*</span>
                      </div>
                    </div>
                    <select className="w-full h-[41px] rounded-10xs bg-whitesmoke-100 box-border flex flex-row items-center justify-center pt-[11px] px-[11px] pb-[11.000000000000014px] font-helvetica-neue text-base text-silver max-w-[152px] border-[1px] border-solid border-lightgray">
                      <option value="5">{`<5`}</option>
                      <option value="10">5-10</option>
                      <option value="11">10+</option>
                    </select>
                  </div>
                  <div className="w-[159.8px] shrink-0 flex flex-col items-start justify-start gap-[4px] z-[1]">
                    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.29999999999999716px]">
                      <div className="relative text-sm leading-[20px] font-head-p2-regular text-left inline-block min-w-[67px] max-w-[159.83999633789062px]">
                        <span className="text-white">
                          Your Role
                        </span>
                        <span className="text-red">*</span>
                      </div>
                    </div>
                    <select className="w-full h-[41px] rounded-10xs bg-whitesmoke-100 box-border flex flex-row items-center justify-center pt-[11px] px-[11px] pb-[11.000000000000014px] font-helvetica-neue text-base text-silver max-w-[152px] border-[1px] border-solid border-lightgray">
                      <option value="admin">Admin</option>
                      <option value="tp">Third Party</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-darkslategray-100 w-[177px] rounded-4xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-slategray">
                <div className="flex-1 relative text-sm font-semibold font-head text-white text-center">
                  Book Now
                </div>
              </button>
            </form>
          </div>
        </section>
        <div className="w-full hidden max-w-[760px] mq750:max-w-full" />
      </div>
    </div>
  );
};

export default BookADemo;
