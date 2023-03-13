import React from 'react'

function NavIcons() {
  return (
    <div className="row bg-primary">
                       <div className="col-md-6 text-center  d-sm-block d-none">
                          <h6 className="text-light headertext mt-2">
                            <span className="ms-2"><i className="fa fa-envelope me-2"></i> myLaundry@gmail.com</span>
                          </h6>
                       </div>
                       <div className="col-md-6 text-end pe-5 align-items-center justify-content-center">
                          <h6 className=" headertext"><i className="fa fa-lock me-2"></i>Log In
                            <span className="ms-2">|</span><span className="ms-3">
                             <i className="fa fa-pencil me-1"></i>Register</span>
                                <div className="icons d-inline-block">
                                    <span className="py-3 px-1 ms-4 text-center span1 i1"> <i
                                            className="fa fa-facebook icon p-2 mt-1"></i> </span>
                                    <span className="py-3 px-1 ms-0  text-center span1 i2"> <i
                                            className="fa fa-instagram icon p-2 mt-1"></i></span>
                                    <span className="py-3 px-1 ms-0  text-center span1 i3"> <i
                                            className="fa fa-twitter icon p-2 mt-1"></i></span>
                                    <span className="py-3 px-1 ms-0  text-center span1 i4"> 
                                    <i className="fa fa-linkedin icon p-2 mt-1"></i></span>
                                </div>
                            </h6>
                        </div>
                    </div>
  )
}

export default NavIcons
