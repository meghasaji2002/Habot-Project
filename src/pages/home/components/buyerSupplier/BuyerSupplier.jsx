import React from 'react';
import './BuyerSupplier.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import check from '../../../../assets/checked (2) 1.png';

function BuyerSupplier() {

  const buyerSupplierData = [
    {
      title: "Buyer",
      points: [
        "Post your requirements.",
        "Sit back for multiple suppliers to contact you.",
        "Choose among the suppliers based on the ratings and reviews."
      ]
    },
    {
      title: "Supplier",
      points: [
        "Suppliers fulfill the needs of buyer.",
        "Promptly contact you to discuss Buyer's requirements.",
        "Provide necessary information quotes and any other details buyers might need."
      ]
    }
  ]

  const renderTabs = () => {
    return buyerSupplierData.map((tab, tabIndex) => {
      return <Tab key={tabIndex} eventKey={tab.title} title={tab.title}>
        <ul>
          {tab.points.map((point, pointIndex) => {
            return <li key={pointIndex}><img src={check} alt="checked-img" /><span className='listed-text'>{point}</span></li>
          })}
        </ul>
      </Tab>
    })
  }

  return (
    <section className='buyer-supplier'>
      <div className="container blue-background">
        <div className='row d-flex justify-content-center'>
          <div className="col-7 buyer-supplier-left">
            <iframe width="640" height="350" src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=xN0huqosTS4ttd9d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='buyer-supplier-section-video'></iframe>
          </div>
          <div className="col-5 buyer-supplier-content">
            <Tabs
              defaultActiveKey="Buyer"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {renderTabs()}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BuyerSupplier
