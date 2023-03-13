import React from 'react'
import { Col, Container,Row } from 'reactstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bi5 from './Images/bi5.jpg'
import HowItWorks from './HowItWorks'
import { useAdminAuth } from '../Context/AdminAuthContextProvider';

export default function CustomerDashboard() {


  return (
    <div>
    <Container>
    <Row className='mb-5'>
      <Col sm={{size:8,offset:0}}>
        <Card sx={{ maxWidth: 885 }} className='shadow'>
      <CardMedia
        sx={{ height: 280 }}
        image={bi5}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='text-primary'>
          Order for best laundry service at your doorstep
        </Typography>
        <Typography variant="body2" color="text.secondary">
          We follow top notch industry practices with utmost parameters of quality standard, high quality detergents and softeners for extreme care of your clothes.<br/>
          We follow super clean laundromat process and maintain special environment friendly packaging to maintain the hygiene levels.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/order">Order Now</Button>
        <Button size="small" href='/services'>Learn More</Button>
      </CardActions>
    </Card>
      </Col>
      <Col sm={{size:4,offset:0}}>
        <Card sx={{ maxWidth: 345 }} className='shadow mt-2'>
            <CardMedia className='p-3'>
              <h3 className='text-primary'>Book your service Now!</h3>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                We process garments with hi- tech machines, eco-friendly chemicals and at most care to meet your expectation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href='/order'>Order Now</Button>
              <Button size="small" href='/services'>Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }} className='mt-4 shadow'>
            <CardMedia className='p-3'>
              <h3 className='text-primary'>Track your Order</h3>
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                We process garments with hi- tech machines, eco-friendly chemicals and at most care to meet your expectation.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href='/customerorders'>Your Orders</Button>
              <Button size="small" href='/services'>Order history</Button>
            </CardActions>
          </Card>
      </Col>
    </Row>
    <HowItWorks/>
    </Container>
    </div>
  )
}

