import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../Styles/Homepage.css";

const Caraousel = () => {
  return (
    <div className="carasouel-container">
      <div className="carasouel-head">
        <span className="">Customer success stories</span>
        <p className="">
          Discover how leading brands are getting results with Lumen5.
        </p>
      </div>
      <div className="carousel-div">
        <Carousel indicators={false}>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png"
              alt="First slide"
              style={{ borderRadius: "10px" }}
            />
            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-siemens.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “With the traditional agency, the time is usually about one
                    week. But with Lumen5, it’s cut down from weeks to hours.”
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Michelle Hsiao</strong>
                  </span>
                  <br />
                  <span>Visual Content Director at Siemens AG</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png"
              alt="Second slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “Lumen5 is especially helpful for business people who don't
                    have the technical experience to make their own videos.”
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Peter Lovegrove</strong>
                  </span>
                  <br />
                  <span>Media Relations and Content Manager</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png"
              alt="Third slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “Thanks to Lumen5, we have been able to cut down on the time
                    and costs related to video making.”
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Adrian Ngo</strong>
                  </span>
                  <br />
                  <span>Global Advertising and Sponsorships</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png"
              alt="Third slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “We knew Lumen5 was the right tool, so there was no point in
                    looking any further."
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Drew Sykes</strong>
                  </span>
                  <br />
                  <span>Social Media Director</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png"
              alt="Third slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-cms.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “Lumen5 is especially helpful for business people who don't
                    have the technical experience to make their own videos.”
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Amsal Alihodzic</strong>
                  </span>
                  <br />
                  <span>Senior Online Marketing Manager</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-mondadori-bg.png"
              alt="Third slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    "Lumen5 helps us with what we want to achieve on social:
                    engagement and reach."
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Alfonso Biondi</strong>
                  </span>
                  <br />
                  <span>Social Video Specialist</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-div">
            <img
              className="d-block w-100 h-100"
              src="https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png"
              alt="Third slide"
              style={{ borderRadius: "10px" }}
            />

            <Carousel.Caption>
              <div className="carasouel-d">
                <div className="carasouel-img">
                  <img
                    src="https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png"
                    alt="carsouel-image"
                  />
                </div>
                <div className="carasouel-para">
                  <p>
                    “We were very attracted to Lumen5 due to the fact it was
                    very turnkey and very simple. We could train a team of
                    people to assist in the production of video.”
                  </p>
                </div>
                <div className="carasouel-author">
                  <span>
                    <strong>Glen Wellbrock</strong>
                  </span>
                  <br />
                  <span>Senior Director of Marketing</span>
                </div>
                <div className="carasouel-hr">
                  <div></div>
                  <div>
                    <Link to="#" className="carasouel-link">
                      Read story →
                    </Link>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="carasouel-company">
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-siemens.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-cms.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png"
            alt="company-logo"
          />
        </div>
        <div>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png"
            alt="company-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Caraousel;
