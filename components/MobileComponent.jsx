import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { BsBullseye, BsStars } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";
import { IoBookSharp } from "react-icons/io5";

const MobileComponent = () => {
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const [showResourcesMenu, setShowResoucesMenu] = useState(false);
  const router = useRouter();
  // const [showOverlay, setShowOverlay] = useState(true);
  return (
    <div className="h-screen  text-xl p-4">
      <button
        className="flex justify-between items-center w-full py-2  border-b-2 border-solid"
        onClick={() => setShowProductMenu(!showProductMenu)}
      >
        <div className="font-bold  py-2">Product</div>
        {showProductMenu ? <AiOutlineDown /> : <AiOutlineRight />}
      </button>
      {showProductMenu && (
        <div className="text-lg py-2">
          <div className="flex items-center gap-2 py-1">
            <IoBookSharp className="text-red-600" size="1.5rem" />
            <span>Wikis</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <BsBullseye className="text-blue-600" size="1.5rem" />
            <span>Projects</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <HiDocumentText className="text-yellow-300" size="1.5rem" />
            <span>Docs</span>
          </div>
          <div className="flex items-center gap-2 py-1">
            <BsStars className="text-purple-600" size="1.5rem" />
            <span>Notion Ai</span>
          </div>
          <div>Template gallery</div>
          <div>Customer Stories</div>
          <div>Connections</div>
        </div>
      )}
      <button
        className="flex justify-between items-center w-full  py-2  border-b-2 border-solid "
        onClick={() => setShowResoucesMenu(!showResourcesMenu)}
      >
        <div className="font-bold  py-2">Resources</div>
        {showResourcesMenu ? <AiOutlineDown /> : <AiOutlineRight />}
      </button>
      {showResourcesMenu && (
        <div className="text-lg">
          <h1>Blog</h1>
          <h1>Guides & Tutorials </h1>
          <h1>Webinars</h1>
          <h1>Help Center</h1>
          <h1>API docs</h1>
          <h1>Comimunity</h1>
        </div>
      )}
      <button
        className="flex justify-between items-center w-full  py-2  border-b-2 border-solid "
        onClick={() => setShowDownloadMenu(!showDownloadMenu)}
      >
        <div className="font-bold  py-2">Download</div>
        {showDownloadMenu ? <AiOutlineDown /> : <AiOutlineRight />}
      </button>
      {showDownloadMenu && (
        <div className="text-lg">
          <h1>iOS & Android</h1>
          <h1>Mac & Windows </h1>
          <h1>Web Clipper</h1>
        </div>
      )}
      <div className="font-bold py-4  border-b-2 border-solid">Pricing</div>
      <div className="font-bold py-4 border-b-2 border-solid">
        Request a demo{" "}
      </div>
      <div className="bg-black text-center text-white py-1 font-bold text-base mt-4">
        Get Notion Free
      </div>
      <div
        className=" text-center  py-1 font-semibold text-base mt-4 border-solid border-2 "
        onClick={() => router.push("/login")}
      >
        Login in
      </div>
    </div>
  );
};

export default MobileComponent;
