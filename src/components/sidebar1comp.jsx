import React, { useState } from "react";
import * as Label from "@radix-ui/react-label";
import * as Switch from "@radix-ui/react-switch";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Detailcontext } from "../Context/Details";
function sidebar1comp() {
  // note if isChecked is false the mode 1 else mode 2

  const modeState = useContext(Detailcontext);
  // const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    modeState.setmode((prevState) => !prevState);
  };

  const location = useLocation();

  const profileClickHandler = () => {
    modeState.setShowProfile((prev) => !prev);
  };

  const clickHandlerOfSetting = () => {
    modeState.setShowSetting((prev) => !prev);
  };

  const userClickHandler = () => {
    modeState.setShowUser((prev) => !prev);
  };

  // console.log(isChecked);
  return (
    <div className=" w-20  flex-col justify-between h-screen bg-gray-800 ">
      <section className="h-3/4 border-black r">
        {/* profile section  */}
        <Link to="/profile">
          <div
            className={`w-[80%] h-1/6 border-3 border-black ml-2 flex items-center justify-center  ${
              location.pathname === "/profile" ? "shadow-white" : ""
            }`}
            onClick={profileClickHandler}
          >
            <img
              src="https://lh3.googleusercontent.com/ogw/AF2bZyjLjdsdIiXQou9qTLIzaLmR1MUYDFoTXCu4RvOgA4gMD6I=s64-c-mo"
              alt="user"
              className="rounded-full  "
            />
          </div>
        </Link>
        {/* ...................................................................................................................... */}
        {/* chat section  */}
        <Link to="/">
          <div
            className={`w-full h-1/6 rounded-full hover: bg-blend-lighten ${
              location.pathname === "/"
                ? "shadow-white bg-gray-700 bg-blend-lighten"
                : ""
            }`}
          >
            <svg
              viewBox="0 0 15 15"
              className="w-full p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
        {/* ............................................................................................................................................ */}
        {/* user section  */}

        <Link to="/user">
          <div
            className={`w-full h-1/6  hover: rounded-full ${
              location.pathname === "/user"
                ? "shadow-white bg-gray-700 bg-blend-lighten"
                : ""
            }`}
            onClick={userClickHandler}
          >
            <svg
              viewBox="0 0 15 15"
              className="w-full p-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
        {/* ................................................................................................................................ */}
        {/* setting section  */}

        <Link to="/setting">
          <div
            className={`w-full h-1/6  hover: rounded-sm ${
              location.pathname === "/setting"
                ? "shadow-white bg-gray-700 bg-blend-lighten"
                : ""
            }`}
            onClick={clickHandlerOfSetting}
          >
            <svg
              viewBox="0 0 15 15"
              className="w-full p-6 "
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z"
                fill="white"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </Link>
      </section>
      {/* ..................................................................................................................................... */}
      {/* mode switching section  */}
      <section className="flex justify-center items-center  h-1/4">
        {/* section2  */}
        <div className="  h-full">
          <h3 className=" mb-4 text-white text-sm">Mode 1</h3>
          <Switch.Root
            // className="SwitchRoot  w-[52px] h-[30px] bg-red-600 rounded-full relative shadow-md  rotate-90 data-[state=checked]:bg-black "
            className={`SwitchRoot w-[52px] h-[30px] bg-gray-300 rounded-full border-2 border-white mb-2 relative shadow-md rotate-90 ${
              modeState.mode ? "data-[state=checked]:bg-black" : ""
            }`}
            onClick={handleToggle}
            id="airplane-mode"
          >
            <Switch.Thumb
              // className="SwitchThumb block w-[21px] h-[21px] bg-white rounded-full shadow-md translate-x-[2px] duration-500 data-[state=checked]:translate-x-[28px] "
              className={`SwitchThumb block w-[21px] h-[21px] bg-white rounded-full shadow-md translate-x-[2px] duration-500 ${
                modeState.mode ? "data-[state=checked]:translate-x-[28px]" : ""
              }`}
              // data-state="unchecked"
            />
          </Switch.Root>
          <h3 className="text-white text-sm mt-2">Mode 2</h3>
        </div>
      </section>
    </div>
  );
}

export default sidebar1comp;
