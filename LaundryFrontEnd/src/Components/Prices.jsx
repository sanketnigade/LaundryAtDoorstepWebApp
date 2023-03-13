import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form,FormGroup,Label,Col,Input,Modal,ModalHeader,ModalBody,ModalFooter, Container, Row,Button} from 'reactstrap'

export default function Prices() {

 const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  // const [rate, setrate]=useState(); 
  const nav= useNavigate()
  let rate={}
  const [shirts, setShirts]=useState(rate.shirt);
  const [suits, setSuits]=useState(rate.shirt);
  const [blazers, setBlazers]=useState(rate.shirt);
  const [Tshirts, setTshirts]=useState(rate.shirt);
  const [pantss, setPantss]=useState(rate.shirt);
  const [trousers, setTrousers]=useState(rate.shirt);
  const [jeanss, setJeanss]=useState(rate.shirt);
  const [sarees, setSarees]=useState(rate.shirt);
  const [kurtas, setKurtas]=useState(rate.shirt);
  const [topAndTees, setTopAndTees]=useState(rate.shirt);
  const [gowns, setGowns]=useState(rate.shirt);
  const [miniDresss, setMiniDresss]=useState(rate.shirt);
  const [shortss, setShortss]=useState(rate.shirt);

  const calculatePrize= e =>{
   
   const category={
     shirt:shirts,suit:suits,blazer:blazers,Tshirt:Tshirts,pants:pantss,trouser:trousers,jeans:jeanss,saree:sarees,kurta:kurtas,topAndTee:topAndTees,gown:gowns,miniDress:miniDresss,shorts:shortss,category_id:sessionStorage.getItem("loginByAdmin"),pro_id:sessionStorage.getItem("loginByAdmin")
   }
   console.log(category)
    e.preventDefault()
    axios.put("http://localhost:9501/setPrice/"+ sessionStorage.getItem("selectedAdmin"))
    .then((response)=>{
      console.log(response.data)
      nav("/dashboard")
     })
    .catch((error)=>{
      console.log(error)
    })
  }
  
  useEffect=()=>{
   
    axios.get("http://localhost:9501/bookorder/category/"+sessionStorage.getItem("loginByAdmin"))
    .then((response)=>{
     console.log(response) 
     rate=response.data
     console.log(rate)
     console.log(rate.shirt)
   })
   .catch((error)=>{
      console.log(error)
   })
  }

  return (
     <Container>
      <Form onSubmit={calculatePrize}>
       <Row  className='text-primary text-center'><h2>Enter the rate of your service</h2> </Row>
       <Row>
        <Col>
        <Row>
        <Col sm={{size:2}} xs={{size:3}} className='ms-3'>
          <FormGroup row>
              <Label for="shirt">Shirt</Label>
                <Input
                  id="shirt"
                  name="Shirt"
                  placeholder={rate.shirt}
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
                  placeholder={rate.suit}
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
                  placeholder={rate.blazer}
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
                  placeholder={rate.Tshirt}
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
                  placeholder={rate.pants}
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
                  placeholder={rate.trouser}
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
                  placeholder={rate.jeans}
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
                  placeholder={rate.saree}
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
                  placeholder={rate.kurta}
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
                  placeholder={rate.topAndTee}
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
                  placeholder={rate.gown}
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
                  placeholder={rate.miniDress}
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
                  placeholder={rate.shorts}
                  type="number"
                  onChange={(e)=>setShortss(e.target.value)}
                />
            </FormGroup>
        </Col>
        </Row>
        </Col>
       </Row>            
        <Button type='submit'> Update</Button>
      </Form>
    </Container>
  )
}
