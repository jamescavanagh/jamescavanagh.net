import Link from 'next/link';

const HeroAreaHome = () => {
  return <>
    <section className="tp-minimal__area position-relative">
      <div className="tp-minimal__design-thumb" style={{ backgroundImage: `url(assets/img/banner/hero-banner-yading.JPG)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-minimal__design pt-100 pb-100">
              <div className="tp-minimal__design-wrapper">
                <h2 className="tp-minimal__design-title">James <br /> <span>Cav</span></h2>
                <p className="tpds-text">Sharing my life, interests, and insights with<br /> the global village.</p>
                <div className="tp-minimal__button mt-35">
                  <Link href="/coming-soon" className="tp-solid-btn">
                    Read Blog
                  </Link>
                </div>
                <div className="tp-minimal__design-social mt-130">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-behance"></i></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </>;
};

export default HeroAreaHome;