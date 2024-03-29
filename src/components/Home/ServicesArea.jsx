import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesAreaHome = () => {
  return <>
    <section className="tpfrn-services-area">
      <div className="container">
        <div className="tpfrn-services-wrapper pt-100 pb-85">
          <div className="row">
            {
              servicesData.slice(0, 4).map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tpservices tpservices-4 mb-30">
                      <div className="tpservices__icon mb-22">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tpservices__content">
                        <h4 className="tpservices__title mb-25">
                          <Link href={`/service-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h4>
                        <p>Personal Blog about travel, books, and some personal reflections</p>
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
      </div>
    </section>
  </>;
};

export default ServicesAreaHome;