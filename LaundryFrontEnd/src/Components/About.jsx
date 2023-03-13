import React from 'react'
import sideImage from './Images/sideimg1.jpg'
import { Slider } from '@mui/material'

function About() {
  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <h1 className='fw-bold text-primary'>About Us</h1>
          <p className="" >Mylaundry is a laundry, dryclean and washing related service company
					founded with an objective to	provide laundry &amp; service at your doorstep &amp; low cost model. </p>
          <h3>Hygienic</h3>
          <Slider readOnly defaultValue={85} color="warning"/>
          <h3>Happy Customers</h3>
          <Slider defaultValue={95} color="warning"/>
          <h3>Eco-friendly</h3>
          <Slider defaultValue={65} color="warning"/>
          <h3>Professional Service Providers</h3>
          <Slider defaultValue={80} color="warning"/>
          <h3>Fatest Delievery</h3>
          <Slider defaultValue={75} color="warning"/>
        </div>
        <div className='col-12 col-md-6'>
          <img src={sideImage}/>
        </div>
      </div>
    </div>
  )
}

export default About