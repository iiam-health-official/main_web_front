import { useMemo } from "react";

const Fieldset = ({
  firstName,
  lastName,
  lastNameMarginTop,
  spanMinWidth,
  propMinWidth,
}) => {
  const fieldsetStyle = useMemo(() => {
    return {
      marginTop: lastNameMarginTop,
    };
  }, [lastNameMarginTop]);

  const firstNameStyle = useMemo(() => {
    return {
      minWidth: spanMinWidth,
    };
  }, [spanMinWidth]);

  const lastNameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-full flex flex-row flex-wrap items-start justify-start pt-0 pb-[17.999999999999986px] pr-2 pl-0 box-border gap-[8px] max-w-[480px] shrink-0 [debug_commit:612783b] text-left text-sm text-white font-head mq675:max-w-full"
      style={fieldsetStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.300000000000011px] min-w-[151px]">
        <div
          className="relative leading-[20px] inline-block min-w-[72px] max-w-[240px]"
          style={firstNameStyle}
        >
          <span>{firstName}</span>
          <span className="text-red">*</span>
        </div>
        <input
          className="[outline:none] bg-whitesmoke-100 w-full h-10 relative rounded-10xs box-border min-w-[139px] max-w-[232px] min-h-[27px] border-[1px] border-solid border-lightgray"
          type="text"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[4.300000000000011px] min-w-[151px]">
        <div
          className="relative leading-[20px] inline-block min-w-[71px] max-w-[240px]"
          style={lastNameStyle}
        >
          <span>{lastName}</span>
          <span className="text-red">*</span>
        </div>
        <input
          className="[outline:none] bg-whitesmoke-100 w-full h-10 relative rounded-10xs box-border min-w-[139px] max-w-[232px] min-h-[27px] border-[1px] border-solid border-lightgray"
          type="text"
        />
      </div>
    </div>
  );
};

export default Fieldset;
