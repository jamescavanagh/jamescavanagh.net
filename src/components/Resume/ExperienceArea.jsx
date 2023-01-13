import React from 'react';

const experienceData = [
    {
      id: 1,
      img: 'assets/img/icon/experience/unpackAI.png',
      title: 'UnpackAI - Technical Product Manager & Course Creator',
      date: '2021 December - September 2022',
      keyPoints:[
          "Trained and managed 6 instructors to teach Pandas, Pytorch, NLP, OpenCV, and FastAI",
          "Designed and Maintained open source courses to cohorts of diverse learners",
          "Helped students create PoC by applying AI to diverse fields like Chemistry, Manufacturing, ands Medical Imaging",
          "Thrived in communicating difficult concepts to non-technical stakeholders"
      ]
    },
    {
      id: 2,
      img: 'assets/img/icon/experience/troublemaker.jpg',
      title: 'Troublemaker - Active Member',
      date: '2020 December - 2022 June',
      keyPoints:[
        "Prototyped constrained agtech IoT devices with Arduino, Micropython and other C++ IoT Frameworks",
        "Received mentorship in a Hardware Incubator enviroment from Pietro Minicuzzi and Hans Michl",
        "Sourced electronic components in Chinese, with due dilligence and practical IP protection skills",
        "Built an automated greenhouse for experiments, with multiple sensors, and SQL Data-logging on a Raspberry-Pi"
        ]
    },
  ]
  

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