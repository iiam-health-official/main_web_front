import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const onProductClick = useCallback(() => {
    navigate("/product-page");
  }, [navigate]);

  const onNewsClick = useCallback(() => {
    navigate("/news-page");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  return (
    <nav
      className="fixed m-0 w-[100vw] overflow-hidden flex flex-row items-center justify-between py-[9px] px-[30px] box-border text-left text-[35px] text-white font-arial bg-blue z-50"
      id="nav"
    >
      <div className="flex-1 flex flex-row items-center justify-between">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[443px] flex flex-row items-center justify-left" onClick={onHomeClick}>
          <img
            className="relative w-[71px] h-[71px] object-cover"
            alt="Logo"
            src="/Logo_SQ_Trans.png"
          />
          <p className="m-0 relative text-[35px] font-bold font-arial md:text-[20px] text-white text-left">
            IIAM Health Solutions
          </p>
        </button>
        <div className="w-[650px] overflow-hidden shrink-0 flex flex-row items-center justify-between md:hidden">
          <ul className="m-0 flex-1 overflow-hidden flex flex-row items-center justify-between py-0 px-5">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 relative text-base font-semibold font-montserrat text-white text-center inline-block [list-style:none]"
              onClick={onProductClick}
            >
              Product
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 relative text-base font-semibold font-montserrat text-white text-center inline-block [list-style:none]"
              onClick={onNewsClick}
            >
              News
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 relative text-base font-semibold font-montserrat text-white text-center inline-block [list-style:none]"
              onClick={onAboutUsClick}
            >
              About Us
            </button>
          </ul>
          <button className="cursor-pointer [border:none] py-[9px] px-[29px] bg-cadetblue rounded-4xl flex flex-row items-center justify-center hover:bg-darkcyan">
            <p className="m-0 relative text-sm font-semibold font-montserrat text-white text-center flex items-center justify-center w-[119px] h-[23px] shrink-0">
              Book A Demo
            </p>
          </button>
        </div>
        <img
          className="relative w-[31px] h-[31px] overflow-hidden shrink-0 hidden md:flex"
          alt=""
          src="/hamburger-menu.svg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
