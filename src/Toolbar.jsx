import { Home, TaskIcon, Infos, TableauIcon } from "./utility/Extra";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const tabs = [
  { id: "#", label: "Home", Icon: Home },
  { id: "dash", label: "ts", Icon: TaskIcon },
  { id: "board", label: "Tableau", Icon: TableauIcon },
  { id: "info", label: "infos", Icon: Infos },
];
const Toolbar = ({ children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="  h-screen w-fit mr-10">
      <div className="w-fit flex flex-col bg-transparent border border-gray-700  justify-center p-3 drop-shadow-2xl shadow-lg shadow-black  gap-14 h-screen fixed  ">
        {/* // style={{background:"radial-gradient (rgb(29, 38, 125)),transparent 80%) "}} */}
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-white/60"
              } relative rounded-full p-2  outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10  bg-white  mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Link to={`/${tab.id}`}>{tab.Icon}</Link>
            </button>
          );
        })}

        <button to="/myBoard" className={` p-2    `}>
          {Home}
        </button>
        <button className={`  p-2  `}>
          <div className=" ">{TableauIcon}</div>
        </button>
        <button className={` p-2   `}>
          <div className=" ">{TaskIcon}</div>
        </button>
        <button className={` p-2 `}>
          <div className="">{Infos}</div>
        </button>
      </div>
      <main className=" flex-1 p-4 min-h-0 overflow-auto">{children}</main>
    </div>
  );
};

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Toolbar;
