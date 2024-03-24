

const Fieldset = ({ FirstField, SecondField, state, setState }) => {


  return (
    <>
      <div className="w-full flex flex-row flex-wrap items-start justify-start pt-0 pb-5 pr-2 pl-0 box-border gap-2 max-w-[480px] shrink-0 text-left text-sm text-white font-head mq675:max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[151px]">
          <div className="relative leading-5 inline-block min-w-[72px] max-w-[240px]">
            <span>{FirstField}</span>
            <span className="text-red-500">*</span>
          </div>
          <input
            className="[outline:none] bg-whitesmoke-100 w-full h-10 rounded box-border min-w-[139px] max-w-[232px] border border-gray-300"
            type="text"
            onChange={(e) => setState({ ...state, [FirstField]: e.target.value })}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-1 min-w-[151px]">
          <div className="relative leading-5 inline-block min-w-[71px] max-w-[240px]">
            <span>{SecondField}</span>
            <span className="text-red-500">*</span>
          </div>
          <input
            className="[outline:none] bg-whitesmoke-100 w-full h-10 rounded box-border min-w-[139px] max-w-[232px] border border-gray-300"
            type="text"
            onChange={(e) => setState({ ...state, [SecondField]: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

export default Fieldset;
