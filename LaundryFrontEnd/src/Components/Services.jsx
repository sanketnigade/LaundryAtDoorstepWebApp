import React from 'react'
import slideImage from './ConstantImages'

function Services() {
  return (
    <div className="container mb-5">
        <div className="row m-0 p-0 ">
            <div className="col-md-12 p-0 m-0 ">
                <h1 className="text-center  mainheading text-primary">Our Services</h1>
            </div>


            <div className="col-md-4 ">
                <div className="card card-hov shadow" >
                  <div className="card-h">
                  <img src={slideImage.s1} className="card-img circularImg" alt="Washing"/>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Laundry</h5>
                    <p className="card-text">Must for everybody laundry needs, freshly washed & safely folded.</p>
                    <a href="/order" className="btn bg-primary">Book Now</a>
                  </div>
                </div>
            </div>




            <div className="col-md-4">

               <div className="card card-hov shadow" >
                  <div className="card-h">
                  <img src={slideImage.s2} className="card-img" alt="Washing"/>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Dry-Cleaning</h5>
                    <p className="card-text">Must for anything you want dry-cleaned,pressed and returned on a hanger like a new garment.</p>
                    <a href="/order" className="btn bg-primary">Book Now</a>
                  </div>
                </div>
            </div>





            <div className="col-md-4">

                <div className="card card-hov shadow" >
                  <div className="card-h">
                  <img src={slideImage.s3} className="card-img" alt="Washing"/>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-primary">Ironing</h5>
                    <p className="card-text">Must for a crisp and rinkle free look in your daily needs!</p>
                    <a href="/order" className="btn bg-primary">Book Now</a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
