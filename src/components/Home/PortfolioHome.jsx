import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import portfolioData from '../../data/portfolioData';



const portfolioItems = portfolioData.slice(0, 4);

const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioHome = () => {
  const [portfolios, setPortfolios] = useState(uniquePortfolioItems);
  const [active, setIsActive] = useState('all');
  // handleFilterItems
  const handleFilterItems = category => {
    setIsActive(category)
    if (category === 'all') {
      setPortfolios(uniquePortfolioItems)
    }
    else {
      const filterItems = portfolioItems.filter(item => item.category === category)
      setPortfolios(filterItems)
    }
  }
  return <>
    <section className="tpproject-area-minimal pt-115">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-section-title text-center">
              <h2 className="tpds-title">My Latest <span>Project</span></h2>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="col-xl-12">
            <div className="tpproject__menu text-center filter-button-group mb-40">
              <button className={active === 'all' ? 'active' : ''} onClick={() => handleFilterItems('all')}>All
                <span className="count-number">4</span></button>
              <button className={active === 'DATA STORIES' ? 'active' : ''} onClick={() => handleFilterItems('DATA STORIES')}> Data Stories <span className="count-number">2</span> </button>
              <button className={active === 'COURSES' ? 'active' : ''} onClick={() => handleFilterItems('COURSES')}>Courses <span className="count-number">2</span> </button>
              <button className={active === 'APPS' ? 'active' : ''} onClick={() => handleFilterItems('APPS')}>APPS <span className="count-number">2</span> </button>
              <button className={active === 'ARTICLES' ? 'active' : ''} onClick={() => handleFilterItems('ARTICLES')}>Articles <span className="count-number">2</span> </button>
              <button className={active === 'WORKSHOPS' ? 'active' : ''} onClick={() => handleFilterItems('WORKSHOPS')}> Workshops <span className="count-number">2</span> </button>
            </div>
          </div>
        </div>
        <div className="row grid mt-30">
          {
            portfolios.map(item => {
              return (
                <motion.div animate={{ scale: 1 }}
                  initial={{ scale: 0.9 }}
                  exit={{ scale: 1 }}
                  transition={{ duration: 0.8 }} layout
                  key={item.id}
                  className="col-xl-6 col-lg-6 c1 c2 c5">
                  <div className="tpproject tpproject-5 mb-30">
                    <div className="tpproject__thumb">
                      <Link href={`${item.url}`}>
                        <img src={item.img} alt="project" />

                      </Link>
                    </div>
                    <div className="tpproject__content text-center">
                      <span className="category mb-20">{item.category}</span>
                      <h5 className="tpproject__title">
                        <Link href={`${item.url}`}>
                          {item.title}
                        </Link>
                      </h5>
                      <div className="tpproject__btn mt-20">
                        <Link href={`${item.url}`}>

                          <i className="flaticon-right-arrow-1"></i>

                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })
          }


        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tpproject-button mt-20 text-center">
              <Link href='/portfolio-details' className="tp-solid-btn">
                View More Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default PortfolioHome;