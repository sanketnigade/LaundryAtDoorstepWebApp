import React from 'react'
import slideImage from './ConstantImages'

function Slider() {
  return (
    <div className="container-fluid">
      <div className="col-md-12 mt-2 ">
                <div className="carousel slide" data-bs-ride="carousel" id="carousel2">
                    <ol className="carousel-indicators cindicators">
                        <li data-bs-target="#carousel2" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#carousel2" data-bs-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="carousel-item active" data-bs-interval="4000">
                            <div className="row">

                                <div className="col-md-4  mt-5">
                                 <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i1} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-4  mt-5">
                                  <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i2} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                <div className="col-md-4  mt-5">

                                    <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i3} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        
                        </div>

                        <div className="carousel-item" data-bs-interval="4000">

                            <div className="row">
                               <div className="col-md-4  mt-5">
                                 <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i4} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                                <div className="col-md-4  mt-5">
                                  <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i5} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>   
                                </div>
                                <div className="col-md-4  mt-5">

                                    <div className="card card1 shadow bg-primary">
                                        <div className="card-content p-0">
                                            <div className="card-body p-0">
                                                <img src={slideImage.i6} alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Slider
