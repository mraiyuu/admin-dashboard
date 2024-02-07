import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";

import { useStateContext } from "../contexts/ContextProvider";

const ThemeSetting = () => {
  return (
    <div className="bg-half-transparent w-screen fixed right-0 top-0 nav-item">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400 md:rounded-3xl">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg">Settings</p>
          <button
            type="button"
            onClick={() => {}}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <lable htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </lable>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {}}
              checked={true}
            />
            <lable htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
            </lable>
          </div>
        </div>
        <div className="border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative flex mt-2 gap-5 cursor-pointer items-center">
                  <button
                    type="button"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color}}
                    onClick={() => {}}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        true ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
