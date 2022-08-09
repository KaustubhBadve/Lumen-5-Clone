import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const EnterpriseNavbar = () => {
  const [create, setCreate] = useState(false);
  const [learn, setLearn] = useState(false);
  const handleDropdown = () => {
    setCreate(!create);
    setLearn(false);
  };
  const handleLearn = () => {
    setLearn(!learn);
    setCreate(false);
  };
  // useEffect(() => {
  //   window.addEventListener("scroll", resizeHeaderOnScroll);
  // }, []);

  // const resizeHeaderOnScroll = () => {
  //   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  //     shrinkOn = 100,
  //     headerEl = document.getElementsByClassName("navbar");

  //   if (distanceY > shrinkOn) {
  //     headerEl.classList.add("navbar-light");
  //     console.log("yes");
  //   } else {
  //     headerEl.classList.remove("navbar-light");
  //     console.log("no");
  //   }
  // };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light header-container px-md-5"
        style={{ backgroundColor: "#24282f",height:"80px",paddingTop:"-20px"}}
      >
        <div className="d-flex pl-md-4 ml-md-5">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              className="rounded float-left nav-bar__logo"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
              alt="Lumen5 Logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsedBarId"
          aria-controls="collapsedBarId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div
          className="collapse navbar-collapse mr-lg-5 justify-content-end"
          id="collapsedBarId"
          style={{ marginLeft: "38%" }}
        >
          <div className="d-flex">
            <div className="q-flex">
              <div className="p-flex">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown mr-md-2">
                    <Link
                      className="nav-link  text-decoration-none font-l5 font-l5--regular text-dark"
                      to="#"
                      id="create-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={handleDropdown}
                    >
                      <span
                        style={{
                          color: "white",
                          fontFamily: "Poppins, sans-serif",
                          letterSpacing: "0.01rem",
                        }}
                      >
                        Create
                      </span>

                      <i
                        className="fa fa-angle-down"
                        aria-hidden="true"
                        style={{ margin: "5px", color: "white" }}
                      ></i>
                    </Link>
                    {create && (
                      <div
                        className="dropdown-menu1"
                        aria-labelledby="create-dropdown"
                        style={{ columnCount: 2 }}
                      >
                        <Link className="dropdown-item1 font-l5" to="#">
                          Photo Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Facebook Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          YouTube Intro Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Instagram Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Instagram Story Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Promo Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Video Ad Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Marketing Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          LinkedIn Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Business Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Ecommerce Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Explainer Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Slideshow Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Education Video Maker
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Video Editor
                        </Link>
                        <Link className="dropdown-item1 font-l5" to="#">
                          Voiceover
                        </Link>
                      </div>
                    )}
                  </li>

                  <li className="nav-item mr-md-2" style={{ color: "white" }}>
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="/pricing/"
                    >
                      <span style={{ color: "white" }}>Pricing</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2">
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="/enterprise/"
                    >
                      <span style={{ color: "white" }}>Enterprise</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2">
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="#"
                    >
                      <span style={{ color: "white" }}>Case studies</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2 dropdown">
                    <Link
                      className="nav-link  text-decoration-none font-l5 font-l5--regular text-dark"
                      to="#"
                      id="learn-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={handleLearn}
                    >
                      <span style={{ color: "white" }}>Learn</span>

                      <i
                        className="fa fa-angle-down"
                        aria-hidden="true"
                        style={{ margin: "5px", color: "white" }}
                      ></i>
                    </Link>
                    {learn && (
                      <div
                        className="dropdown-menu1"
                        aria-labelledby="learn-dropdown"
                      >
                        <Link className="dropdown-item1" to="#">
                          Resources
                        </Link>
                        <Link className="dropdown-item1" to="#">
                          Blog
                        </Link>
                      </div>
                    )}
                  </li>
                  <li className="nav-item mr-md-2 mb-2">
                    <Link
                      to="/auth/login/"
                      type="button"
                      className="lumen5-button2"
                      style={{
                        backgroundColor: "#24282f",
                        color: "white",
                        border: "1px solid white",
                      }}
                    >
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/auth/signup/"
                      type="button"
                      className="lumen5-button"
                    >
                      <span>Sign&nbsp;up</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EnterpriseNavbar;
