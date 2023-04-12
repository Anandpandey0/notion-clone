import React, { useState } from "react";
import logo from "../public/static/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import { BsBullseye, BsStars } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import MobileComponent from "./MobileComponent";

const Header = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showResourcesMenu, setShowResoucesMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const showProductDropDown = () => {
    setShowProductMenu(true);
  };
  const hideProductDropDown = () => {
    setShowProductMenu(false);
  };
  const showDownloadDropDown = () => {
    setShowDownloadMenu(true);
  };
  const hideDownloadDropDown = () => {
    setShowDownloadMenu(false);
  };
  const showResourcesDropDown = () => {
    setShowResoucesMenu(true);
  };
  const hideResourcesDropDown = () => {
    setShowResoucesMenu(false);
  };
  return (
    <>
      <nav className=" text-sm lg:text-lg flex items-center h-fit   justify-between font-semibold">
        <div className="flex items-center ">
          <div className="flex items-center w-32 h-20 z-100  ">
            <Image src={logo} alt="logo" />
          </div>
          <div className="hidden  xl:flex gap-4 w-1/3 z-100">
            <div className="relative group z-100">
              <Link href="/">
                <h1
                  className="font-semibold flex items-center"
                  onMouseEnter={showProductDropDown}
                  onMouseLeave={hideProductDropDown}
                >
                  Product{" "}
                  <span className="px-1">
                    {showProductMenu ? <GoChevronUp /> : <GoChevronDown />}
                  </span>
                </h1>
              </Link>
              <div
                className="absolute w-[500px] hidden group-hover:grid bg-white  z-100 top-6 border-2 border-gray-200 rounded p-1  h-64  grid-cols-2 grid-rows-4"
                onMouseLeave={hideProductDropDown}
                onMouseEnter={showProductDropDown}
              >
                <div>
                  <div className=" flex  h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <IoBookSharp className="text-red-600" size="1.5rem" />
                    <div>
                      <h1 className="font-semibold">Wikis</h1>
                      <h1 className="text-sm">Centeralize your knwoledge</h1>
                    </div>
                  </div>
                  <div className=" flex  h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <BsBullseye className="text-blue-600" size="1.5rem" />
                    <div>
                      <h1 className="font-semibold">Projects</h1>
                      <h1 className="text-sm">For every team or size</h1>
                    </div>
                  </div>
                  <div className=" flex  h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <HiDocumentText className="text-yellow-300" size="1.5rem" />
                    <div>
                      <h1 className="font-semibold">Docs</h1>
                      <h1 className="text-sm">Simple and powerful</h1>
                    </div>
                  </div>
                  <div className=" flex  h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <BsStars className="text-purple-600" size="1.5rem" />
                    <div>
                      <h1 className="font-semibold">Notion Ai</h1>
                      <h1 className="text-sm">Integrated AI assigntant</h1>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="   h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <h1 className="font-semibold">Template gallery</h1>
                    <h1 className="text-sm">Setups to get you started</h1>
                  </div>
                  <div className="   h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <h1 className="font-semibold">Customer stories</h1>
                    <h1 className="text-sm">See how teams uses Notion</h1>
                  </div>
                  <div className="   h-full items-center  w-full cursor-pointer gap-2 hover:bg-gray-100 rounded p-1">
                    <h1 className="font-semibold">Connection</h1>
                    <h1 className="text-sm">Connect your tools to Notion</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/">
                <h1
                  className="font-semibold flex items-center"
                  onMouseEnter={showDownloadDropDown}
                  onMouseLeave={hideDownloadDropDown}
                >
                  Download{" "}
                  <span className="px-1">
                    {showDownloadMenu ? <GoChevronUp /> : <GoChevronDown />}
                  </span>
                </h1>
              </Link>
              <div
                className="absolute w-[200px] hidden group-hover:grid   z-100 top-6 border-2 border-gray-200 p-1  h-32  grid-rows-3"
                onMouseLeave={hideDownloadDropDown}
                onMouseEnter={showDownloadDropDown}
              >
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  iOS & Android
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Mac & Windows
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Web Clipper
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link href="/">
                <h1
                  className="font-semibold flex items-center"
                  onMouseEnter={showResourcesDropDown}
                  onMouseLeave={hideResourcesDropDown}
                >
                  Resources{" "}
                  <span className="px-1">
                    {showResourcesMenu ? <GoChevronUp /> : <GoChevronDown />}
                  </span>
                </h1>
              </Link>
              <div
                className="absolute w-[200px] hidden group-hover:grid items-center  z-100 bg-white top-6 border-2 border-gray-200 p-1  h-48  grid-rows-6"
                onMouseLeave={hideResourcesDropDown}
                onMouseEnter={showResourcesDropDown}
              >
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Blog
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Guides & Tutorials
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Webinars
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Help Center
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  API docs
                </div>
                <div className="h-full  hover:bg-gray-100 p-2 px-2 cursor-pointer font-semibold">
                  Comimunity
                </div>
              </div>
            </div>
            <div className="font-semibold cursor-pointer">Pricing</div>
          </div>
        </div>
        <div className=" hidden xl:flex items-center  w-1/3 h-full justify-end gap-4 px-4">
          <div className="hover:bg-gray-100 h-full p-2 cursor-pointer">
            Request a demo
          </div>
          <Link href="/login" className="hover:bg-gray-100 p-2 cursor-pointer">
            Login
          </Link>
          <div className="p-2 cursor-pointer bg-black text-white">
            Get Notion free
          </div>
        </div>
        <button
          className="xl:hidden pr-4"
          onClick={() => setShowOverlay(!showOverlay)}
        >
          {!showOverlay ? (
            <AiOutlineMenu size="1.5rem" />
          ) : (
            <GrClose size="1.5rem" />
          )}
        </button>
      </nav>
      {showOverlay && <MobileComponent />}
    </>
  );
};

export default Header;
