import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export default function AuthHeader (){

const [isOpen, setIsOpen] = useState(false);
const headerRef = useRef();

const toggleHeader = () => {
  setIsOpen(!isOpen)
}

  return (
    <div className="relative">
       <div
          ref={headerRef}
          className={`fixed top-0 left-0 mobile:h-[100vh] bg-customBlue transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:relative lg:translate-x-0 z-40`}
        >
      <div className="w-full h-full">
        <button
          onClick={toggleHeader}
          className={`absolute top-5 right-1 lg:hidden z-50 text-white ${
            !isOpen ? "hidden" : " "
          }`}
        >
          <FaTimes />
        </button>
        <div className="flex flex-row justify-between items-center p-10 mobile:flex-col mobile:p-0 mobile:mt-10 mobile:px-5 mobile:items-start mobile:gap-10">
          <div className="flex flex-col items-center gap-1">
            <img
              src="/assets/icons/Vector (9).svg"
              alt="logo"
              className="w-[100px] h-[30px]"
            />
            <h2 className="font-bold text-[17px] text-white">Uni Clearance</h2>
          </div>
          <div className="flex flex-row items-center gap-3 mobile:flex-col mobile:mt-10 mobile:items-start mobile:gap-10">
            <nav>
              <ul className="flex space-x-6 w-full mobile:flex-col mobile:items-start mobile:space-x-0 mobile:gap-5">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#a0f0ed] text-white text-lg"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#a0f0ed] text-white text-lg"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#a0f0ed] text-white text-lg"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row items-center gap-3 mobile:flex-col mobile:items-start mobile:gap-5">
              <Link
                to="/login"
                className="bg-white rounded-xl text-customBlue px-4 py-1  text-center text-lg"
              >
                Login
              </Link>
              <Link
                to="signup"
                className="bg-white rounded-xl text-customBlue px-4 py-1 text-center text-lg"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      <button
        onClick={toggleHeader}
        className={`absolute top-4 left-4 text-[25px] text-white lg:hidden z-50 bg-customBlue p-1 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <FaBars />
      </button>
    </div>
  );
}