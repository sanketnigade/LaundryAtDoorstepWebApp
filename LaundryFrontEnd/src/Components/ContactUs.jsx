import React from 'react'
import {Form,FormGroup,Label,Col,Input, Container, Row,Button} from 'reactstrap'
import cbg from './Images/cbg.jpg'

function ContactUs() {
  return (
    <Container>
      <Row>
        <Col sm={{size:5}}>
          <img src={cbg}></img>
        </Col>
        <Col sm={{size:5}}>
           <h2>Write your Query Here</h2>
          <Form className=''>
            <FormGroup row>
              <Label for="exampleEmail"  sm={2}>Email</Label>
                <Input     
                  id="exampleEmail"
                  name="email"
                  placeholder="Emter Your Email"
                  type="email"
                />
            </FormGroup>
            <FormGroup row>
              <Label for="Contact"  sm={2}>Contact</Label>
                <Input     
                  id="Contact"
                  name="contact"
                  placeholder="Emter Your Number"
                  type="number"
                />
            </FormGroup>
            <FormGroup row>
              <Label for="msg"  sm={2}>Message</Label>
                <Input     
                  id="msg"
                  name="msg"
                  placeholder="Emter Your Message here"
                  type="textarea"
                />
            </FormGroup>
            <Button type='submit'> Submit</Button>
          </Form>
        </Col>
      </Row>
</Container>
  )
}

export default ContactUs
