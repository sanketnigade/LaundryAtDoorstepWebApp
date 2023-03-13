import React, { useState } from 'react'
import { useUserAuth } from '../Context/UserAuthContextProvider'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import {Container,Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Button,CardHeader} from 'reactstrap'
import axios from 'axios'

export default function AdminLogin() {

  const{user,setUser} = useUserAuth();
  console.log(user)

  const [Email,setEmail] = useState()
  const [Pwd,setPwd]= useState()
  const nav = useNavigate()

const handleAdminLogin =()=>{
  console.log(Email)
  console.log(Pwd)

  axios.post("http://localhost:9501/ad/adminlogin",  null, {params:{Email,Pwd}})
       .then((Response)=>{
        console.log(Email)
        console.log(Response)
        if(Response.status === 200){
          console.log('success');
          toast.success('Login successfully!',{
            position: "top-right",
            autoClose:8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          sessionStorage.setItem("role","admin")
          sessionStorage.setItem("loginByAdmin",Response.data)  
          setUser("admin")
          console.log(sessionStorage.getItem("loginByAdmin"))
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
        <Form onSubmit={handleAdminLogin}>
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
         </Container>
        </Form>
       </CardBody>
      </Card>
     </Col>
    </Row>
   </Container> 
  )
}
