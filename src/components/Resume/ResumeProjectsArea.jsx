import React from 'react';

const resumeProjectsData = [
    {
      id: 1,
      title: 'Deep Learning 201 - Course',
      summary: 'An Open Source Course on AI meant for business professionals',
      keyPoints: [
        "Summary1",
        "Summary2"
      ]
    },
    {
      id: 2,
      title: 'Brain Wave Project',
      summary: 'Prototyping, Embedded Devices, Sensors, China',
      keyPoints:[
        "Used pandas, sklearn & scipy to transform and interpret raw electrode signals as images to train ResNet models",
        "Reduced loss by 29% and error rate by %15 over others through better signal-processing and transformation",
        "Received a Kaggle silver medal through data storytelling in the jupyter notebook format",
        "Rapidly researched and understood how to solve the problem that electrode data presents",
        ]
    },

  ]
  

const ExperienceArea = () => {
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