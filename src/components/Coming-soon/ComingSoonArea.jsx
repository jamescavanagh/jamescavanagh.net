import React from 'react';
import Time from '../../utility/time';

const ComingSoonArea = () => {
  return (
    <>
      <div className="coming-soon-area" style={{ backgroundImage: 'assets/img/coming-soon/labspace.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="coming-soon-content text-center">
                <span className="cm-sub-title mb-40">Coming Soon</span>
                <h4 className="cm-title">New Design in the works, can't wait to have a platform to share my life</h4>
                <div className="coming__countdown mt-80 text-center">
                  <div className="coming__countdown-inner d-flex align-items-center">

                    <div className="cdown day"><span className="time-count">
                      {Time('2023-01-12 00:00:00').days}</span> <p>Days</p>
                    </div>
                    <div className="cdown hour">
                      <span className="time-count">{Time('2023-01-12 00:00:00').hours}</span> <p>Hrs</p>
                    </div>
                    <div className="cdown minutes">
                      <span className="time-count">{Time('2023-01-12 00:00:00').minutes}</span> <p>Min</p>
                    </div>
                    <div className="cdown second"> <div>
                      <span className="time-count">{Time('2023-01-12 00:00:00').seconds}</span> <p>Sec</p></div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonArea;