import Link from 'next/link';

const HeroAreaTwo = () => {
  return (
    <>
      <div className="tp-photograper-hero-area tp-photograper-hero-height p-relative" style={{ backgroundImage: 'url(assets/img/banner/tibet-badlands-banner.JPG)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-photographer-wrapper text-center">
                <h2 className="tp-photographer-title">Portfolio</h2>
                <div className="tp-photographer-btn mt-40">
                  <Link href="/portfolio">
                    <a className="tp-solid-btn">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="tpbs-scroll tpbs-scroll-2">
            <a href="#PortfolioHome" className="tpbs-scroll-btn animate">
              <i className="fa-light fa-arrow-down-long"></i></a>
            <span><a href="#PortfolioHome">Scroll Down</a></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAreaTwo;