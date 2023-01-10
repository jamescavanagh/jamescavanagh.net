import React from 'react';

const ResumeArea = () => {
  return (
    <>
      <div className="aboutme-area pt-140 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img src="assets/img/about/headshot.png" alt="about-me img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50"><b>James</b> Cavanagh</h3>
                  <span className="aboutme-sub-title">Data Analyst / ML Engineer</span>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li>
                      <p>Seeking:<a href="#">
                      To apply myself to solving difficult problems through unconventional applications of AI,
                      in the broad fields of business, manufacturing, sensors and web analytics.  
                      </a></p></li>
                    <li><p>Experience Coding:<a href="#"> 3 Years</a></p></li>
                    <li><p>E-mail:<a href="mailto:james@jamescavanagh.com"> james@jamescavanagh.net</a></p></li>
                    <li><p>Whatsapp Phone:<a href="tel:+65 9933 4481">SG +65 9133 4481</a></p></li>
                  </ul>
                </div>
                <div className="aboutme-social mt-40">
                  <a hrExpertiseef="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeArea;