import React from "react";
import video from "../components/Assets/image/avatar2.mp4";
function Bodies() {
  return (
    <div className=" body-container flex justify-between items center w-full">
      <div className="body-left w-1/2 bg-blue-500 h-full">
        <h3 className="font-bold text-blue-900">
          You have access to a vast number of highly competent service
          providers.
        </h3>
        <div className="body-desc">
          <div className="one">
            <i class="fa-solid fa-circle-check"></i>
            <h4>Best value for any budget.</h4>
            <p>Find top-notch service at all pricing range</p>
          </div>

          <div className="two">
            <i class="fa-solid fa-circle-check"></i>
            <h4>Quick completion of high quality jobs.</h4>
            <p>
              Find the right artisan immediately and have them begin work
              depending on your specifications.
            </p>
          </div>

          <div className="three">
            <i className="fa-solid fa-circle-check"></i>
            <h4>24/7 support</h4>
            <p>
              Questions? Our support team is accessible 24 hours a day, 7 days a
              week.
            </p>
          </div>
        </div>
      </div>

      <div className="body-right w-1/2 h-full">
        <div className="video w-2/4 object-contain">
          <video srcSet={video} controls></video>
        </div>
      </div>
    </div>
  );
}

export default Bodies;
