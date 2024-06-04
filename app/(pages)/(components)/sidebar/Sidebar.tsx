"use client";
import React, { useState } from "react";
import { BsInstagram } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    category: false,
    posts: false,
    plugins: false,
  });

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (menu: any) => {
    setMenuState((prevState: any) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className={`sidebar ${isOpen ? "close" : ""}`}>
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">Dashboard</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-collection"></i>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </a>
            <i
              className={`bx bxs-chevron-down arrow ${
                menuState.category ? "rotate" : ""
              }`}
              onClick={() => toggleMenu("category")}
            ></i>
          </div>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-book-alt"></i>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </a>
            <i
              className={`bx bxs-chevron-down arrow ${
                menuState.posts ? "rotate" : ""
              }`}
              onClick={() => toggleMenu("posts")}
            ></i>
          </div>
          <ul className={`sub-menu ${menuState.posts ? "show" : ""}`}>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Analytics
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-line-chart"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-plug"></i>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </a>
            <i
              className={`bx bxs-chevron-down arrow ${
                menuState.plugins ? "rotate" : ""
              }`}
              onClick={() => toggleMenu("plugins")}
            ></i>
          </div>
          <ul className={`sub-menu ${menuState.plugins ? "show" : ""}`}>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-compass"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-history"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="link_name flex items-center gap-3">
              {" "}
              <span>
                <BsInstagram />
              </span>
              Dashboard
            </span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <span className="link_name flex items-center gap-3">
                {" "}
                <span>
                  <BsInstagram />
                </span>
                Dashboard
              </span>
            </li>
          </ul>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content">
              {/*<img src="image/profile.jpg" alt="profileImg">*/}
            </div>
            <div className="name-job">
              <div className="profile_name">Prem Shahi</div>
              <div className="job">Web Designer</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
