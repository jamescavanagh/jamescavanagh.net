import Link from 'next/link';

const AboutHome = () => {
  return <>
    <section className="tp-minimal__area position-relative">
      <div className="tp-minimal__design-thumb tp-minimal__design-thumb-2" style={{ backgroundImage: `url(assets/img/about/troublemaker-about.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-minimal__design tp-minimal__design-2">
              <div className="tp-minimal__design-wrapper tp-minimal__design-wrapper-2">
                <h3 className="tpds-title mb-50">I am driven by  <br /> curiosity <span> to seek the truth.</span></h3>
                <p className="tpds-text-2 mb-50">"Information is that which reduces uncertainty, everything else is noise." -Claude Shannon</p>
                <p>I excel in offering new perspectives that come from combining and integrating technologies to see problems in a new way.</p>

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