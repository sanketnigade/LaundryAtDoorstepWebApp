import './App.css';
import Home from './Components/Home';
import ErrorComponent from './Components/ErrorComponent'
import About from './Components/About';
import Blog from './Components/Blog';
import CustomerOrders from './Components/CustomerOrders';
import ContactUs from './Components/ContactUs';
import Services from './Components/Services';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AdminLogin from './Components/AdminLogin'
import AdminOrders from './Components/AdminOrders';
import AdminSignUp from './Components/AdminSignUp'
import HowItWorks from './Components/HowItWorks';
import { UserAuthContextProvider } from './Context/UserAuthContextProvider';
import Dashboard from './Components/Dashboard';
import Order from './Components/Order';
import Prices from './Components/Prices'
import CustomerSignup from './Components/CustomerSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerLogin from './Components/CustomerLogin'
import ProtectedRoute from './Context/ProtectedRoute';
import BookOrder from './Components/BookOrder';

function App() {
  return (
    <UserAuthContextProvider>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/working' element={<HowItWorks/>}/>

        <Route path='/customerlogin/' element={<CustomerLogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute> }/>
        <Route path='/customersignup/' element={<CustomerSignup/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/order' element={<ProtectedRoute><Order/></ProtectedRoute>}/>
        <Route path='/setPrice' element={<Prices/>}/> 
        <Route path='/bookorder' element={<BookOrder/>}/>  
        <Route path='/adminorders' element={<AdminOrders/>}/>
        <Route path='/customerorders' element={<CustomerOrders/>}/>
        <Route path='*' element={<ErrorComponent></ErrorComponent>}/>
      </Routes>
      <Footer/>
    </Router>
    </UserAuthContextProvider>
  );
}

export default App;
