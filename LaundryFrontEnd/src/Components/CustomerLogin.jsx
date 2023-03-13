import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import {Container,Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Button,CardHeader} from 'reactstrap'
import axios from 'axios'
import { useUserAuth } from '../Context/UserAuthContextProvider'
import userContext from '../Context/UserContext';

export default function Login() {
  const { user,setUser } = useUserAuth();

  console.log(user)

  const [Email,setEmail]= useState()
  const [Pwd,setPwd]= useState()
  const nav= useNavigate()

  const handleLogin =e=>{
    e.preventDefault()
    console.log(Email)
    console.log(Pwd)

    axios.post("http://localhost:9501/customerlogin",null,{params:{Email,Pwd}})
    .then((response)=>{
      console.log(Email)
      console.log(response)
      if(response.status === 200){
            console.log('success');
            toast.success('Login successfull!',{
              position: "top-right",
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
            sessionStorage.setItem("role","customer") 
            sessionStorage.setItem("loginByCust",response.data)
            setUser("customer")
            nav("/dashboard")

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

  return (
    <Container>
        <Row>
         <Col md={{size:4,offset:4}}>
          <Card className='shadow'>
           <CardHeader className='text-center'>
            <h3 className='text-primary'>Enter your details here!</h3>
           </CardHeader>
           <CardBody>
            <Form onSubmit={handleLogin}>
             <FormGroup>
               <Label for="Email">Enter your Email</Label>
               <Input type='email' required placeholder='email' name="Email" id='Email' onChange={(e)=>setEmail(e.target.value)} value={Email}></Input>
             </FormGroup>
             <FormGroup>
               <Label for="Pwd">Enter Password</Label>
               <Input type='password' required placeholder='password' name="Pwd" id='Pwd' onChange={(e)=>setPwd(e.target.value)} value={Pwd}></Input>
             </FormGroup>
            
             <Container className='text-center'>
               <Button className='bg-primary' type='submit' >Login</Button>
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
