
import React from 'react';

import certsData from "../../data/resume/certsData.json"

const CertsArea = () => {
    return (
      <>
          <div className="about-education__wrap">
            <div className="row align-items-center">
              <div className="col-xl-9 ml-40" >
              <div className='aboutme-feature-list mb-0'>
              <div className="row mt-50">
                    {
                    certsData.map(item => (
                        <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                        <div className="edu-exp-item mb-30">
                            <div className="edu-exp-image mb-10">
                            <img src={item.icon} alt="edu-exp-icon" />
                            </div>
                            <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                            <p>{item.summary}</p>
                        </div>
                    </div>
                    ))
                    }
                </div>
              </div>
          </div>
          <hr/>
          </div>
        </div>
    </>
  );
};

export default CertsArea;

