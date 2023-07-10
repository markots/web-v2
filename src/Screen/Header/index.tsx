import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { images } from "../../constants/images";

function Header() {
  return (
    <div className="w-full px-6 py-4 z-10 absolute flex justify-between pb-20">
      <div className="flex gap-2 items-center">
        <img className="w-12 h-12" src={images.logo} alt="logo" />
        <span className="lg:hidden lg:text-[42px] text-[20px] font-bold text-white">
          TowneSquare
        </span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="https://twitter.com/TowneSquarexyz">
          <BsTwitter
            size={30}
            style={{
              color: "#F2F0FF",
              paddingRight: "8px",
              marginRight: "8px",
            }}
          />
        </a>
        <a href="https://github.com/TowneSquare">
          <BsGithub
            size={30}
            style={{
              color: "#F2F0FF",
              paddingRight: "8px",
              marginRight: "8px",
            }}
          />
        </a>
        <button className="px-6 py-2 text-[18px] lg:block hidden text-black font-semibold bg-white rounded-full">
          Get early access
        </button>
      </div>
    </div>
  );
}

export default Header;
