import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav
      className="m-0 bg-gray w-full overflow-hidden flex flex-row items-center justify-between py-[9px] px-[20px] box-border text-left text-[35px] text-white font-arial"
      id="nav"
    >
      <div className="w-[443px] shrink-0 flex flex-row items-center justify-start">
        <img
          className="relative w-[71px] h-[71px] object-cover"
          alt="Logo"
          src="./Logo_SQ_Trans.png"
        />
        <a href="/" className="m-0 no-underline text-white relative font-bold flex items-center w-[430px] shrink-0">
          IIAM Health Solutions
        </a>
      </div>
      <div className="w-[666px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[41px] text-center text-base font-montserrat">
        <ul className="m-0 flex-1 overflow-hidden flex flex-row  list-none items-center justify-end">
          <li className="flex-1 relative font-semibold">Product</li>
          <li className="flex-1 relative font-semibold "> News</li>
          <li className="flex-1 relative font-semibold">About Us</li>
        </ul>
        <Button color="primary" name="Book A Demo" variant="contained">
          Book A Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

