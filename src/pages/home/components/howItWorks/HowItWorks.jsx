import React from 'react';
import './HowItWorks.css';
import image1 from '../../../../assets/how-it-works-img1.png';
import image2 from '../../../../assets/how-it-works-img2.png';
import image3 from '../../../../assets/how-it-works-img3.png';
import image4 from '../../../../assets/how-it-works-img4.png';
import image5 from '../../../../assets/how-it-works-img5.png';
import image6 from '../../../../assets/how-it-works-img6.png';

function HowItWorks() {

  const HowItWorksData = [
    {
      icon: image1,
      text: "Select Your Role and Sign Up"
    },
    {
      icon: image2,
      text: "Buyers Post Your Requirements"
    },
    {
      icon: image3,
      text: " Review, Select, and Contact the Best Suppliers"
    },
    {
      icon: image4,
      text: " Suppliers Complete your profile and get notified for opportunities"
    },
    {
      icon: image5,
      text: "Contact to Buyers and Share your Quote for the service"
    },
    {
      icon: image6,
      text: "Both the Parties can Connect and Make Business Leave a Feedback"
    }
  ]

  return (
    <section className='how-it-works'>
      <div className="container">
        <div className='intro'>
          <p className='how-it-works-title'> How it works?</p>
          <p className='how-it-works-description'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>
        <div className='working-steps-columns'>
          {HowItWorksData?.map((item, index) => (<div key={index} className="col-4 steps-column">
            <div className='steps-column-icon'>
              <img src={item?.icon} alt="how-it-works-img1" />
            </div>
            <div className='steps-column-text'>
              {item?.text}
            </div>
          </div>))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
