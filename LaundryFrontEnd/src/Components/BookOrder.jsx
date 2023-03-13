import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form,FormGroup,Label,Col,Input,Modal,ModalHeader,ModalBody,ModalFooter, Container, Row,Button} from 'reactstrap'

export default function BookOrder() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const nav= useNavigate()

  const [shirts, setShirts]=useState(0);
  const [suits, setSuits]=useState(0);
  const [blazers, setBlazers]=useState(0);
  const [Tshirts, setTshirts]=useState(0);
  const [pantss, setPantss]=useState(0);
  const [trousers, setTrousers]=useState(0);
  const [jeanss, setJeanss]=useState(0);
  const [sarees, setSarees]=useState(0);
  const [kurtas, setKurtas]=useState(0);
  const [topAndTees, setTopAndTees]=useState(0);
  const [gowns, setGowns]=useState(0);
  const [miniDresss, setMiniDresss]=useState(0);
  const [shortss, setShortss]=useState(0);

  const calculatePrize= e =>{
   
    
    e.preventDefault()
    axios.get("http://localhost:9501/bookorder/category/"+sessionStorage.getItem("selectedAdmin"))
    .then((response)=>{
      console.log(response.data)
      const adminrate=response.data
      const totalAmount=((shirts*adminrate.shirt)+ (suits* adminrate.suit) + (blazers*adminrate.blazer)+ (Tshirts*adminrate.tShirt)+(pantss*adminrate.pants) +(trousers*adminrate.trousers)+ (jeanss*adminrate.jeans)+ (sarees*adminrate.saree)+ (kurtas*adminrate.kurta)+(topAndTees*adminrate.topAndTee) +(gowns*adminrate.gown)+ ( miniDresss*adminrate.miniDress)+ (shortss*adminrate.shorts))

      sessionStorage.setItem("amount",totalAmount)
      console.log(totalAmount)
      setModal(!modal)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const showPaymentOption=()=>{

  }

  const confirmBooking=()=>{
  const paymentMode="cash"
  const amount=sessionStorage.getItem("amount")
  const cust_id=sessionStorage.getItem("loginByCust") 
  const  provider_id=sessionStorage.getItem("selectedAdmin")

    axios.post("http://localhost:9501/bookorder/payment",  null, {params:{provider_id,cust_id,amount,paymentMode}})
    .then((response)=>{
      console.log(response)
      setModal(!modal)
      sessionStorage.setItem("selectedAdmin","")
      sessionStorage.setItem("amount",0)
      nav("/dashboard")

    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

  return (
    <Container>
      <Form onSubmit={calculatePrize}>
       <Row  className='text-primary text-center'><h2>Enter the quantity of items</h2> </Row>
       <Row>
        <Col>
        <Row>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="shirt">Shirt</Label>
                <Input
                  id="shirt"
                  name="Shirt"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setShirts(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleSuit">Suit</Label>
                <Input    
                  id="exampleSuit"
                  name="Suit"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setSuits(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleBlazer">Blazer</Label>
                <Input    
                  id="exampleBlazer"
                  name="Blazer"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setBlazers(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleT-Shirt">T-Shirt</Label>
                <Input    
                  id="exampleTshirt"
                  name="Tshirt"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setTshirts(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="examplePants">Pants</Label>
                <Input    
                  id="examplePants"
                  name="Pants"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setPantss(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleTrouser">Trouser</Label>
                <Input    
                  id="exampleTrouser"
                  name="Trouser"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setTrousers(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleJeans">Jeans</Label>
                <Input    
                  id="exampleJeans"
                  name="jeans"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setJeanss(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleSaree">Saree</Label>
                <Input    
                  id="exampleSaree"
                  name="Saree"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setSarees(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleKurta">Kurta</Label>
                <Input    
                  id="exampleKurta"
                  name="Kurta"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setKurtas(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleTopAndTee">TopAndTee</Label>
                <Input    
                  id="exampleTopAndTee"
                  name="TopAndTee"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setTopAndTees(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleGown">Gown</Label>
                <Input    
                  id="exampleGown"
                  name="Gown"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setGowns(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleMiniDress">MiniDress</Label>
                <Input    
                  id="exampleMiniDress"
                  name="MiniDress"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setMiniDresss(e.target.value)}
                />
            </FormGroup>
        </Col>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="exampleShorts">Shorts</Label>
                <Input    
                  id="exampleShorts"
                  name="Shorts"
                  placeholder="0"
                  type="number"
                  onChange={(e)=>setShortss(e.target.value)}
                />
            </FormGroup>
        </Col>
        </Row>
        </Col>
       </Row>            
        <Button type='submit'> Submit</Button>
        <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Confirm Your Order</ModalHeader>
        <ModalBody>
          <Label>Total Amount:</Label>
          <p>{sessionStorage.getItem("amount")}</p>
          <FormGroup>
              <Label for="exampleSelect">
                Select Payment Mode
              </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option>Cash on Delievery</option>
                <option onSelect={showPaymentOption}>Online</option>               
              </Input>
            </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={confirmBooking}>
            Confirm Booking
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
        </Modal>
      </Form>
    </Container>
  )
}
