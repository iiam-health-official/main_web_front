const content = [
  {
    Name: "Bay Area Surgeon",
    Text: "Only 50% of new [patient] referrals have complete records. For complex cases, it can take up to an hour per patient to obtain the outside records.",
  },
  {
    Name: "Bay Area Practice Coordinator",
    Text: "Practice coordinators largely feel unsupported, especially as data needs to be obtained with greater efficiency to help schedule new patient appointments quicker",
  },
  {
    Name: "Arizona-Based Neurosurgeon",
    Text: "If patients came in with complete records, I’d probably be able to see an additional 5 new patients a day.” -Arizona-Based Neurosurgeon",
  },
  {
    Name: "Arizona-Based Neurosurgeon",
    Text: "If patients came in with complete records, I’d probably be able to see an additional 5 new patients a day.” -Arizona-Based Neurosurgeon",
  },
  {
    Name: "Arizona-Based Neurosurgeon",
    Text: "If patients came in with complete records, I’d probably be able to see an additional 5 new patients a day.” -Arizona-Based Neurosurgeon",
  },
];

// const Testimonial = () => {
// return (
//   <section className="w-[1060px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[28px] max-w-full text-center text-17xl text-white font-head">

//         <h1 className="m-0 self-stretch h-[41px] relative text-inherit font-bold font-head flex items-center justify-center [text-shadow:-2px_4px_0px_#19a8bd] mq450:text-3xl mq950:text-10xl">
//           Testimonials
//         </h1>

//           <div  className=" self-stretch rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-center justify-center pt-[75px] px-[75px] pb-[52px] relative max-w-full text-left text-[24px] text-gray-300 font-bahnschrift border-[1px] border-solid border-white mq450:pt-[49px] mq450:pb-[50px] mq450:box-border mq950:pl-[37px] mq950:pr-[37px] mq950:box-border">
//           <div className="h-[420px] w-[1000px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
//           <img
//             className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay z-[1]"
//             alt=""
//             src="/rectangle@2x.png"
//             />
//           <div className="w-[700px] flex flex-col items-start justify-start gap-[46px] max-w-full shrink-0 z-[2] mq700:gap-[23px]">
//             <div className="self-stretch h-[146.1px] relative leading-[40px] font-semibold inline-block shrink-0 mq450:text-[19px] mq450:leading-[32px]">
//               {"Only 50% of new [patient] referrals have complete records. For complex cases, it can take up to an hour per patient to obtain the outside records"}
//             </div>
//             <div className="flex flex-row items-center justify-center gap-[19px] max-w-full text-lg mq700:flex-wrap">
//               {/* <img
//                 className="h-[76px] w-[74.1px] relative object-contain"
//                 loading="eager"
//                 alt=""
//                 src="/user-feedback-image@2x.png"
//                 /> */}
//               <div className="flex flex-col items-start justify-start gap-[10px]">
//                 <div className="relative leading-[32px] opacity-[0.4]">
//                   {"Bay Area Surgeon"}
//                 </div>
//                 <div className="flex flex-row items-center justify-center gap-[10px]">
//                   <img
//                     className="h-[18.3px] w-[18.5px] relative rounded-12xs min-h-[18px]"
//                     loading="eager"
//                     alt=""
//                     src="/star.svg"
//                     />
//                   <img
//                     className="h-[18.3px] w-[18.5px] relative rounded-12xs min-h-[18px]"
//                     loading="eager"
//                     alt=""
//                     src="/star.svg"
//                     />
//                   <img
//                     className="h-[18.3px] w-[18.5px] relative rounded-12xs min-h-[18px]"
//                     loading="eager"
//                     alt=""
//                     src="/star.svg"
//                     />
//                   <img
//                     className="h-[18.3px] w-[18.5px] relative rounded-12xs min-h-[18px]"
//                     loading="eager"
//                     alt=""
//                     src="/star.svg"
//                     />
//                   <img
//                     className="h-[18.3px] w-[18.5px] relative rounded-12xs min-h-[18px]"
//                     loading="eager"
//                     alt=""
//                     src="/star.svg"
//                     />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>
// )
// }
// export default Testimonial;

const Testimonial = () => {
  return (
    <div className="h-[368px] w-[356px] flex flex-col items-start justify-start py-2.5 px-1 box-border min-w-[142px] max-w-full text-left text-smi text-black font-head lg:items-center lg:justify-center">
      <div className="w-[348px] h-[348px] overflow-hidden shrink-0 flex flex-col items-center justify-between pt-[49px] px-[42px] pb-[53px] box-border relative z-[2] lg:items-center lg:justify-center">
        <div className="w-[75.86%] h-[35.92%] absolute !m-[0] top-[27.01%] left-[12.07%] leading-[25px] font-semibold inline-block">
          "New patient referrals are profitable for the hospital system. My
          fiscal yearly bonus is partly determined by my ability to schedule
          referrals within 5 days and have patients be seen in clinic within 14
          days."
        </div>
        <div className="!m-[0] absolute h-[13.22%] w-[67.53%] top-[71.55%] right-[18.39%] bottom-[15.23%] left-[14.08%] flex flex-row items-center justify-center py-[13px] px-[32.5px] box-border text-xs text-gray-500">
          <div className="h-5 w-[170px] flex flex-col items-start justify-start py-0 px-0 box-border">
            <div className="relative leading-[25px] font-semibold whitespace-nowrap">
              UCSF ENT Practice Coordinator
            </div>
          </div>
        </div>
        <img
          className="w-[27.59%] h-[4.6%] absolute !m-[0] top-[14.08%] right-[60.34%] bottom-[81.32%] left-[12.07%] max-w-full overflow-hidden max-h-full"
          loading="lazy"
          alt=""
          src="/favourite31.svg"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 mt-[-324px]">
        <div className="h-[300px] flex-1 rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-start justify-start relative border-[1px] border-solid border-white">
          <div className="self-stretch w-[299.9px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden z-[0] border-[1px] border-solid border-white" />
          <img
            className="h-[300px] w-[299.9px] absolute !m-[0] top-[calc(50%_-_150px)] left-[calc(50%_-_150px)] rounded-xl object-cover mix-blend-overlay z-[1]"
            alt=""
            src="/rectangle@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
