import { useState } from "react";
import Fieldset from "../Components/FieldSet";
import Navbar from "../Components/Navbar";
import Testimonial from "../Components/Testimonial";




const BookADemo = () => {
  const [state, setState] = useState({});
  const [show, setShow] = useState(false);
  const [statusTxt, setStatusTxt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusTxt("Submitting...");
    const templateId = 'template_ktoeb9r';
    window.emailjs.send(
      "service_9bd2q8g",
      templateId,
      {
        message: Object.entries(state).map(([key, value]) => `${key}: ${value}`).join('\n'),
        name: state["First name"],
      }
    ).then(res => {
      setStatusTxt("Success! Your submission was successful. We'll be in contact soon.");
      setShow(true);
    })
// Handle errors here however you like, or use a React error boundary
.catch(err => {
  console.error('Oh well, you failed. Here some thoughts on the error that occured:', err)
  setShow(true);
  setStatusTxt("Sorry! Your submission was unsuccessful. Please try again later.");
})
   
  }

  return (
    <>
    <div className="inset-0 bg-cover bg-top text-center bg-[url('Background.svg')] bg-repeat ">
      <Navbar />
      <div className="w-full relative flex flex-col items-start justify-start pt-[110px] px-0 pb-[600px] box-border gap-[60px] tracking-[normal] text-center text-base text-white font-head mq675:gap-[30px_60px]">
        <div className="self-stretch relative leading-[24px] font-head">
          Find out why healthcare professionals of tomorrow care about IIAM, and
          how it can upscale your practices
        </div>
        <div className="w-full flex flex-row flex-wrap items-start justify-center py-0 px-2 box-border gap-[28px_26px] max-w-full lg:self-stretch lg:w-auto lg:items-center lg:justify-center">
              <Testimonial Title = "Arizona-Based Neurosurgeon" Content = "If patients came in with complete records, I’d probably be able to see an additional 5 new patients a day."/>
              <Testimonial Title = "Bay Area Insight Manager" Content = "You’ve identified a MASSIVE pain point. How can I write you a check?"/>
              <Testimonial Title = "Bay Area Surgeon" Content = "Only 50% of new patient referrals have complete records. For complex cases, it can take up to an hour per patient to obtain the outside records"/>
            </div>
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start max-w-[480px] mq675:gap-[32px_16px] mq675:max-w-full">
            <div className="m-0 w-[480px] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 pb-[33.5px] pr-[151px] pl-0 box-border gap-[37.19999999999999px] max-w-full mq450:pr-5 mq450:box-border mq675:gap-[19px_37.19999999999999px] mq675:pr-[75px] mq675:box-border">
              <div className="mr-[-151.30000000000018px] w-[480.3px] flex flex-col items-start justify-start py-0 pr-px pl-0 box-border shrink-0 max-w-[146%]">
                <Fieldset FirstField="First name" SecondField="Last name" state={state} setState={setState}/>
                <Fieldset FirstField="Email" SecondField="Phone number" state={state} setState={setState}/>
                <Fieldset FirstField="Company" SecondField="Title" state={state} setState={setState}/>
                <Fieldset FirstField="Your Role" SecondField="Number of Practices" state={state} setState={setState}/>
              </div>
              {show && <p >{statusTxt}</p>}

              <button 
              type="button"
              onClick={(e) => {e.preventDefault(); handleSubmit(e);}}
              className="cursor-pointer [border:none] py-[9px] px-[29px] bg-darkslategray-100 w-[177px] rounded-4xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-slategray">
                <div className="flex-1 relative text-sm font-semibold font-head text-white text-center">
                  Book Now
                </div>
              </button>
            </div>
          </div>
        </section>
        <div className="w-full hidden max-w-[760px] mq750:max-w-full" />
      </div>
    </div>
    </>
  );
};

export default BookADemo;
