import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "../components/SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import Logo from "../image/Logo.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [activePage, setActivePage] = useState("Home");

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* navbar */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        {/* sidebar */}
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-close-bar">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className="Logo">
              <img src={Logo} alt="" />
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onClick={() => setActivePage(item.title)}
                  style={
                    activePage === item.title
                      ? {
                          backgroundColor: "blue",
                        }
                      : {}
                  }
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
