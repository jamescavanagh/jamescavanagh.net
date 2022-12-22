import Link from 'next/link';

const HeroArea = () => {
  return (
    <>
      <section className="tpfrn-area">
        <div className="container">
          <div className="tpfrn-wrapper s-hero-wrapper" style={{ backgroundImage: 'url(assets/img/banner/hero-banner-yading.JPG)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="row">
              <div className="col-xl-7 col-lg-8">
                <div className="tpfrn-content s-hero-content mt-95 mb-95">
                  <div className="tpfrn-content-inner" style={{backgroundColor:'transparent'}}>
                    <span className="tpfrn-sub-title mb-25">HI. I AM</span>
                    <h4 className="tpfrn-title mb-20">James Cavanagh</h4>
                    <p>IoT and Business Data Analyst with a Passion for Hardware</p>
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

export default HeroArea;