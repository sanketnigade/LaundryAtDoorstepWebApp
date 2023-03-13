import React, { useContext } from 'react'
import Logo from './Logo'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import  { useUserAuth } from '../Context/UserAuthContextProvider';
import { useNavigate } from 'react-router-dom';

function Navbar() {
const nav= useNavigate()  

  const { user, setUser } = useUserAuth();
  console.log(user)

  const role= sessionStorage.getItem("role")
  console.log(role)

  //here are options for login
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCustomerLogin=()=>{
    setAnchorEl(null);
    nav("/customerlogin/");
  };
  const handleAdminLogin=()=>{
    setAnchorEl(null);
    nav("/adminlogin");
  };

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open1 = Boolean(anchorE2);
  const handleClick1 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorE2(null);
  };
  const handleCustomerSignUp = () => {
    setAnchorE2(null);
    nav("/customersignup/");
  };
  const handleAdminSignUp = () => {
    setAnchorE2(null);
    nav("/adminsignup");
  };

  
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0 nav-titles ">
  <div className="container-fluid p-0">
    <Logo />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/Home">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contactUs">Contact Us</a>
        </li>
      </ul>
      <div className='p-4'>
        {user?.length>0?
        <>
        <button className='m-1 btn btn-outline-light' onClick={()=>nav("dashboard")}>DashBoard</button>
        <a href="/home" className='m-1 btn btn-outline-light' onClick={()=>{sessionStorage.clear()
          setUser('')}
        }>Log Out</a></>:
         <> 
         <>
            <Button
              id="basic-button"
              variant="contained" color="success"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Login
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCustomerLogin}>Customer Login</MenuItem>
              <MenuItem onClick={handleAdminLogin}>Admin Login</MenuItem>
            </Menu>
          </>
          <>
           <Button
              id="basic-button" className='bg-warning ms-2 text-light'
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick1}
            >
              SignUp
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorE2}
              open={open1}
              onClose={handleClose1}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleCustomerSignUp}>Customer SignUp</MenuItem>
              <MenuItem onClick={handleAdminSignUp}>Admin SignUp</MenuItem>
            </Menu>
          </>
        </>}
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
