import React from "react";
import Illustration1 from "../../image/Illustration1.svg";

function Home() {
  return (
    <div>
      <div className="LandingPage">
        <img
          src={Illustration1}
          alt=""
          className="Illustration1
  "
        />
      </div>
      <div className="page-text-container">
        <div className="Text-warp">
          <h1>Welcome to Job Search System in Catarman, Northern Samar</h1>
          <p>
            Are you looking for a job or looking for the right applicant, don't
            worry we got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
