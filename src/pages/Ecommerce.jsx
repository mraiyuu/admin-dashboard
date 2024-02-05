import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-xl">$63,448.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex flex-wrap m-3 justify-center items-center gap-1">
          {earningData.map((item) => (
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="rounded-full text-2xl opacity-0.9 p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                {/* color percentage bug  */}
                <span className="font-semibold text-lg">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-3`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {/* second section div */}
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-200 rounded-2xl m-3 p-4 md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="border-r-1 border-color mt-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer bg-green-400 rounded-full ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p classname="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-5">
                <p>
                  <span className="text-3xl font-semibold">$48,487</span>
                </p>
                <p classname="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />

                {/* Alternative sparlinecomponent */}
                {/* <SparklineComponent
                  id="sparkline"
                  height="100px"
                  width="70%"
                  dataSource={[
                    { x: 1, yval: 2 },
                    { x: 2, yval: 6 },
                    { x: 3, yval: 8 },
                    { x: 4, yval: 5 },
                    { x: 5, yval: 10 },
                  ]}
                  xName="xval"
                  yName="yval"
                >
                  <Inject services={[SparklineTooltip]} />
                </SparklineComponent> */}
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
