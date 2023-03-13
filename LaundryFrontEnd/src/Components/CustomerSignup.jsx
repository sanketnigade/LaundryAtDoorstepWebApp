import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import React, { Component , useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userContext from '../Context/UserContext';
import UserProvider from '../Context/UserAuthContextProvider';
import { useNavigate } from 'react-router-dom';

export class CustomerSignup extends Component {
  
 constructor(props) {
   super(props)
 
   this.state = {
      customer_name:'',
      customer_emailid:'',
      customer_number:'',
      customer_password:'',
      customer_address:'',
   }
 }


 handleChange= e=>{
  this.setState({[e.target.name]: e.target.value})
 }

 submitHandler= e=>{

  e.preventDefault()
  console.log(this.state)

  let customerUser={
    customer_name:this.state.customer_name,
    customer_emailid:this.state.customer_emailid,
    customer_number: this.state.customer_number,
    customer_password:this.state.customer_password,
    customer_address:this.state.customer_address,
  }
    

  console.log(customerUser)
    axios.post("http://localhost:9501/customersignup",customerUser)
    .then((response)=>{
      console.log(response)
      if(response.status === 200){
            console.log('success');
            toast.success('Signup successfull!',{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
             sessionStorage.setItem("role","customer")   
             sessionStorage.setItem("loginByCust",response.data)          
             window.location.replace('/dashboard') 
             //setUser("customer")
      }
     
    })
    .catch((error)=>{
      console.log(error)
       toast.error('Something went wrong, please try again!',{
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });

    })

 }

  render() {
   const {customer_name, customer_emailid, customer_number,customer_address,customer_password}= this.state;

    return (
       <Container>
        <Row>
         <Col sm={{size:6,offset:3}}>
          <Card className='shadow'>
           <CardHeader>
            <h3 className='text-primary'>Enter your details here!</h3>
           </CardHeader>
           <CardBody>
            <Form onSubmit={this.submitHandler}>
             <FormGroup>
               <Label for="customer_name">Enter your name</Label>
               <Input required type='text' placeholder='Enter here' name="customer_name" id='customer_name' onChange={this.handleChange} value={customer_name}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="customer_emailid">Enter your Email</Label>
               <Input required type='email' placeholder='Enter email here' name="customer_emailid" id='customer_emailid' onChange={this.handleChange} value={customer_emailid}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="customer_number">Enter your Contact Number</Label>
               <Input required type='number' placeholder='Enter number here' name="customer_number" id='customer_number' onChange={this.handleChange} value={customer_number}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="customer_address">Enter your Address here</Label>
               <Input required type='text' placeholder='Enter here' name="customer_address" id='customer_address' onChange={this.handleChange} value={customer_address}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="customer_password">Enter Password</Label>
               <Input required type='password' placeholder='Enter password here' name="customer_password" id='customer_password' onChange={this.handleChange} value={customer_password}></Input>
             </FormGroup>
            
             <Container className='text-center'>
               <Button className='bg-primary' type='submit'>Register</Button>
               <ToastContainer
                  position="top-right"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                  />
               {/* <Button className='bg-warning ms-2' type='reset' onClick={this.resetForm}>Reset</Button> */}
             </Container>
            </Form>
           </CardBody>
          </Card>
         </Col>
        </Row>
       </Container> 
    )
  }
}

export default CustomerSignup
