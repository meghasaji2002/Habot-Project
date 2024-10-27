import React from 'react';
import './Banner.css';
import serviceIcon from '../../../../assets/suitcase 1.png';
import locationIcon from '../../../../assets/location-img.png';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className='banner'>
      <div className='container-fluid content-background'>
        <div className='content-wrapper'>
          <div className='title'>
            <p className='bold-title'> Are You a Supplier ?</p>
            <p className='second-title'>Explore Matching Opportunities.</p>
          </div>
          <div className='search-section'>
            <div className='service-location'><img src={serviceIcon} alt="service-icon" /><input type="text" className='input-field' placeholder='Search your required service here' /></div>
            <div className='service-location'><img src={locationIcon} alt="location-icon" /><input type="text" className='input-field' placeholder='Search your desired location here' /></div>
            <button type='button' className='search-btn' >Search</button>
          </div>
          <div className='link-section'>
            <p>Are you a buyer ?<Link>Click here if you are looking to post a requirements</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
