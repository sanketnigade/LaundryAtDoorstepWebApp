import React from 'react'
import { Col, Container,Row } from 'reactstrap'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bi5 from './Images/bi5.jpg'
import Limg3 from './Images/Limg3.jpg';
import HowItWorks from './HowItWorks'

export default function UserDashboard() {
  return (
     <Container>
      <Row className='text-center'><h3>Please Update your services as per your Needs!</h3></Row>
      <Row className='mb-5'>
        <Col sm={{size:8,offset:0}}>
        <Card sx={{ maxWidth: 885 }} className='shadow'>
        <CardMedia
          sx={{ height: 280 }}
          image={Limg3}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-primary'>
            Give a online door to your Buisness
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We provide you customers for your shop with just in few taping on your moblie.<br/>
            Just register to application ,fill your shop details.When customer will book an order,you will get notified.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="/setPrice">Update Prices</Button>
          <Button size="small" href='/services'>Learn More</Button>
        </CardActions>
      </Card>
        </Col>
        <Col sm={{size:4,offset:0}}>
          <Card sx={{ maxWidth: 345 }} className='shadow mt-2'>
              <CardMedia className='p-3'>
                <h3 className='text-primary'>Check Your Orders here!</h3>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Creating and maintaining a digital presence can help you  ensure your long-term success.
               </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href='/adminorders'>Your Orders</Button>
                <Button size="small" href='/services'>Learn More</Button>
              </CardActions>
            </Card>
        </Col>
      </Row>
    </Container>
  )
}
