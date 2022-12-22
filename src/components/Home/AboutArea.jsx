import React from 'react';

const AboutArea = () => {
  return (
    <>
      <section className="tpfrn-about-area pt-135 pb-110 p-relative">
        <div className="container">
          <div className="row align-content-center">
            <div className="col-xl-5">
              <div className="tpfrn-about">
                <h4 className="tpfrn-about-title mb-30">I turn data into information</h4>
                <p>I take noisy business and IoT Sensor Data then process and transform it into actionable information that solves real problems.
                </p>
                <p>More Here
                </p>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="tpfrn-about-image s-about-img">
                <div className="row">
                  <div className="col-sm-6-center">
                    <img src="assets/img/about/troublemaker-about.png" className="ab-iamge mb-30" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;