import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"><b>My</b> LIFE</h3>
                <span className="tpabout-xs-title mb-40">LORUMIPSUM TITILEUS</span>
                <p className="tpab-text mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venquis nostrud exercitation ullamcoLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="assets/img/about/Sichuan-Canyon-about.jpg" alt="about-img"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;