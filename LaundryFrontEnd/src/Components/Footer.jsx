import React from 'react'
import Logo from './Logo'
import { Button, TextField } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

function Footer() {
  return (
   <div className="myFooter bg-primary mt-5">
    <div className="container-fluid  "  id="contact">
   <div className="container-fluid">
    <div className="row p-3">
     <div className="col-12 col-sm-6 col-md-3 ml-5">
      <Logo/>
      <p className="text-light" >Mylaundry is a laundry, dryclean and washing related service company
					founded with an objective to	provide laundry &amp; service at your doorstep &amp; low cost model. </p>
     
     </div>

     <div className="col-12 col-sm-6 col-md-3 pr-5">
      <h6 className="text-light text-uppercase ">About Us</h6>  
       <p className="mt-2" ><a href="/service" className='text-light '>Our Services</a></p>
       <p className="mt-2" ><a href="/working" className='text-light '>How it works</a></p>
       <p className="mt-2" ><a href="/blog" className='text-light '>Blogs</a></p>  
     </div>

     <div className="col-12 col-sm-6 col-md-3">
      <h6 className="text-light text-uppercase">CONTACT US</h6>
      <p className="text-light mt-4" >We provide 24X7 service <br></br>Write any of your query here..!</p>
      <p className="mt-2" ><a href="https://mail.google.com/mail/&ogbl" className='text-light'>myLaundry@gmail.com</a></p>
     </div>

     <div className="col-12 col-sm-6 col-md-2 ">
      <h6 className="text-light text-uppercase">SUBSCRIBE TO OUR NEWS</h6>
      <div className="col-12 p-0 ">
            <div className="p-0 m-0">
             <TextField id="outlined-basic" label="Your Email" variant="outlined" />
             <Button className='text-secondary'>Submit</Button>
            </div>
            <ul className="list_icon float-left ">
              <li><a href='/' className='text-light'><InstagramIcon/></a></li>
              <li><a href='/' className='text-light'><FacebookIcon/></a></li>
              <li><a href='/' className='text-light'><TwitterIcon/></a></li>
              <li><a href='/https://mail.google.com/mail/&ogbl' className='text-light'><GoogleIcon/></a></li>
            </ul>
      </div>      
     </div> 

    </div>
   </div>
    <div className="row ">
       <div className=" col text-light text-center " ><p>© 2023 All Rights Reserved. Development by <a href='/home' className='text-secondary'>MyLaundry</a></p></div>
     </div>
   </div>
</div>
  )
}

export default Footer
