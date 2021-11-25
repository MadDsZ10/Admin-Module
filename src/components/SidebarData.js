import React from "react";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <MdIcons.MdHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Jobseeker",
    path: "/jobseeker",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "Employer",
    path: "/employer",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },

  {
    title: "About Us",
    path: "/about_us",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <AiIcons.AiFillSetting />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <BiIcons.BiLogOut />,
    cName: "nav-text",
  },
];
