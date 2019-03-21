import React from "react";

const DownloadApp = () => {
  return (
    <div className="download_app ">
      <div className="wrapper">
        <div className="phone">
          <img
            src="https://res.cloudinary.com/ahendouz/image/upload/v1551951720/hand.png"
            alt="phone"
          />
        </div>
        <div className="stores">
          <h1>track your deliveries with the jible app</h1>
          <div className="iphone_android">
            <div className="store">
              <img
                src="https://res.cloudinary.com/ahendouz/image/upload/c_scale,w_200/v1551974682/app-store-coupon-my-new.png"
                alt=""
              />
            </div>
            <div className="store">
              <img
                src="https://res.cloudinary.com/ahendouz/image/upload/c_scale,w_200/v1551974650/1280px-Get_it_on_Google_play.svg.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="background" />
      </div>
    </div>
  );
};

export default DownloadApp;
