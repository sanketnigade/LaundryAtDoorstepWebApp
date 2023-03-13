import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Rating } from '@mui/material';

function BlogSlider() {
  return (
    <div className="container-fluid">
     <div className="row sliderimg2 bkimg">
      <div className="col-12 ">
      <div id="carouselExampleFade" className="carousel slide carousel-fade  ">
       <div className="carousel-inner text-center">
         <div className="carousel-item active slideData ">
          <AccountCircleIcon className="text-light mt-3 fs-1 fw-bold"/>
           <h3 className="text-warning p-4">Sanket Nigade</h3>
           <h5 className="p-3 text-light">Quality service and very clean.<br/> I took my uniform for the drop off service and it was quick and easy to do.<br/>Happy with the service<br/> Will come here again for my laundry needs.</h5>
           <Rating readOnly name="size-large" defaultValue={4} size="large" className="mb-4" />
         </div>
         <div className="carousel-item slideData">
          <AccountCircleIcon className="text-light mt-3 fs-1 fw-bold"/>
           <h3 className="text-warning p-4">Prathamesh Shimpi</h3>
           <h5 className="p-3 text-light">We have used Washmart cleaners. would highly <br/>recommend. updated with
						innovation,
						cleanliness, great quality. service is soo <br/>good and I recommend to all go and try it.<br/> Best part
						is pick up
						and door delivery.</h5>
             <Rating readOnly name="size-large" defaultValue={4.5} size="large" className="mb-4" />
         </div>
         <div className="carousel-item slideData ">
          <AccountCircleIcon className="text-light mt-3 fs-1 fw-bold"/>
           <h3 className="text-warning p-4">Jyoti Pal</h3>
           <h5 className="p-3 text-light">I always give my clothes for laundry and <br/>Drycleaning. Service is the best here! If I<br/> ever have any questions,service is always here <br/>to help.They are so friendly that they treat you almost like family!</h5>
          <Rating readOnly name="size-large" defaultValue={3.5} size="large" className="mb-4" />
         </div>
       </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
       </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
     </div>
    </div>
    </div>
   </div>
  )
}

export default BlogSlider
