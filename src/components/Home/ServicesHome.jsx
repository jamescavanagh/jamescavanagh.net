import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesHome = () => {
  return <>
    <section className="tpservices-area grey-bg pt-120 pb-135">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-section-title p-relative">
              <div className="separator">
              </div>
              <h3 className="tpds-title"> <span>Skills</span></h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tpservices-info">
              <p>I am a strong writer with a strong command of the English language.
               I illustrate digital sketch notes, that explain concepts in mind map form.
               I thrive in explaining concepts to both technical and non-technical stakeholders from my experience teaching.
               This makes me a compelling data storyteller. 
              </p>
            </div>
          </div>
        </div>
        <div className="row g-0 mt-70">
          {
            servicesData.slice(0, 4).map(item => {
              return (
                <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                  <div className="tpservices tp-mds-services tpservices-border mb-30">
                    <div className="tpservices__icon mb-30">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpservices__content">
                      <h4 className="tpservices__title mb-25">
                        <Link href={`/service-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <p>{item.description}</p>
                      <div className="tpservices__btn mt-30">
                        <Link href={`/service-details/${item.id}`}>

                          <i className="flaticon-right-arrow-1"></i>

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
    </section>
  </>;
};

export default ServicesHome;