import React from 'react';

import experienceData from "../../data/resume/experienceData.json"

  

const ExperienceArea = () => {
    return (
      <>
          <div className="about-skill__wrap">
            <div className="row mt-70">
                <h2 className="tab-pane-title mb-00 ml-40"><b>Experience</b></h2>
              {
                experienceData.map(item => (
                  <div key={item.id} className="row-xl-6 cl-lg-6">
                      <div className="experience-sm-item mb-00">
                        <div className="experience-company-image mb-20">
                          <img src={item.img} alt="experience-img" height="128" width="128"/>
                        </div>
                        <h5 className="experience-title"><a>{item.title}</a></h5>
                        <span className="exp-duration mb-15">{item.date}</span>
                        {item.keyPoints.map((bulletPoint, index) => {
                            return <span key={index}>
                                <ul>
                                  <h6>
                                    <b>-{bulletPoint}</b>
                                  </h6>
                                </ul>
                              </span>
                        })}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </>
    );
};

export default ExperienceArea;