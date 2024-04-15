import React from 'react'
import appStore from "../../assets/imgs/App_Store.webp";
import playStore from "../../assets/imgs/Play_Store.webp";
import "./Hero.css";

export const Hero = () => {
  return (
    <section
      className="hero-section overflow-hidden position-relative z-0 mb-4 mb-lg-0"
      id="home"
    >
      <div className="hero-background">
        <div className="container">
          <div className="row gy-4 gy-md-8 pt-9 pt-lg-0">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="fs-1 fs-lg-1 text-white fw-bold mb-2 mb-lg-x1 lh-base mt-3 mt-lg-0">
                {" "}
                Manage your remote <span className="text-nowrap">team work</span>
              </h1>
              <p className="fs-8 text-white mb-3 mb-lg-4 lh-lg">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a
                  className="btn btn-primary fs-6 btn-lg lh-xl mb-4 mb-md-5 mb-lg-7"
                  href="#!"
                >
                  Explore more
                </a>
              </div>
              <p className="mb-x1 fs-10 button-text text-uppercase fw-bold lh-base text-300 text-light">
                Download our app
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2 position-relative z-2">
                <a
                  className="border-0 p-0 bg-transparent cursor-pointer rounded-1"
                  href="#!"
                >
                  {" "}
                  <img
                    className="img-fluid"
                    src={appStore}
                    alt="assets/img/logos/App_Store.webp"
                  />
                </a>
                <a
                  className="border-0 p-0 bg-transparent cursor-pointer rounded-1"
                  href="#!"
                >
                  {" "}
                  <img
                    className="img-fluid"
                    src={playStore}
                    alt="assets/img/logos/Play_Store.webp"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-6 position-lg-relative">
              <div className="position-lg-absolute z-1 text-center">
                <img
                  className="img-fluid chat-image"
                  src="assets/img/Hero/Frame.webp"
                  alt=""
                />
                <div className="position-absolute dots d-none d-md-block">
                  {" "}
                  <img
                    className="img-fluid w-50 w-lg-75"
                    src="assets/img/illustrations/Dots.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 start-0 end-0 z-1">
        <img
          className="wave mb-md-n2"
          src="assets/img/illustrations/Wave.svg"
          alt=""
        />
        <div className="bg-white py-2 py-md-5"></div>
      </div>
    </section>
  );
};
