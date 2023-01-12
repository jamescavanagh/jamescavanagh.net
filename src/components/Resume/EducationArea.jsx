import React from 'react';

import awardData from '../../data/awardsData';

const certificationData = [
  {
    id: 1,
    icon: 'assets/img/experience/edu-icon-1.png',
    title: 'Deep Learning 101 and 201'
  },
  {
    id: 2,
    icon: 'assets/img/experience/edu-icon-2.png',
    title: 'AWS Cloud Practitioner (In-Progress)'
  },
  {
    id: 3,
    icon: 'assets/img/experience/edu-icon-3.png',
    title: 'NVIDIA Partner Training Program'
  },
]

const EducationArea = () => {
    return (
      <>
          <div className="about-education__wrap">
            <h2 className='mb-40 ml-40'><b>Education</b></h2>
            <div className="row align-items-center">
                <div className="col-xl-9 ml-40" >
            <h3 className="tab-pane-title mb-0"><b>Loyola Marymount University</b> (2012-2016)</h3>
            <p>Ranked Top 100 US University</p>
          <div className="about-education">
            <h5 className="tab-pane-title mb50"><b> Bachelor of Science: Economics</b></h5>
            <p className="tab-pane-title">Minor: Asia Pacific Studies</p>
          </div>
            <div className="row mt-50">
                {
                certificationData.map(item => (
                    <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                    <div className="edu-exp-item mb-30">
                        <div className="edu-exp-image mb-10">
                          <img src={item.icon} alt="edu-exp-icon" />
                        </div>
                        <h5 className="edu-exp-title mb-15"><a>{item.title}</a></h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, </p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default EducationArea;