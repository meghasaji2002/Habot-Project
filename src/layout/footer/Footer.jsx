import React from 'react';
import './Footer.css';
import footerlogo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';


function Footer() {

  const companyTermsData = [
    {
      title: "Company",
      links: [
        {
          text: "About",
          link: "https://www.habotconnect.com/"
        },
        {
          text: "FAQ",
          link: "https://www.habotconnect.com/"
        }
      ]
    },
    {
      title: "Terms",
      links: [
        {
          text: "Data Privacy",
          link: "https://www.habotconnect.com/"
        },
        {
          text: "Terms",
          link: "https://www.habotconnect.com/"
        },
        {
          text: "Accessibility",
          link: "https://www.habotconnect.com/"
        }
      ]
    },
    {
      title: "Related",
      links: [
        {
          text: "Find Buyer",
          link: "https://www.habotconnect.com/"
        },
        {
          text: "Feedback",
          link: "https://www.habotconnect.com/"
        }
      ]
    }
  ]

  const socialMediaIconsData = [
    {
      icon: linkedin,
      link: "https://www.habotconnect.com/"
    },
    {
      icon: twitter,
      link: "https://www.habotconnect.com/"
    },
    {
      icon: facebook,
      link: "https://www.habotconnect.com/"
    },
    {
      icon: instagram,
      link: "https://www.habotconnect.com/"
    }
  ]

  return (
    <section className="footer" >
      <div className="container footer-content-wrapper">
        <div className='row'>
          <div className='col-7 left-section row'>
            <div className='col-5 logo-copyright'>
              <img src={footerlogo} alt="footer-logo" className='footer-logo' />
              <div className='copyright-text'>
                © R Singhania
              </div>
            </div>
            <div className='col-7 company-terms-related row'>
              {companyTermsData?.map((data, index) => (<div key={index} className="col-4 company-terms-related-column">
                <div className='company-terms-related-title'>{data?.title}</div>
                <ul>
                  {data?.links.map((item, index) => (<li key={index}><Link to={item?.link}>{item?.text}</Link></li>))}
                </ul>
              </div>))}

            </div>
          </div>
          <div className='col-5 right-section'>
            {socialMediaIconsData?.map((icons, i) => (<div key={i} className='social-media-icon'>
              <Link to={icons?.link} className='social-media-icon-link'>
                <img src={icons?.icon} alt="social-media-icon" />
              </Link>
            </div>))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
