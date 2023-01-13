import Link from 'next/link';
import { CircularProgressbar } from "react-circular-progressbar";

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

const experienceData = [
  {
    id: 1,
    img: 'assets/img/experience/experience-img-1.png',
    title: 'Technical Product Manager - UnpackAI',
    date: '2022  - 2008',
  },
  {
    id: 2,
    img: 'assets/img/experience/experience-img-2.png',
    title: 'Front-end Engineer - TheFlow',
    date: '2008 - 2010',
  },
  {
    id: 3,
    img: 'assets/img/experience/experience-img-3.png',
    title: 'Software Engineer - Stacker',
    date: '2010 - 2015',
  },
]

const EducationTabs = () => {
  return (
    <>
      <div className="aboutme-tabs-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav nav-tabs ab-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link ab-tab-item" id="education-tab" data-bs-toggle="tab" data-bs-target="#education" type="button" role="tab" aria-controls="education" aria-selected="false">Education</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content mt-30" id="myTabContent">
            <div className="tab-pane fade active show" id="about" role="tabpanel" aria-labelledby="about-tab">
            </div>
            <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
            </div>
            <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
              <div className="about-skill__wrap">
                <h4 className="tab-pane-title mb-20"><b>Diversity</b> of Experience</h4>
                <p></p>
              </div>
            </div>

            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
              <div className="about-education__wrap">
                <h4 className="tab-pane-title mb-0"><b>Loyola Marymount University</b> (2012-2016)</h4>
                <p>Ranked Top 100 US University</p>
                <h5 className="tab-pane-title mb50"><b> Bachelor of Science: Economics</b></h5>
                <p className="tab-pane-title">Minor: Asia Pacific Studies</p>
                
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
        </div>
      </div>
    </>
  );
};

export default EducationTabs;