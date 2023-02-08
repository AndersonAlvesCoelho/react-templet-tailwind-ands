import React, { useState } from "react";
import SearchModal from "./header/SearchModal";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";

function Header({ sidebarOpen, setSidebarOpen }) {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>
          </div>

          <div className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            {/* <button
              className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${
                searchModalOpen && "bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSearchModalOpen(true);
              }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-slate-500"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  className="fill-current text-slate-400"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button> */}

            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Consultar CNPJ
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-current text-slate-500"
                    d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                  />
                  <path
                    className="fill-current text-slate-400"
                    d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                  />
                </svg>
              </div>
              <input
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchModalOpen(true);
                }}
                type="text"
                id="email-address-icon"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="00.000.000/0000-00"
              />
            </div>

            <SearchModal
              id="search-modal"
              searchId="search"
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            />
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            {/* <button
              className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ml-3 ${
                searchModalOpen && "bg-slate-200"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSearchModalOpen(true);
              }}
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-slate-500"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  className="fill-current text-slate-400"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
            <SearchModal
              id="search-modal"
              searchId="search"
              handleSearch={(item) => handleSearch(item)}
              modalOpen={searchModalOpen}
              setModalOpen={setSearchModalOpen}
            /> */}
            {/* <Notifications /> */}
            {/* <Help /> */}
            {/*  Divider */}
            {/* <hr className="w-px h-6 bg-slate-200 mx-3" /> */}
            {/* <UserMenu /> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
