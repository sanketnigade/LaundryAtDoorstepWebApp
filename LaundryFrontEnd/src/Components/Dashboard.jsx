import React from 'react'
import { useUserAuth } from '../Context/UserAuthContextProvider'
import CustomerDashboard from './CustomerDashboard'
import AdminDashboard from './AdminDashboard'

export default function Dashboard() {
  const {user}=useUserAuth()
 return(user=="customer"? <CustomerDashboard></CustomerDashboard>:  <AdminDashboard></AdminDashboard>)
}
