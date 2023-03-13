import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import React, { Component , useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class AdminSignup extends Component {
  
 constructor(props) {
   super(props)
 
   this.state = {
      admin_name:'',
      admin_emailid:'',
      admin_number:'',
      admin_password:'',
      admin_address:'',
      admin_disc:'',
   }
 }


 handleChange= e=>{
  this.setState({[e.target.name]: e.target.value})
 }

 submitHandler= e=>{

  e.preventDefault()
  console.log(this.state)

  let adminUser={
    providerReg_name:this.state.admin_name,
    providerReg_emailID:this.state.admin_emailid,
    providerReg_number: this.state.admin_number,
    password:this.state.admin_password,
    description:this.state.admin_disc,
    providerReg_address:this.state.admin_address,
  }
   
  console.log(adminUser)
    axios.post("http://localhost:9501/ad/adminsignup",adminUser)
    .then((response)=>{
      console.log(response)
      console.log(adminUser)
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
              //axios.post("http://localhost:9501/ad/adminsignup",adminUser)
             sessionStorage.setItem("role","admin")  
             sessionStorage.setItem("loginByAdmin",response.data)               
             window.location.replace('/dashboard') 
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
   const {admin_name, admin_emailid, admin_number,admin_address,admin_disc,admin_password}= this.state;

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
               <Label for="admin_name">Enter name of Your laundry</Label>
               <Input type='text' reuired placeholder='Enter here' name="admin_name" id='admin_name' onChange={this.handleChange} value={admin_name}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="admin_emailid">Enter EmailId</Label>
               <Input type='email' reuired placeholder='Enter here' name="admin_emailid" id='admin_emailid' onChange={this.handleChange} value={admin_emailid}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="admin_number">Enter your Contact Number</Label>
               <Input type='number' reuired placeholder='Enter number here' name="admin_number" id='admin_number' onChange={this.handleChange} value={admin_number}></Input>
             </FormGroup>
             
             <FormGroup>
               <Label for="admin_address">Enter your Address here</Label>
               <Input type='text' reuired placeholder='Enter here' name="admin_address" id='admin_address' onChange={this.handleChange} value={admin_address}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="admin_disc">Enter description for your shop</Label>
               <Input bsSize="lg" reuired placeholder='Enter here' name="admin_disc" id='admin_disc' onChange={this.handleChange} value={admin_disc} type="textarea"/>
             </FormGroup>
             <FormGroup>
               <Label for="admin_password">Enter Password</Label>
               <Input type='password' reuired placeholder='Enter password here' name="admin_password" id='admin_password' onChange={this.handleChange} value={admin_password}></Input>
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

export default AdminSignup
