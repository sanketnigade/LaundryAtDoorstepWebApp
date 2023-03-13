import React from 'react'
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Container ,Row ,Col,Table} from 'reactstrap'

export default function AdminOrders() {
  let userId=sessionStorage.getItem('loginByCust')
 const [orders,setOrders]= useState()
 const provId =sessionStorage.getItem("loginByAdmin")
 useEffect(()=>{
  console.log(userId)
       axios.get("http://localhost:9501/adminorders/getAllByAdmin/"+provId)
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
            <th>Order Id </th>
            <th>Total Amount</th>
            <th>Payment Mode</th>
            <th>Paayment Status</th>
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
