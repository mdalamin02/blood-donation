import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";
import Button from "./Button";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleHover = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div onMouseLeave={handleMouseLeave} className="w-full relative md:top-5">
      <div className="md:flex items-center justify-between py-4 md:py-0 relative z-20 md:mx-[3.875rem] whitespace-nowrap">
        <div className="ml-3 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <div className="bg-white px-3 py-2 rounded-full">
            <svg
              width="32"
              height="37"
              viewBox="0 0 32 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9906 1L26.6031 11.0375C28.7019 13.0213 30.1315 15.5492 30.7111 18.3016C31.2906 21.0539 30.9942 23.907 29.8591 26.4999C28.7241 29.0928 26.8015 31.3092 24.3346 32.8685C21.8676 34.4278 18.9671 35.2601 16 35.2601C13.0329 35.2601 10.1324 34.4278 7.66543 32.8685C5.19848 31.3092 3.2759 29.0928 2.14087 26.4999C1.00585 23.907 0.709372 21.0539 1.28895 18.3016C1.86852 15.5492 3.29811 13.0213 5.39688 11.0375L15.9906 1Z"
                fill="white"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static z-30 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white shadow-lg" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-[74px] nav-text md:my-0 my-7 cursor-pointer font-normal">
            <NavLink to="/" className="btn btn-left btn-center">
              Home
            </NavLink>
          </li>

          <li className="md:ml-[74px] nav-text md:my-0 my-7 cursor-pointer font-normal">
            <NavLink to="/about" className="btn btn-left btn-center">
              About Us
            </NavLink>
          </li>

          <li className="md:ml-[74px] nav-text md:my-0 my-7 cursor-pointer font-normal">
            <NavLink to="/find" className="btn btn-left btn-center">
              Find Blood
            </NavLink>
          </li>
          <li className="md:ml-[74px] nav-text md:my-0 my-7 cursor-pointer font-normal">
            <NavLink to="/donor" className="btn btn-left btn-center">
              Register Now
            </NavLink>
          </li>

          {isMenuOpen && <NavHover isMenuOpen={isMenuOpen} />}

          <>
            {!user ? (
              <Button>
                <NavLink
                  to="/login"
                  className=" py-2 px-4 rounded-md text-white font-normal ml-3 text-[24px]"
                >
                  Login
                </NavLink>
              </Button>
            ) : (
              <button
                className="bg-red-500 py-2 px-4 rounded-md text-white font-normal ml-3 text-[24px]"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            )}
          </>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
