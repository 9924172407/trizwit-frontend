import { useState } from "react";
import { VscTriangleDown } from "react-icons/vsc";
import CustomSearch from "./CustomSearch";
import { GrShare } from "react-icons/gr";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDD, setShowDD] = useState(false);
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full border-b-2 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <div className="flex justify-start  order-2 md:order-first">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="gap-3 text-blue-600 bg-transparent focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            hidden md:inline-flex"
            type="button"
            onClick={() => setShowDD(!showDD)}
          >
            Courses <VscTriangleDown />
          </button>
          <CustomSearch />
          <div
            id="dropdown"
            className={
              // !showDD
              //   ? "hidden"
              //   : "" +
              ` hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`
            }
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="flex items-center space-x-3 order-first md:order-1">
          <a href="" className=" rtl:space-x-reverse">
            {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </a>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:order-2 order-last inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setShow(!show)}
        >
          <span className="sr-only"></span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            !show
              ? `hidden w-full md:block md:w-auto order-last`
              : "w-full md:block md:w-auto"
          }
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="inline-flex gap-2 justify-center align-middle py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Donate
                <GrShare />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                SignUp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
