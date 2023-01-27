import Link from 'next/link';
import Image from 'next/image'
import aboutData from "../../data/aboutData.json"

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"> {aboutData.title} </h3>
                <span className="tpabout-xs-title mb-40">{aboutData.subtitle}</span>
                { 
                  aboutData.content.map(paragraph => {
                  return <div>  
                    <p className="tpab-text mb-30">{paragraph}</p>
                  </div>
                })}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <Image src={aboutData.images.aboutMain}
                width={780}
                height={1000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;