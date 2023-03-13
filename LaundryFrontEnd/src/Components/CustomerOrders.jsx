import React from 'react'
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Container ,Row ,Col,Table} from 'reactstrap'

export default function CustomerOrders() {

 let userId=sessionStorage.getItem('loginByCust')
 const [orders,setOrders]= useState()
 useEffect(()=>{
  console.log(userId)
       axios.get("http://localhost:9501/customerorders/"+userId)
    .then((response)=>{
      console.log(response.data)
      const orderList=response.data
      setOrders(orderList);
    })
    .catch((error)=>{
      console.log(error)
    })
   },[]);

  return (
    <Container className='p-3'>
     <Row className='p-2 text-primary text-center'>
      <h2>See Your Orders Below</h2>
     </Row>
      <Row className='p-2'>
       <Col>
        <Table>
        <thead>
          <tr>
            <th>Sr. No. </th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.map((a)=>
          <tr key={a.payment_id}>
           <td>{a.payment_id}</td>
              <td>{a.amount}</td>
              <td>{a.paymentMode}</td>
              <td>Pending</td>
          </tr>
          )}
        </tbody>
            </Table>
       </Col>
      </Row>
    </Container>
  )
}
