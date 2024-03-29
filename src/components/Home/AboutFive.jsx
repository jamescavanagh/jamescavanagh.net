import Link from 'next/link';

const AboutHome = () => {
  return <>
    <section className="tp-minimal__area position-relative">
      <div className="tp-minimal__design-thumb tp-minimal__design-thumb-2" style={{ backgroundImage: `url(assets/img/about/5/ab-img-5.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-minimal__design tp-minimal__design-2">
              <div className="tp-minimal__design-wrapper tp-minimal__design-wrapper-2">
                <h3 className="tpds-title mb-50">We are motivated by  <br /> the <span> desire to achieve. </span></h3>
                <p className="tpds-text-2 mb-50">There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered alteration.</p>
                <p>PLACEHOLDER </p>

                <div className="tp-minimal__button mt-55">
                  <Link href="/about-me" className="tp-solid-btn">
                    Download Cv
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default AboutHome;