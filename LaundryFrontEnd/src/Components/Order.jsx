import React, { useEffect, useState } from 'react'
import { useAdminAuth } from '../Context/AdminAuthContextProvider';
import { Container ,Row,Col,Table, Button, Label, Form} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@mui/material';

export default function Order() {

  const nav= useNavigate()

  // const [admins, setAdmins ] = useAdminAuth();
  const [admins, setAdmins ] = useState();

   useEffect(()=>{
      axios.get("http://localhost:9501/order/getAll")
    .then((response)=>{
      console.log(response.data)
      const adminsData=response.data
      setAdmins(adminsData);
    })
    .catch((error)=>{
      console.log(error)
    })
   },[]);

   const doBooking=(id)=>{
      sessionStorage.setItem("selectedAdmin",id)
      nav("/bookorder");
   }
  
  return (
    
    <Container className='p-3'>
      <Row className='p-2 text text-center text-primary'><h2>Select any Laundry Provider From here!</h2></Row>
      <Table>
        <thead>
          <tr>
            <th>Laundry Name </th>
            <th>Description</th>
            <th>Address</th>
            <th>Book Order Now</th>
          </tr>
        </thead>
        <tbody>
          {admins && admins.map((a)=>
          <tr key={a.providerRegistration_id}>
              <td>{a.providerRegistration_name}</td>
              <td>{a.description}</td>
              <td>{a.providerRegistration_address}</td>
              <td>
                <Button className='btn btn-secondary' 
                onClick={()=>doBooking(a.providerRegistration_id)}>
                   Book Now</Button>
              </td>
          </tr>
          )}
        </tbody>
            </Table>
        </Container>
  )
}
