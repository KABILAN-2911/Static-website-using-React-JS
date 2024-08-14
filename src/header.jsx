import React from 'react'
import k from "./assets/k.png"

const Header = () => {
  return (
   
    <div class="container-fluid  bg-black  pt-3 pb-3 sticky-top nav  nav-pills text-white nav-justified" id="nav1">

    <li class="nav-item text-start ms-4 my-0">
      <a class="navbar-brand"> <img src={k} alt="logo" width="50px" class="rounded-pill" /> 
       </a>
      </li>
    <li class="nav-item my-0">
      <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
    </li>
    <li class="nav-item my-0">
      <a class="nav-link" data-bs-toggle="tab" href="#AboutUs">About Us</a>
    </li>
    <li class="nav-item my-0">
      <a class="nav-link" data-bs-toggle="tab" href="#Services">Services</a>
    </li>

    <li class="nav-item my-0">
      <a class="nav-link" data-bs-toggle="tab" href="#ContactUs">Contact Us</a>
    </li>
  </div>

  );
}

export default Header;
