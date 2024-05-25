import React from "react";
import graduation from "../../Images/logo/graduation.png";
import "./home.css";

function Home() {
  return (
    <div className="container">
      <div className="row banner">
        <div className="col-6 p-0">
          <div className="text-content">
            <h1>
              We Help to <span className="highlight">Build</span> Your Dream
            </h1>
            <p>
              We are always availed to consult on taking your higher education
              to the next level so you can stay competitive in the...
            </p>
            <button className="apply-button">Apply Online <i class="fas fa-arrow-right text-white mx-3"></i> </button>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f f-color"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter t-color"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram i-color"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 p-0">
            <div className="graduation-banner">
                <div className="banner-bg">

                </div>
                <div className="image-content text-end">
            <img src={graduation} alt="Graduation" />
          </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
