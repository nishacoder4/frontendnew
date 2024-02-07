import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> An e-commerce website that allows people to buy and sell 
            physical goods, services, and digital products over
            the internet rather than at a brick-and-mortar 
            location. Through an e-commerce website, a business
            can process orders, accept payments, manage 
            shipping and logistics, and provide customer 
            service.</p>
            <p>
            It is one of the largest e-commerce stores
            there is. It's also a great example of a 
            site that uses its design to make it easy
            for customers to navigate to what they
            want.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
