import React from 'react';

import resumeProjectsData from "../../data/resume/projectsData.json"

const ResumeProjectsArea = () => {
    return (
      <>
          <div className="about-skill__wrap">
             <div className="row mt-20">
                <h2 className="tab-pane-title mb-00 ml-40"><b>Projects</b></h2>
                {
                  resumeProjectsData.map(item => (
                        <div key={item.id} className="row-xl-6 cl-lg-6">
                            <div className="experience-sm-item mb-00">
                              <h5 className="experience-title"><a>{item.title}</a></h5>
                              <span className="exp-duration mb-15">{item.summary}</span>
                              <div className="aboutme-feature-list">
                                  {item.keyPoints.map((bulletPoint, index) => {
                                      return <span key={index}>
                                          <ul>
                                            <p className="experience-duration">
                                              <b>-{bulletPoint}</b>
                                            </p>
                                          </ul>
                                        </span>
                                  })}
                              </div>
                          </div>
                        </div>
                  ))
                }
              </div>
          </div>
      </>
    );
};

export default ResumeProjectsArea;