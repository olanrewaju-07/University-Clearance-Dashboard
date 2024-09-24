import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef, useState } from "react";

export default function AuthSidebar() {

      const [isOpen, setIsOpen] = useState(false);
      const sidebarRef = useRef();

      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    return (
      <div className="relative">
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 mobile:h-[100vh] bg-customBlue transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform lg:relative lg:translate-x-0 z-40`}
        >
          <div className="w-full h-full">
            <button
              onClick={toggleSidebar}
              className={`absolute top-5 right-1 lg:hidden z-50 text-white ${
                !isOpen ? "hidden" : " "
              }`}
            >
              <FaTimes />
            </button>
            <div className="flex flex-col p-5">
              <div className="w-32 h-12">
                <img src="/assets/icons/Vector (9).svg" alt="logo icon" />
              </div>
              <nav className="border border-white border-1 rounded-md mt-10">
                <ul className="py-4 ml-3 px-4 flex flex-col gap-5 text-white">
                  <Link to="studenthome" className="px-2 py-2 hover:bg-blue-300 hover:text-white hover:border-l-4 border-white font-semibold">
                    Dashboard
                  </Link>
                  <Link to="/clearancemanagement" className="px-2 py-2 hover:bg-blue-300 hover:text-white hover:border-l-4 border-white font-semibold">
                    Clearance Management
                  </Link>
                  <Link to="/document" className="px-2 py-2 hover:bg-blue-300 hover:text-white hover:border-l-4 border-white font-semibold">
                    Document
                  </Link>
                </ul>
              </nav>

              <div className="relative mt-20">
                <img src="/assets/images/image 11.svg" alt="" />
                <div className="absolute inset-0 bg-customBlue bg-opacity-40"></div>
              </div>

              <div className="flex flex-row justify-between items-center mt-52 border-t-2 border-white py-10">
                <div className="flex flex-row items-center gap-2 cursor-pointer">
                  <img src="/assets/images/Avatars.svg" alt="student image" />
                  <div className="flex flex-col justify-center gap-1">
                    <h2 className="text-white text-sm font-semibold">
                      {" "}
                      Isaa Abdulbasit
                    </h2>
                    <span className="text-[10px] text-white opacity-75">
                      issaabdulbasit560@gmail.com
                    </span>
                  </div>
                </div>
                <FaSignOutAlt className="text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 left-4 text-[25px] text-white lg:hidden z-50 bg-customBlue p-1 ${
            isOpen ? "hidden" : ""
          }`}
        >
          <FaBars />
        </button>
      </div>
    );
}