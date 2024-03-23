const Testimonial = ({Title, Content}) => {
  return (
    <div className="h-[368px] w-[356px] flex flex-col items-start justify-start py-2.5 px-1 box-border min-w-[142px] max-w-full text-left text-smi text-white font-head lg:items-center lg:justify-center">
      <div className="w-[348px] h-[348px] overflow-hidden shrink-0 flex flex-col items-center justify-between pt-[49px] px-[42px] pb-[53px] box-border relative z-[2] lg:items-center lg:justify-center">
        <div className="w-[75.86%] h-[35.92%] absolute !m-[0] top-[27.01%] left-[12.07%] leading-[25px] font-semibold inline-block text-lg"> 
          {Content}
        </div>
        <div className="!m-[0] absolute h-[13.22%] w-[67.53%] top-[71.55%] right-[18.39%] bottom-[15.23%] left-[14.08%] flex flex-row items-center justify-center  box-border text-xs text-gray-500">
          <div className="h-5 w-[170px] flex flex-col items-center justify-start py-0 px-0 box-border">
            <div className="relative leading-[25px] font-semibold whitespace-nowrap "> 
              {Title}
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
