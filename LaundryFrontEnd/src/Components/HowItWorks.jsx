import React from 'react'
import slideImage from './ConstantImages'

function HowItWorks() {
  return (
    <div className='container mb-5'>
     <div className='row p-2'>
      <h1 className='text-primary'><u> How It Works</u></h1>
     </div>
     
      <div className='row'>

       <div className='col-12 col-sm-6 col-md-3'>
        <div className="card text-center shadow p-0 card-hov">
         <div className="card-body">
          <img src={slideImage.w1} className="workImg" alt="..."/>     
          <h5 className="card-title font-weight-bold">1.Book Order</h5>
         </div>
        </div>
       </div>

       <div className='col-12 col-sm-6 col-md-3'>
        <div className="card text-center shadow p-0 card-hov">
         <div className="card-body">
          <img src={slideImage.w2} className="card-hov-img" alt="..."/>     
          <h5 className="card-title font-weight-bold">2.Pick Up At Doorstep</h5>
         </div>
        </div>
       </div>

       <div className='col-12 col-sm-6 col-md-3'> 
        <div className="card text-center shadow p-0 card-hov">
         <div className="card-body">
          <img src={slideImage.w3} className="card-hov-img" alt="..."/>     
          <h5 className="card-title font-weight-bold">3.Process</h5>
         </div>
        </div>
       </div>

       <div className='col-12 col-sm-6 col-md-3'>
        <div className="card text-center shadow p-0 card-hov">
         <div className="card-body">
          <img src={slideImage.w4} className="card-hov-img" alt="..."/>     
          <h5 className="card-title font-weight-bold">4.Delivery At Doorstep</h5>
         </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HowItWorks
