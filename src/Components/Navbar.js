import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav
      className="m-0 bg-gray w-[1280px] h-[89px] overflow-hidden text-left text-[35px] text-white font-arial-black"
      id="nav"
    >
      <div className="absolute top-[9px] left-[23px] w-[519px] h-[71px]">
        <img
          className="absolute top-[0px] left-[0px] w-[71px] h-[71px] object-cover"
          alt="Logo"
          src="./Logo_SQ_Trans.png"
        />
        <p className="m-0 absolute top-[11px] left-[71px]">
          IIAM Health Solutions
        </p>
      </div>
      <div className="absolute top-[23px] left-[587px] w-[666px] overflow-hidden flex flex-row items-center justify-start gap-[41px] text-center text-base font-montserrat">
        <ul className="m-0 flex-1 overflow-hidden flex flex-row items-center justify-end">
          <li className="flex-1 relative font-semibold">Product</li>
          <li className="flex-1 relative font-semibold whitespace-pre-wrap">
            {" "}
            News
          </li>
          <li className="flex-1 relative font-semibold">About Us</li>
        </ul>
        <Button
          className="flex-1 relative"
          color="primary"
          name="Book A Demo"
          variant="contained"
        >
          Book A Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
