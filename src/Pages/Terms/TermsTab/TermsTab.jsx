import React, { useState } from "react";

export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }

      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 lg:gap-10 md:gap-7 sm:gap-5 gap-3 justify-around  md:p-10 p-2 ">
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-{i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-5">
        {children.map((item, i) => {
          return (
            <div className={` ${i === activeTab ? "visible" : "hidden"}`}>
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`px-3 py-2 flex justify-start items-center rounded-full w-full lg:text-xl md:text-lg sm:text-base text-sm  cursor-pointer
      ${activeTab === currentTab ? " bg-blue-600 text-white " : "bg-white"}`}
        onClick={() => setActiveTab(currentTab)}
      >
        { children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
