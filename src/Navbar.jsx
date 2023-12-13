import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Home, TaskIcon, Infos, TableauIcon } from "./utility/Extra";
import { useState } from "react";
import { motion } from "framer-motion";
const tabs = [
  { id: "#", label: "Home", Icon: Home },
  { id: "dash", label: "ts", Icon: TaskIcon },
  { id: "board", label: "Tableau", Icon: TableauIcon },
  { id: "info", label: "infos", Icon: Infos },
];
const Navbar = ({ children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className=" absolute h-screen w-36 bg-slate-900 ">
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
      <main>{children}</main>
    </div>
  );
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Navbar;
