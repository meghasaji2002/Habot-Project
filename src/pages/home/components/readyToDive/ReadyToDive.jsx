import React from 'react';
import './ReadyToDive.css';
import rightArrow from '../../../../assets/right-arraow.png';

function ReadyToDive() {

  const locationsData = ["Abu Dhabi", "Sharjah & Ajman", "Ras Al Khaimah", "Dubai", "Fujaira", "Umm Al Quwain"];

  return (
    <section className='section-ready-to-dive'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className="col-6">
            <div className='first-column'>
              <p className='title-ready-to-dive'>Ready Dive into Habot?</p>
              <p className='para'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
              <button type='button' className='signup-btn'>Sign up Today ! <img src={rightArrow} alt="right-arrow" className='right-arrow' /></button>
            </div>
          </div>
          <div className="col-6  d-flex align-items-center justify-content-center">
            <div className='second-column row'>
              {locationsData?.map((data, i) => (<div key={i} className='col-6'>
                <div className='location-box'>
                  {data}
                </div>
              </div>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReadyToDive
