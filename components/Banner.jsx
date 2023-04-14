import Image from "next/image";
import React from "react";
import banner from "../public/static/images/banner.PNG";
import banner2 from "../public/static/images/banner-2.PNG";

const Banner = () => {
  return (
    <>
      <div className=" h-[50vh]  relative  w-full  flex items-center justify-center  z-[-10] ">
        <Image
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/notion-clone/banner.PNG"
          alt=""
          fill
          className="object-contain z-[-10]"
        />
      </div>
      <div className=" h-[50vh]   relative  w-full  flex items-center justify-center z-[-10] ">
        <Image
          src="https://raw.githubusercontent.com/Anandpandey0/portfolio-images/main/notion-clone/banner-2.PNG"
          alt=""
          fill
          className="object-contain z-[-10] mt-[-160px] sm:mt-0"
        />
      </div>
      {/* <div className="h-[40vh] xl:h-[260px] w-full xl:w-[700px] flex items-center justify-center mx-auto">
        <Image src={banner2} alt="" fill className="object-contain" />
      </div> */}
    </>
  );
};

export default Banner;
