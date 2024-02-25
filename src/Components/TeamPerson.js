import { useState, useCallback } from "react";
import PersonPopUp from "./PersonPopUp";
import PortalPopup from "./PortalPopup";

const TeamPerson = ({ Image, Name, Position, Description }) => {
  const [isPersonPopUpPopupOpen, setPersonPopUpPopupOpen] = useState(false);

  const openPersonPopUpPopup = useCallback(() => {
    setPersonPopUpPopupOpen(true);
  }, []);

  const closePersonPopUpPopup = useCallback(() => {
    setPersonPopUpPopupOpen(false);
  }, []);

  return (
    <>
      <button
        className="rounded-xl cursor-pointer [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] py-[50px] px-5 bg-[transparent] flex flex-col items-center justify-center border-[1px] border-solid border-white gap-[10px] bg-[url('/public/teamperson@3x.png')] bg-cover bg-no-repeat bg-[top] hover:bg-[linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] hover:backdrop-filter:blur(40px) hover:shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.5)]"
        onClick={openPersonPopUpPopup}
      >
        <img
          className="w-[115px] relative rounded-121xl-5 h-[115px] object-cover"
          alt=""
          src={Image}
        />
        <div className="w-[158px] relative text-xl font-head text-black text-center inline-block h-[15px] shrink-0">
          Person 1
        </div>
        <div className="w-[158px] relative text-smi font-head text-black text-center flex items-center h-[29px] shrink-0">
          <span className="w-full">
            <p className="[margin-block-start:0] [margin-block-end:5px]">
              ML Specialist
            </p>
            <p className="m-0">Co-Founder</p>
          </span>
        </div>
      </button>
      {isPersonPopUpPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePersonPopUpPopup}
        >
          <PersonPopUp onClose={closePersonPopUpPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TeamPerson;
